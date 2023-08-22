local Vehicles = {}
local Config = require "config.client"

CreateThread(function() 
    lib.onCache("vehicle", function(value)
        
        local _class = GetVehicleClass(value)
        if  Config.UClass[_class] then
            local _plate = GetVehicleNumberPlateText(_class)
            TriggerServerEvent("fx::pmi::server::updatePmiInformation","vehicle",{
                plate = _plate,
                vehicle = value,
                class = _class
            })
        end
    end)
end)

function Vehicles.getVehicleByPlate(plate)
    if not plate then return end
    local _vehicle = lib.callback.await("fx::pmi::server::getVehicleByPlate",nil,plate)
    if not _vehicle then return false end
    return _vehicle
end

return Vehicles