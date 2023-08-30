return function()
    local Eventos = {}
    local Table = require "client.data.table"
    AddStateBagChangeHandler("radioChannel", nil, function(a, s, value, f, g)
        local player = GetEntityFromStateBagName(a)
        TriggerServerEvent("fx::pmi::server::updatePmiInformation","radio",value)
    end)

    RegisterNetEvent("fx::pmi::client::setTable")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::setTable", function(data)
        Table = data
    end)

    RegisterNetEvent("fx::pmi::client::addPlayerToTablet")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::addPlayerToTablet", function(data)
        Table[data.citizenid] = data
        SendNUIMessage({
            action = "updatePolice",
            data = {
                type = "add",
                data = data
            }
        })
    end)

    RegisterNetEvent("fx::pmi::client::removePlayerToTablet")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::removePlayerToTablet", function(data)
        Table[data.citizenid] = nil
        SendNUIMessage({
            action = "updatePolice",
            data = {
                type = "remove",
                data = data
            }
        })
    end)

    RegisterNetEvent("fx::pmi::client::updatePmiInformation")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::updatePmiInformation", function(information,data)
        Table[data.citizenid][information] = data
        SendNUIMessage({
            action = information,
            data = data
        })
    end)

    return function()
        for i = 1, #Eventos do
            local el = Eventos[i]
            RemoveEventHandler(el)
        end
    end
end
