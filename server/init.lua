local QBCore = exports["qb-core"]:GetCoreObject()
local db = require "server.data.db"
local current = "pmi:%s"
local updateInformation = {"vehicle","duty","callsign"}

local function checkForJob(player)
    if not player then return end
    return Config.job[player]
end

--- Dont know if this will work
--- This function runs after the player spawn so we set a state bag with the value of nil.

AddEventHandler("QBCore:Server:PlayerLoaded",function() 
    local _src = source
    Player(_src).state:set(string.format(current,"vehicle"),nil,true)
    Player(_src).state:set(string.format(current,"duty"),nil,true)
    Player(_src).state:set(string.format(current,"callsign"),nil,true)
end)

lib.callback.register("fx::pmi::server::getPlayerInfo",function(source,id) 
    if not source or not id then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return end
    local _OPlayer = QBCore.Functions.GetPlayerByCitizenId(id)
    if  _OPlayer then -- player is Online
        ---TODO return all the that i need from the Player table.
        return {
            firstname = PlayerData?.charinfo.firstname,
            lastname = PlayerData?.charinfo.lastname,
            phone = PlayerData?.charinfo.phone,
            citizenid = PlayerData?.citizenid,
            rank = PlayerData?.job.grade.name
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
    local vehicle = db.GrabByPlate(plate)
    return vehicle
end)

RegisterNetEvent("fx::pmi::server::updatePmiInformation",function(information,data) 
    if not updateInformation[tostring(information)] then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not checkForJob(PlayerData.job.name) then return end
    --- Maybe instead of a bag, create a triggerclientevent with the source of the polices in job and thats it.
    Player(source).state:set(string.format(current,information),data,true) 
end)


---  This is the only way that i found to check if the player on client side modified a state bag.
--- argument F is the payload size, server > client is 0, client > server is 2048
--- I can't set a DropPlayer because PMA uses it.
AddStateBagChangeHandler(nil,nil,function(a,s,d,f,g)
    if f ~= 0 then
        print("CLIENT MODIFIED A STATE BAG")
        return
    end
end)