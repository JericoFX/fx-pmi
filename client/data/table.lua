local pmiDataClient = setmetatable({}, {
    __newindex = function(t, k, v)
        rawset(t, k, v)
    end,
    __index = function(t, k)
        return rawget(t, k)
    end
})

local TablaData = {}

function TablaData.setValueToTable(value)
    pmiDataClient = value
end

function TablaData.updateTableIndex(value)
    pmiDataClient[#pmiDataClient + 1] = value
end

function TablaData.getTableValue()
    return pmiDataClient
end

function TablaData.removeFromTable(cid)
    CreateThread(function()
        for i = 1, #pmiDataClient do
            local el = pmiDataClient[i]
            if el.citizenid == cid then
                el = nil
                return true
            end
        end
        Wait(0)
        return false
    end)
end

function TablaData.updateTableIndexValue(cid, information, value)
    CreateThread(function()
        print(("Updated %s from %s with the value %s"):format(information, cid, json.encode(value, { indent = true })))
        for i = 1, #pmiDataClient do
            local el = pmiDataClient[i]
            if el.citizenid == cid then
                el[information] = value
                return true
            end
        end
        Wait(0)
        return false
    end)
end

return TablaData
