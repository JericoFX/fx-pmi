local Officers = {}

--- Function to change the Duty of the current Player
---@param state? boolean - State of the Duty
function Officers.changeDuty(state)
    if type(state) ~= "boolean" then return nil end
    TriggerServerEvent("fx::pmi::server::updatePmiInformation","duty",state)
    TriggerServerEvent('QBCore:ToggleDuty')
end

--- Get the player information.
---@param id (string|number) - Player ID
function Officers.getPlayerInformation(id)
    if not id then return end
    local status = lib.callback.await("fx::pmi::server::getPlayerInfo",nil,id)
    return status
end

return Officers