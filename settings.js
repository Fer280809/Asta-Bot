import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '527461777130' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['524181450063', '🜲 Propietario 🜲', true],
  ['527461177130'],
  ['1(809)6083286'],
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['524181450063'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.languaje = 'Español'
global.vs = '2.2.0'
global.nameqr = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』'
global.namebot = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』'
global.botname = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』'
global.wm = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』'
global.author = 'Made By 𝕱𝖊𝖗𝖓𝖆𝖓𝖉𝖔'
global.dev = '𝕱𝖊𝖗𝖓𝖆𝖓𝖉𝖔'
global.textbot = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』 •  𝕱𝖊𝖗𝖓𝖆𝖓𝖉𝖔'
global.etiqueta = '𝕱𝖊𝖗𝖓𝖆𝖓𝖉𝖔'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = '¥enes'
global.welcom1 = '❍ Puedes editar con el comando setwelcome'
global.welcom2 = '❍ Puedes editar con el comando setbye'
global.banner = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwEyPc2ZcSJLv1nKjMoNcqTD_PZl1Zk9ujraVrJSEw_efKhnurC6XGA6VOj73W-ygzfgfou1-g_3EzCX41BCiLXPvTjcIUy4BL78F9l9MuQlWAIg4E3DjO-Kx-qO-yIIhkOyeYaqDeyx8MW4EusFhzDUqID_Pk2RRUWhDfHErCquK71DBo9v4BhRjtXBNt/s736/b63bb3b9-7464-494f-937f-9aa4394cb124.jpg'
global.avatar = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwEyPc2ZcSJLv1nKjMoNcqTD_PZl1Zk9ujraVrJSEw_efKhnurC6XGA6VOj73W-ygzfgfou1-g_3EzCX41BCiLXPvTjcIUy4BL78F9l9MuQlWAIg4E3DjO-Kx-qO-yIIhkOyeYaqDeyx8MW4EusFhzDUqID_Pk2RRUWhDfHErCquK71DBo9v4BhRjtXBNt/s736/b63bb3b9-7464-494f-937f-9aa4394cb124.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/BWwvJ4h5lzuLhIuXsBK0Wh'
global.comunidad1 = 'https://chat.whatsapp.com/JONU3lLJhCf0JgCuL13gwk'
global.channel = 'https://whatsapp.com/channel/0029VbAoYE99hXF1wm3zmQ21'
global.channel2 = 'https://whatsapp.com/channel/0029VbAoYE99hXF1wm3zmQ21'
global.md = 'https://github.com/Fer280809/Asta-bot'
global.correo = 'fernandoagustinservinsanches@gmail.com'
global.cn ='https://whatsapp.com/channel/0029VbAoYE99hXF1wm3zmQ21';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363322713003916@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🌟 Nivel',
      coin: '💸 Coin',
      exp: '✨ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
      kyubi: '🌀 Magia',
      joincount: '💰 Token',
      emerald: '♦️ Esmeralda',
      stamina: '⚡ Energía',
      role: '⚜️ Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp',
      gold: '👑 Oro',
      iron: '⛓️ Hierro',
      coal: '🌑 Carbón',
      stone: '🪨 Piedra',
      potion: '🥤 Poción',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { 
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: '🌟',
      coin: '💸',
      exp: '✨',
      bank: '🏦',
      diamond: '💎',
      health: '❤️',
      kyubi: '🌀',
      joincount: '💰',
      emerald: '♦️',
      stamina: '⚡',
      role: '⚜️',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      iron: '⛓️',
      coal: '🌑',
      stone: '🪨',
      potion: '🥤',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
