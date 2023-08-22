local Vehicles = {}
local Config = require "config.client"

CreateThread(function() 
    lib.onCache("vehicle", function(value)
        local _class = GetVehicleClass(value)
         print("vehicle class passed",_class)
        if Config.UClass[_class] then
            local _plate = GetVehicleNumberPlateText(_class)
            TriggerServerEvent("fx::pmi::server::updatePmiInformation","vehicle",{
                plate = _plate,
                vehicle = value,
                class = _class
            })
        end
    end)
end)

--- Function to grab a vehicle data.
---@param plate string Plate of the vehicle
---@return {citizenid:string,vehicle:string,lastname:string,fisrtname:string,plate:string,phone:string}
function Vehicles.getVehicleByPlate(plate)
    if not plate then return end
    local _vehicle = lib.callback.await("fx::pmi::server::getVehicleByPlate",nil,plate)
    if not _vehicle then return false end
    return _vehicle
end

return Vehicles