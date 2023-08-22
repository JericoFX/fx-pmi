local QBCore = exports["qb-core"]:GetCoreObject()
local db = require "server.data.db"
lib.callback.register("fx::pmi::server::getPlayerInfo",function(source,id) 
    if not source or not id then return end
    local PlayerData in QBCore.Functions.GetPlayer(source)
    if not PlayerData or not Config.Job[PlayerData.job.name] then return end
    local _OPlayer = QBCore.Functions.GetPlayerByCitizenId(id)
    if  _OPlayer then -- player is Online
        ---TODO return all the that i need from the Player table.
        return {
            firstname = PlayerData?.charinfo.firstname,
            lastname = PlayerData?.charinfo.lastname,
            phone = PlayerData?.charinfo.phone,
            citizenid = PlayerData?.citizenid,
        }
    else
        -- Player is not online
        -- https://overextended.dev/oxmysql/Functions/single
        -- This function does nothing because QB doesnt have that sql structure.
        ---TODO return all the that i need from the Player table.
        local _CurrentPlayer = db.GrabByCitizenID(id)
        if not _CurrentPlayer then return false end
        return _CurrentPlayer
    end
end)