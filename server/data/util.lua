local random = math.random
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

function util.uuid(n)
    n = n or 4
    local template = string.rep('x', n) .. 'xxxx4xxxyxxxxxxxxxxxxxxx'
    return string.gsub(template, '[xy]', function(c)
        local v = (c == 'x') and random(0, 0xf * (n + 1) - 1) or random(8, 0xb)
        return string.format('%x', v)
    end)
end

return util