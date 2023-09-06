return function()
    local QBCore = require "client.data.core"
    local Eventos = {}
    local Table = require "client.data.table"

    --- pmi-voice Handler
    AddStateBagChangeHandler("radioChannel", nil, function(a, s, value, f, g)
        TriggerServerEvent("fx::pmi::server::updatePmiInformation", "radio", value)
    end)

    AddStateBagChangeHandler(nil, nil, function(bagName, algo, value, f, g)
        print("GLOBALSTATE", bagName, algo, json.encode(value))
    end)

    RegisterNetEvent("fx::pmi::client::setTable")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::setTable", function(data)
        Table.setValueToTable(data)
    end)

    RegisterNetEvent("fx::pmi::client::addPlayerToTablet")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::addPlayerToTablet", function(data)
        local tabla = Table.getTableValue()
        print("GIL", json.encode(data))
        local contiene = lib.table.contains(tabla, data.citizenid)
        if contiene then
            print("Player already on table")
            return
        end
        Table.updateTableIndex(data)
        SendNUIMessage({
            type = "updatePolice",
            payload = {
                type = "add",
                data = data
            }
        })
    end)

    RegisterNetEvent("fx::pmi::client::removePlayerToTablet")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::removePlayerToTablet", function(data)
        Table.removeFromTable(data[1].citizenid)
        SendNUIMessage({
            type = "updatePolice",
            payload = {
                type = "remove",
                data = data[1]
            }
        })
    end)

    RegisterNetEvent("fx::pmi::client::updatePmiInformation")
    Eventos[#Eventos + 1] = AddEventHandler("fx::pmi::client::updatePmiInformation", function(information, data)
        Table.updateTableIndexValue(data.citizenid, information, data)
        if information == "vehicle" then
            if type(data) == "table" and data.data then
                print(data.data.vehicle, data.data.plate)
                SendNUIMessage({
                    type = information,
                    payload = {
                        info = "add",
                        citizenid = data.citizenid,
                        vehicle = data.data.vehicle,
                        plate = data.data.plate
                    }
                })
            else
                SendNUIMessage({
                    type = information,
                    payload = {
                        info = "remove",
                        citizenid = data.citizenid,
                        vehicle = nil
                    }
                })
            end
        end
    end)

    return function()
        for i = 1, #Eventos do
            local el = Eventos[i]
            RemoveEventHandler(el)
        end
    end
end
