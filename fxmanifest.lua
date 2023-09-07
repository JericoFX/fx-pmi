fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game 'gta5'
name 'fx-pmi'
version '0.0.1'
description 'A Police Management Interface created with svelte'
license 'GNU'
author 'JericoFX'

ui_page "build/index.html"

client_script "client/init.lua"

shared_script '@ox_lib/init.lua'

server_script {
    '@oxmysql/lib/MySQL.lua',
    'server/init.lua'
}

files {
    'build/index.html',
    'config/client.lua',
    "client/data/*.lua",
    'build/_app/immutable/**/*.js',
    'build/_app/version.json',
    'build/_app/immutable/**/*.css',
    'build/_app/immutable/entry/*.js',
}
