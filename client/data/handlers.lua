return function()
    local Eventos = {}
    local Table = require "client.data.table"

    --- pmi-voice Handler
    AddStateBagChangeHandler("radioChannel", nil, function(a, s, value, f, g)
        print(value)
        TriggerServerEvent("fx::pmi::server::updatePmiInformation", "radio", value)
    end)

    RegisterNetEvent("fx::pmi::client::setTable")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::setTable", function(data)
        Table = data
    end)

    RegisterNetEvent("fx::pmi::client::addPlayerToTablet")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::addPlayerToTablet", function(data)
        if Table[data[1].citizenid] then return end
        Table[data[1].citizenid] = data
        SendNUIMessage({
            type = "updatePolice",
            payload = {
                type = "add",
                data = data[1]
            }
        })
    end)

    RegisterNetEvent("fx::pmi::client::removePlayerToTablet")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::removePlayerToTablet", function(data)
        Table[data[1].citizenid] = nil
        SendNUIMessage({
            type = "updatePolice",
            payload = {
                type = "remove",
                data = data
            }
        })
    end)

    RegisterNetEvent("fx::pmi::client::updatePmiInformation")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::updatePmiInformation", function(information, data)
        Table[data.citizenid][information] = data
        SendNUIMessage({
            type = information,
            payload = data
        })
    end)

    return function()
        for i = 1, #Eventos do
            local el = Eventos[i]
            RemoveEventHandler(el)
        end
    end
end
