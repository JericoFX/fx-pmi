local QBCore = exports["qb-core"]:GetCoreObject()

lib.callback.register("fx::pmi::server::getPlayerInfo",function(source,id) 
    if not source or not id then return end
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player or not Config.Job[Player.PlayerData.job.name] then return end
    local _OPlayer = QBCore.Functions.GetPlayerByCitizenId(id)
    if  _OPlayer then -- player is Online
        ---TODO return all the that i need from the Player table.

    else
        -- Player is not online
        -- https://overextended.dev/oxmysql/Functions/single
        -- This function does nothing because QB doesnt have that sql structure.
        ---TODO return all the that i need from the Player table.
        local _CurrentPlayer = MySQL.single.await('SELECT `firstname`, `lastname` FROM `users` WHERE `citizenid` = ? LIMIT 1', {id})
        if not _CurrentPlayer then return false end
    end
end)