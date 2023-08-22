local QBCore = exports["qb-core"]:GetCoreObject()
local Player = require "client.data.officer"
local Vehicle = require "client.data.vehicles"
require "client.data.handlers"()

--- Function to open the NUI.
---@param bool boolean - Function to open the NUI and set the focus.
---@param data table - Table with the current pmi data.
local function openNUI(bool,data)


end

local function closeNUI(data,cb)
    cb({})
end

local function changeDuty(data,cb)
    cb(Player.changeDuty(data.duty))
end

local function searchPlayer(data,cb)
    cb(Vehicle.getVehicleByPlate(data.plate))
end

RegisterCommand("vehplate",function(source,args) 
    print(json.encode(Player.getPlayerInformation(args[1]),{indent = true}))
end)