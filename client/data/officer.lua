local Officers = {}

--- Function to change the Duty of the current Player
---@param state? boolean - State of the Duty
function Officers.changeDuty(state)
    if not state then return end
    
end

--- Get the player information.
---@param id (string|number) - Player ID
function Officers.getPlayerInformation(id)
    if not id then return end
    local status = lib.callback.await("fx::pmi::server::getPlayerInfo",nil,id)
    return status
end

return Officers