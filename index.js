import Telegraf from 'telegraf'

import config from './config'

const bot = new Telegraf(config.TELEGRAM_API_KEY)

bot.start(ctx => ctx.reply('Welcome!'))

bot.startPolling()
