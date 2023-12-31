local QBCore = require "client.data.core"
local Player = require "client.data.officer"
local Vehicle = require "client.data.vehicles"
local Table = require "client.data.table"
require "client.data.handlers" ()

--- Function to open the NUI.
---@param bool boolean - Function to open the NUI and set the focus.
local function openNUI(bool)
    local job,charinfo,citizenid,metadata in QBCore.Functions.GetPlayerData()
    SetNuiFocus(bool,bool)
    SendNUIMessage({
        action = "openNUI",
        data = {
            open = true,
            tabla = Table.getTableValue(),
            mydata = {
                firstname = charinfo.firstname,
                lastname = charinfo.lastname,
                citizenid = citizenid,
                rank = job.grade.name,
                duty = job.onduty,
                callsign = metadata.callsign == "NO CALLSIGN" and nil or metadata.callsign
            } 
    }})
end

--- Function to close the NUI
---@param _ any - Data that come from the NUI.
---@param cb function - Function to pass back to the nui
local function closeNUI(_, cb)
    cb({})
    SetNuiFocus(false,false)
end

--- Function to change the Duty.
---@param data {duty:boolean} - Boolean of the duty.
---@param cb function - Function to pass back to the nui
local function changeDuty(data, cb)
    local duty in data
    if not duty then return cb(nil) end
    cb(Player.changeDuty(duty))
end

--- Function to get a X player info.
---@param {citizenid:string} - Citizenid of the target player.
---@param cb function - Function to pass back to the nui
local function getPlayerInfo(data,cb)
    local citizenid in data
    cb(Player.getPlayerInformation(citizenid))
end

--- Function that take a plate and return the vehicle information.
--- REMEMBER TO ALWAYS RETURN SOMETHING TO THE NUI
---@param data {plate:string,blip:(boolean|nil)} - Plate
---@param cb function - callback
local function searchVehicle(data, cb)
    local plate,blip in data
    if not plate then return cb(nil) end
    local _veh = Vehicle.getVehicleByPlate(plate,blip or nil)
    cb(_veh)
end

local function locateVehicle(data, cb)
    if not data.plate then return cb(false) end
    local _veh = Vehicle.getVehicleCoordinate(data.plate,true)
    cb(_veh)
end
local function callsignUpdater(data, cb)
    print("CALLSIGN IS: ",data.callsign)
    local _call = Player.changeCallSign(data.callsign)
    cb(_call)
end

RegisterCommand("openpmi", function(source, args)
    lib.callback("fx::pmi::server::gerPmiData",nil,function(res) 
        openNUI(res)
    end)
end, false)

RegisterCommand("vehs", function(source, args)
    local _veh = Player.getPlayerInformation(args[1])
end, false)

AddEventHandler("onResourceStop", function(res)
    if not GetCurrentResourceName() == res then return end
    require "client.data.handlers" ()()
end)

RegisterNUICallback("closeNUI",closeNUI)
RegisterNUICallback("changeDuty",changeDuty)
RegisterNUICallback("searchVehicle",searchVehicle)
RegisterNUICallback("getPlayerInfo",getPlayerInfo)
RegisterNUICallback("callsignUpdater",callsignUpdater)
RegisterNUICallback("locateVehicle",locateVehicle)