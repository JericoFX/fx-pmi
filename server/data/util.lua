local util = {}
local Types = {
    string  = function(value)
        return tostring(value)
    end,
    number = function(value)
        return tonumber(value)
    end
}

--- Function to check the type and return the value.
---@param value (string|number) - Value to check the type and return the correct one.
---@param expected string - Expected value to be.
---@return (string|number)
function util.type(value,expected)
if not type(value) == expected  then
    return Types[expected](value)
end
return value
end