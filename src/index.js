import { Telegraf, Telegram, Scenes, Markup, session } from 'telegraf'
import { isUserMember } from './middlewares/middleware.js'
console.log(isUserMember);

import '../config.js'
import Request from './main/requests.js'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(isUserMember, Request.start)
bot.hears('a', isUserMember)


bot.inlineQuery('A\'zo bo\'ldim', b => {
    console.log(b);
})

bot.hears(/Telefoningizni narxlang/, Request.s1)
bot.hears('Iphone', Request.s1s1)

bot.hears(/Orqaga/, Request.start)



bot.launch()
