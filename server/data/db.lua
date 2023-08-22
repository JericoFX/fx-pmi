local db = {}
local QUERY_STRINGS = {
    GrabPlayerByCitizenId = [[
        SELECT JSON_VALUE(player.charinfo,'$.firstname') AS firstname, JSON_VALUE(player.charinfo,'$.lastname') AS lastname,JSON_VALUE(player.charinfo,'$.phone') AS phone,citizenid FROM `player` WHERE `citizenid` = ? LIMIT 1
    ]]
}

function db.GrabByCitizenID(id)
    if not id then return end
    --https://overextended.github.io/docs/oxmysql/Usage/single
    local variable = MySQL.single.await(QUERY_STRINGS.GrabPlayerByCitizenId, {id})
    if not variable or #variable == 0 or table.type(variable) == "empty" then return false end
    return variable
end