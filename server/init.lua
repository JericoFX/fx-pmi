local QBCore = exports["qb-core"]:GetCoreObject()
local db = require "server.data.db"
local util = require "server.data.util"
local Config = require "config.server"
local current = "pmi:%s"
local updateInformation = {vehicle = true,duty = true,callsign = true, assignment = true}
local pmiData = {}
local function checkForJob(player)
    if not player then return end
    return Config.Job[player]
end

local function checkForVehicle(plate)
    local p = promise.new()
    Citizen.CreateThreadNow(function() 
        local plate = tostring(plate)
        local Vehicles = GetAllVehicles()
        for i=0, #Vehicles,-1 do
            local el = Vehicles[i]
            if DoesEntityExist(el) then
                local _plate = GetVehicleNumberPlateText(el)
                if _plate == plate then
                    p:resolve(el)
                end
            end
        end
        p:resolve(false)
    end)
    return Citizen.Await(p)
end

--- Function to send data just to the sources with specific jobs.
---@param name string - Name of the event.
---@param job string - Name of the job.
---@param ... any - All the data you want to send with the event
local function sendDataToJob(name,job --[[@as string]],...)
    local Players = QBCore.Functions.GetQBPlayers()
    for src, Player in pairs(Players) do
        if Player.PlayerData.job.name == job then
            TriggerClientEvent(name,src,...)
        end
    end
end

--- Dont know if this will work
--- This function runs after the player spawn so we set a state bag with the value of nil.
AddEventHandler("QBCore:Server:PlayerLoaded",function(data)
    Citizen.CreateThreadNow(function() 
    local _src = type(data.PlayerData.source) == "number" and data.PlayerData.source or tonumber(data.PlayerData.source)
    if not checkForJob(data.PlayerData.job.name) then
        return
    end
    -- FIX FOR LATER, NEW PLAYERS NEED ALL THE DATA.
    -- This function send ONLY the recent player connected
    -- This one right here track all the modifications.
        pmiData[data.PlayerData.citizenid] = {
            firstname = data.PlayerData.charinfo.firstname,
            lastname = data.PlayerData.charinfo.lastname,
            phone = data.PlayerData.charinfo.phone,
            citizenid = data.PlayerData.citizenid,
            rank = data.PlayerData.job.grade.name,
            callsign = data.PlayerData.metadata.callsign,
            vehicle = "",
            duty = data.PlayerData.job.duty,
            assignment = false
        }

    sendDataToJob("fx::pmi::client::setTable","police",pmiData)
    end)
    -- Player(_src).state:set(current:format("vehicle"),nil,true)
    -- Player(_src).state:set(current:format("duty"),nil,true)
    -- Player(_src).state:set(current:format("callsign"),nil,true)
    -- Player(_src).state:set(current:format("assignment"),nil,true)
end)


AddEventHandler("QBCore:Server:OnPlayerUnload",function(src)
    local Player = QBCore.Functions.GetPlayer(src)
    pmiData[Player.PlayerData.citizenid] = nil
    sendDataToJob("fx::pmi::client::removePlayerToTablet","police",{citizenid = Player.PlayerData.citizenid})
end)

AddEventHandler("QBCore:Server:OnJobUpdate",function(src,job)
    local Player = QBCore.Functions.GetPlayer(src)
    if  pmiData[Player.PlayerData.citizenid] and not checkForJob(job.name) then
        -- If the player changed his job and before that was a police, lets clean the table
        print("Player was a police ")
        sendDataToJob("fx::pmi::client::removePlayerToTablet","police",{citizenid = Player.PlayerData.citizenid})
        pmiData[Player.PlayerData.citizenid] = nil
        return 
    elseif not pmiData[Player.PlayerData.citizenid] and not checkForJob(job.name)
        -- If his not in the table and not a police then return it
        print("Player isnt a police and he is not on the table")
        return
    end

    pmiData[Player.PlayerData.citizenid] = {
        firstname = Player.PlayerData.charinfo.firstname,
        lastname = Player.PlayerData.charinfo.lastname,
        phone = Player.PlayerData.charinfo.phone,
        citizenid = Player.PlayerData.citizenid,
        rank = Player.PlayerData.job.grade.name,
        callsign = Player.PlayerData.metadata.callsign,
        vehicle = "",
        duty = Player.PlayerData.job.duty,
        assignment = false
    }

    sendDataToJob("fx::pmi::client::addPlayerToTablet","police",{
        firstname = Player.PlayerData.charinfo.firstname,
        lastname = Player.PlayerData.charinfo.lastname,
        phone = Player.PlayerData.charinfo.phone,
        citizenid = Player.PlayerData.citizenid,
        rank = Player.PlayerData.job.grade.name,
        callsign = Player.PlayerData.metadata.callsign,
        vehicle = "",
        duty = Player.PlayerData.job.duty,
        assignment = false
    })
end)


lib.callback.register("fx::pmi::server::getPlayerInfo",function(source,id)
    if not source or not id then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return  end
    local _OPlayer = QBCore.Functions.GetPlayerByCitizenId(id)
    if  _OPlayer then -- player is Online
        ---TODO return all the that i need from the Player table.Online
        return {
            firstname = PlayerData.charinfo.firstname,
            lastname = PlayerData.charinfo.lastname,
            phone = PlayerData.charinfo.phone,
            citizenid = PlayerData.citizenid,
            rank = PlayerData.job.grade.name
        }
    else
        -- Player is not online
        ---TODO return all the that i need from the Player table.
        local _CurrentPlayer = db.GrabByCitizenID(id)
        if not _CurrentPlayer then return false end
        return _CurrentPlayer
    end
end)

--- Callback to get the data from a vehicle and send it back to the player.
---@param source (string|number) - Source of the player
---@param plate string - Plate of the vehicle.
lib.callback.register("fx::pmi::server::getVehicleByPlate",function(source,plate --[[@as string]]) 
    if not plate then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return end
    local vehicle = db.GrabByPlate(plate:upper())
    return vehicle
end)

--- Function to get th table that has all the info on the server.
--- TODO: Send it only once, player doesnt need the full table every single time.
lib.callback.register("fx::pmi::server::gerPmiData",function(source,id)
    local Player = QBCore.Functions.GetPlayer(source)
    if not checkForJob(Player.PlayerData.job.name) then return end
    --- Pass the ID od the table, if for some reason we have the same dont send anything.
    --- else send the new table.
    return pmiData
end)

--- Function to check if a vehicle exist and if exist will return the coords.
---@param source (string|number) - Player that fire the event.
---@param plate string - Plate of the vehicle
---@return ({x:string,y:string,z:string} | boolean)
lib.callback.register("fx::pmi::server::doesVehicleExist",function(source,plate) 
    if not source or not plate then return end
    local Player = QBCore.Functions.GetPlayer(source)
    if not checkForJob(Player.PlayerData.job.name) then return end
    local _entity = checkForVehicle(plate)
    return _entity and GetEntityCoords(_entity) or false
end)

--- Event that handle all the modifications on the player.
---@param information string - The data to modify must be "duty","vehicle","callsign","assignment"
RegisterNetEvent("fx::pmi::server::updatePmiInformation",function(information,data)
    if not updateInformation[tostring(information)] then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return end
    pmiData[PlayerData.citizenid][information] = data
    sendDataToJob("fx::pmi::client::updatePmiInformation","police",information,{
        citizenid = PlayerData.citizenid,
        data = data
    })
end)

---  This is the only way that i found to check if the player on client side modified a state bag.
--- argument F is the payload size, server > client is 0, client > server is 2048
--- I can't set a DropPlayer because PMA uses it.
---@param a string Player number (server)
---@param s string Name of the bag.
---@param d any Value of the bag modified.
---@param f number payload size
---@param g boolean Networked?
AddStateBagChangeHandler(nil,nil,function(a,s,d,f,g)
    local player = GetPlayerFromStateBagName(a)
    print("PLAYER IS: ",player)
    if f ~= 0 then
        print("CLIENT MODIFIED A STATE BAG",a,s,d,f,g)
        return
    end
end)