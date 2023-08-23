local QBCore = exports["qb-core"]:GetCoreObject()
local Player = require "client.data.officer"
local Vehicle = require "client.data.vehicles"
local Tabla = require "client.data.table"
require "client.data.handlers" ()

--- Function to open the NUI.
---@param bool boolean - Function to open the NUI and set the focus.
---@param data table - Table with the current pmi data.
local function openNUI(bool, data)

end

local function closeNUI(data, cb)
    cb({})
end

local function changeDuty(data, cb)
    cb(Player.changeDuty(data.duty))
end

local function searchPlayer(data, cb)
    cb(Vehicle.getVehicleByPlate(data.plate))
end

RegisterCommand("openpmi", function(source, args)
    local openMDT = lib.callback.await("fx::pmi::server::gerPmiData", nil,Tabla.id or nil)
    print(json.encode(openMDT, { indent = true }))
end, false)

AddEventHandler("onResourceStop", function(res)
    if not GetCurrentResourceName() == res then return end
    require "client.data.handlers" ()()
end)
