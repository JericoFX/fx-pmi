local QBCore = exports["qb-core"]:GetCoreObject()
--- Require files, thanks to OX!
local db = require "server.data.db"
local util = require "server.data.util"
local Config = require "config.server"
local current = "pmi:%s"
--- Information that will send it over to the client.
local updateInformation = {vehicle = true, duty = true, callsign = true, assignment = true, radio = true}
local pmiData = {}

local function checkForJob(player)
    if not player then return end
    return Config.Job[player]
end

local function deleteFromTable(value)
    local contiene = lib.table.contains(pmiData,value)
    if not contiene then return end
    for i = 0,#pmiData do
        local el = pmiData[i]
        if el.citizenid == value then
            el = nil
        end
    end
end

local function updateTableValue(cid,information,value)
 local contiene = lib.table.contains(pmiData,value)
    if not contiene then return false end
    for i = 0,#pmiData do
        local el = pmiData[i]
        if el.citizenid == cid then
            el[information] = value
            return true
        end
    end
    return false
end

--- Function to get the vehicle from a plate, im not sure about this one, a thread and a promise?, a promise need a corutine?,God knows...
---@param plate string - Plate of the vehicle.
---@return (number|boolean)
local function checkForVehicle(plate)
    local p = promise.new()
    Citizen.CreateThreadNow(function() 
        local plate = tostring(plate)
        local Vehicles = GetAllVehicles()
        for i=0, #Vehicles do
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
    local ars = {...}
    Citizen.CreateThreadNow(function() 
        local Players = QBCore.Functions.GetQBPlayers()
        for src, Player in pairs(Players) do
            if Player.PlayerData.job.name == job then
                print("SENDED ",json.encode(ars))
                TriggerClientEvent(name,src,table.unpack(ars))
                Wait(0)
            end
        end
    end)
end

--- Dont know if this will work
--- This function runs after the player spawn so we set a state bag with the value of nil.
AddEventHandler("QBCore:Server:PlayerLoaded",function(data)
    local _src = type(data.PlayerData.source) == "number" and data.PlayerData.source or tonumber(data.PlayerData.source)
    if not checkForJob(data.PlayerData.job.name) then
        return
    end
    print("Player Loaded!",data.PlayerData.job.name)
        pmiData[#pmiData+1] = {
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


AddEventHandler("QBCore:Server:OnPlayerUnload",function(src)
    local Player = QBCore.Functions.GetPlayer(src)
    deleteFromTable(Player.PlayerData.citizenid)
    sendDataToJob("fx::pmi::client::removePlayerToTablet","police",{citizenid = Player.PlayerData.citizenid})
end)

AddEventHandler("QBCore:Server:OnJobUpdate",function(src,job)
    local Player = QBCore.Functions.GetPlayer(src)
    local cid = lib.table.contains(pmiData,Player.PlayerData.citizenid)
    if  cid and not checkForJob(job.name) then
        -- If the player changed his job and before that was a police, lets clean the table
        print("Player was a police, cleaning table")
        sendDataToJob("fx::pmi::client::removePlayerToTablet","police",{citizenid = Player.PlayerData.citizenid})
        deleteFromTable(Player.PlayerData.citizenid)
       -- pmiData[Player.PlayerData.citizenid] = nil
        return
    elseif not cid and not checkForJob(job.name) then
        -- If his not in the table and not a police then return it
        print("Player isnt a police and he is not on the table")
        return
    end

  

    pmiData[#pmiData+1]= {
        firstname = Player.PlayerData.charinfo.firstname,
        lastname = Player.PlayerData.charinfo.lastname,
        phone = Player.PlayerData.charinfo.phone,
        citizenid = Player.PlayerData.citizenid,
        rank = Player.PlayerData.job.grade.name,
        callsign = Player.PlayerData.metadata.callsign,
        vehicle = nil,
        duty = Player.PlayerData.job.onduty,
        assignment = false
    }
  
    sendDataToJob("fx::pmi::client::addPlayerToTablet","police",{
        firstname = Player.PlayerData.charinfo.firstname,
        lastname = Player.PlayerData.charinfo.lastname,
        phone = Player.PlayerData.charinfo.phone,
        citizenid = Player.PlayerData.citizenid,
        rank = Player.PlayerData.job.grade.name,
        callsign = Player.PlayerData.metadata.callsign,
        vehicle = nil,
        duty = Player.PlayerData.job.onduty,
        assignment = false
    })
end)


lib.callback.register("fx::pmi::server::getPlayerInfo",function(source,id)
    local st ,pt = pcall(function() 
        if not source or not id then return end
            local PlayerData in QBCore.Functions.GetPlayer(source)
            if not PlayerData or not checkForJob(PlayerData.job.name) then return  end
            local _OPlayer = QBCore.Functions.GetPlayerByCitizenId(id)
        if  _OPlayer then -- player is Online
            return {
                firstname = PlayerData.charinfo.firstname,
                lastname = PlayerData.charinfo.lastname,
                phone = PlayerData.charinfo.phone,
                citizenid = PlayerData.citizenid,
                rank = PlayerData.job.grade.name,
                duty = PlayerData.job.onduty
            }
        else
        -- Player is not online
            local _CurrentPlayer = db.GrabByCitizenID(id)
            if not _CurrentPlayer then return false end
            return _CurrentPlayer
        end
    end)
    return st
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
lib.callback.register("fx::pmi::server::gerPmiData",function(source,returnData)
    local Player = QBCore.Functions.GetPlayer(source)
    if not checkForJob(Player.PlayerData.job.name) then return false end
    return true
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

lib.callback.register("fx::pmi::server::changeCallSign",function(source,callsign) 
    if not source or not callsign then return end
    local Player = QBCore.Functions.GetPlayer(source)
    if not checkForJob(Player.PlayerData.job.name) then return end
    Player.Functions.SetMetaData("callsign", callsign)
    return true
end)

--- Event that handle all the modifications on the player.
---@param information string - The data to modify must be "duty","vehicle","callsign","assignment"
RegisterNetEvent("fx::pmi::server::updatePmiInformation",function(information,data)
    if not updateInformation[tostring(information)] then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return end
    updateTableValue(PlayerData.charinfo.citizenid,information,data)
    sendDataToJob("fx::pmi::client::updatePmiInformation","police",information,{
        citizenid = PlayerData.citizenid,
        data = data
    })
end)

---  This is the only way that i found to check if the player on client side modified a state bag.
--- argument F is the payload size, server > client is 0, client > server is 2048
---@param a string Player number (server)
---@param s string Name of the bag.
---@param d any Value of the bag modified.
---@param f number payload size
---@param g boolean Networked?
AddStateBagChangeHandler(nil,nil,function(a,s,d,f,g)
    if f ~= 0 then
        print("CLIENT MODIFIED A STATE BAG",a,s,d,f,g)
        return
    end
end)

RegisterCommand("setn",function(s,a)
  local Player =  QBCore.Functions.GetPlayer(s)
    Player.Functions.SetMetaData("callsign", "NO CALLSIGN")


end)
