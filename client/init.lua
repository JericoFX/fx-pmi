local QBCore = exports["qb-core"]:GetCoreObject()
local Player = require "client.data.officer"
local Vehicle = require "client.data.vehicles"
local Tabla = require "client.data.table"
require "client.data.handlers" ()

--- Function to open the NUI.
---@param bool boolean - Function to open the NUI and set the focus.
---@param data table - Table with the current pmi data.
local function openNUI(bool)
    SetNuiFocus(bool,bool)
    SendNUIMessage({
        action = "openMDT",
        data = Tabla
    })
end

--- Function to close the NUI
---@param _ any - Data that come from the NUI.
---@param cb function - Function to pass back to the nui
local function closeNUI(_, cb)
    cb({})
    SetNuiFocus(false,false)
end

local function changeDuty(data, cb)
    local duty in data
    if not duty then return cb(nil) end
    cb(Player.changeDuty(duty))
end

--- Function that take a plate and return the vehicle information.
--- REMEMBER TO ALWAYS RETURN SOMETHING TO THE NUI
---@param data {plate:string} - Plate
---@param cb function - callback
local function searchPlayer(data, cb)
    local plate in data
    if not plate then return cb(nil) end
    cb(Vehicle.getVehicleByPlate(plate))
end

RegisterCommand("openpmi", function(source, args)
   openNUI(true,true)
end, false)


AddEventHandler("onResourceStop", function(res)
    if not GetCurrentResourceName() == res then return end
    require "client.data.handlers" ()()
end)

RegisterNuicommand("closeNUI",closeNUI)
RegisterNuicommand("changeDuty",changeDuty)
RegisterNuicommand("searchPlayer",searchPlayer)