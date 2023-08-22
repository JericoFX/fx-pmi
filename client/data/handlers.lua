return function()
    local Eventos = {}
    AddStateBagChangeHandler("pmi:vehicle", nil, function(a, s, value, f, g)
        print("From State Bag: ", GetEntityFromStateBagName(a))
    end)
    RegisterNetEvent("fx::pmi::client::addPlayerToTablet")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::addPlayerToTablet", function(data)
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
        SendNUIMessage({
            action = "updatePolice",
            data = {
                type = "remove",
                data = data
            }
        })
    end)

    return function()
        for i = 1, #Eventos do
            local el = Eventos[i]
            RemoveEventHandler(el)
        end
    end
end
