local QBCore = exports["qb-core"]:GetCoreObject()
local db = require "server.data.db"
local Config = require "config.server"
local current = "pmi:%s"
local updateInformation = {vehicle = true,duty = true,callsign = true}

local function checkForJob(player)
    if not player then return end
    return Config.Job[player]
end

local function sendDataToJob(name,job,...)
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
    local _src = type(data.PlayerData.source) == "number" and data.PlayerData.source or tonumber(data.PlayerData.source)
    if not checkForJob(data.PlayerData.job.name) then
        return
    end
    sendDataToJob("fx::pmi::client::addPlayerToTablet","police",
        {
            firstname = data.PlayerData.charinfo.firstname,
            lastname = data.PlayerData.charinfo.lastname,
            phone = data.PlayerData.charinfo.phone,
            citizenid = data.PlayerData.citizenid,
            rank = data.PlayerData.job.grade.name
        })
    Player(_src).state:set(current:format("vehicle"),nil,true)
    Player(_src).state:set(current:format("duty"),nil,true)
    Player(_src).state:set(current:format("callsign"),nil,true)
end)


AddEventHandler("QBCore:Server:OnPlayerUnload",function(src)
    local Player = QBCore.Functions.GetPlayer(src)
    sendDataToJob("fx::pmi::client::removePlayerToTablet","police",{citizenid = Player.PlayerData.citizenid})
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


lib.callback.register("fx::pmi::server::getVehicleByPlate",function(source,plate) 
    if not plate then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return end
    local vehicle = db.GrabByPlate(plate:upper())
    return vehicle
end)


RegisterNetEvent("fx::pmi::server::updatePmiInformation",function(information,data)
    if not updateInformation[tostring(information)] then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return end
    --- Maybe instead of a bag, create a triggerclientevent with the source of the polices in job and thats it.
    Player(source).state:set(current:format(information),data,true)
end)


---  This is the only way that i found to check if the player on client side modified a state bag.
--- argument F is the payload size, server > client is 0, client > server is 2048
--- I can't set a DropPlayer because PMA uses it.

---@param a string Player number (server)
---@param s string Name of the bag.
---@param d any Value of the bag modified.
---@param f number payload
---@param g boolean Networked?
AddStateBagChangeHandler(nil,nil,function(a,s,d,f,g)
    local player = GetPlayerFromStateBagName(a)
    print("PLAYER IS: ",player)
    if f ~= 0 then
        print("CLIENT MODIFIED A STATE BAG",a,s,d,f,g)
        return
    end
end)