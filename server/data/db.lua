local db = {}
local util = require "server.data.util"
local QUERY_STRINGS = {
    PlayerByID = [[
        SELECT JSON_VALUE(player.charinfo,'$.firstname') AS firstname, JSON_VALUE(player.charinfo,'$.lastname') AS lastname,JSON_VALUE(player.charinfo,'$.phone') AS phone,JSON_VALUE(player.job,'$.grade.name') AS rank ,citizenid FROM `player` WHERE `citizenid` = ? LIMIT 1
    ]],
    VehicleByPlate = "SELECT v.vehicle,v.plate,p.citizenid, JSON_VALUE(p.charinfo,'$.firstname') AS firstname, JSON_VALUE(p.charinfo,'$.lastname') AS lastname,JSON_VALUE(p.charinfo,'$.phone') AS phone FROM player_vehicles v INNER JOIN players p ON p.citizenid = v.citizenid WHERE v.plate = ? "
}

--- Function to grab the player by citizenid IF the player isnt connected
---@param id string - Citizenid from the player
---@return table
function db.GrabByCitizenID(id)
    if not id then return false end
    local _id = util.type(id,"string")
    --https://overextended.github.io/docs/oxmysql/Usage/single
    local variable = MySQL.single.await(QUERY_STRINGS.PlayerByID, {_id})
    if not variable  then return false end
    variable.duty = false
    return variable
end

--- Function to grab the player info by giving a plate
---@param plate string - plate from the vehicle
---@return table
function db.GrabByPlate(plate)
    if not plate then return end
    local _plate = util.type(plate,"string")
    local variable = MySQL.single.await(QUERY_STRINGS.VehicleByPlate, {_plate})
    if not variable then return false end
    return variable
end

return db