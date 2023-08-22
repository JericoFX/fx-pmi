fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game 'gta5'
name 'fx-pmi'
version '0.0.1'
description 'A Police Management Interface created with svelte'
license 'GNU'
author 'JericoFX'

ui_page "ui/index.html"

client_script "client/init.lua"

shared_script '@ox_lib/init.lua'

server_script {
    '@oxmysql/lib/MySQL.lua',
    'server/init.lua'
}

files {
    'config/client.lua',
    "client/data/*.lua",
    'ui/*.js',
    'ui/*.css',
    'ui/index.html'
}
