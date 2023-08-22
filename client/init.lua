local QBCore = exports["qb-core"]:GetCoreObject()
local Player = require "client.data.officer"
local Vehicle = require "clienta.data.vehicles"
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