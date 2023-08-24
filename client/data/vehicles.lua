local Vehicles = {}
local Config = require "config.client"

CreateThread(function()
    lib.onCache("vehicle", function(value)
        local _class = GetVehicleClass(value)
        print("vehicle class passed", _class)
        if Config.UClass[_class] then
            local _plate = GetVehicleNumberPlateText(_class)
            TriggerServerEvent("fx::pmi::server::updatePmiInformation", "vehicle", {
                plate = _plate,
                vehicle = value,
                class = _class
            })
        end
    end)
end)

--- Function to grab a vehicle data.
---@param plate string Plate of the vehicle
---@return {citizenid:string,vehicle:string,lastname:string,fisrtname:string,plate:string,phone:string} | nil | boolean
function Vehicles.getVehicleByPlate(plate)
    if not plate then return false end
    local _vehicle = lib.callback.await("fx::pmi::server::getVehicleByPlate", nil, plate)
    if not _vehicle then return false end
    return _vehicle
end

--- Function that return coordinates of a vehicle and has the power to put a blip on it.
---@param entity (number|string) - Entity to return the coords.
---@param blip boolean - Add a blip to the entity.
---@return {x:number,y:number,z:number} - Vector3 of the entity
function Vehicles.getVehicleCoordinate(entity,blip)
    if not entity then 
        entity = Vehicles.grabEntityByPlate(entity) 
        if not entity then return false end
    end
    if not DoesEntityExist(entity) then return false end
    local _coords = GetEntityCoords(entity)
    if blip then
        local _blip = AddBlipForCoord(_coords.x, _coords.y, 5.0)
        SetBlipRoute(_blip,true)
        Citizen.SetTimeOut(10000,function() 
            SetBlipRoute(_blip,false)
            DeleteBlip(_blip)
        end)
    end
    return _coords
end

--- im not sure about this one, the client cant get all the vehicles, maybe move this to the server?
---@param plate string - Plate of the vehicle
---@return (string|number|boolean)
function Vehicles.grabEntityByPlate(plate)
    local vehicles = GetGamePool('CVehicle')
    for i = 0, #vehicles do
        local el = #vehicles[i]
        local _plate = GetVehicleNumberPlateText(el)
        if _plate == plate then
            return el
        end
    end
    return false
end

return Vehicles
