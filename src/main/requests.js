import { Markup } from "telegraf"

const start = (async (ctx) => {
    try {
        await ctx.reply('Kategoriya tanlang', Markup.keyboard([
            ['Telefoningizni narxlang', 'Yangi telefon narxlari'],
            ['Telefon mahfiy kodlari', 'Admin bilan bog\'lanish'],
            ['Sozlamalar']
        ]).oneTime().resize())
    } catch (error) {
        console.log(error);
    }
})

const s1 = (async (ctx) => {
    try {
        await ctx.reply('Telefoningizni tanlang', Markup.keyboard([
            ['Iphone', 'Samsung'],
            ['Xiaomi', 'Huawei'],
            ['Orqaga ◀️']
        ]).oneTime().resize())
    } catch (error) {
        console.log(error);
    }
})

const s1s1 = ((ctx) => {
    ctx.reply(`Iphone 6
    Iphone 6s
    Iphone 6splus
    
    Iphone 7
    Iphone7 plus
    
    Iphone 8
    Iphone 8plus
    
    Iphone x
    Iphonexs
    Iphone xr
    Iphone xsmax
    Iphone xr dualsim
    Iphone xsmax dualsim
    
    Iphone 11
    Iphone11 pro
    Iphone 11 pro max
    Iphone 11 dualsim
    Iphone11 pro dualsim
    Iphone 11 pro max dualsim
    
    Iphone se2020
    Iphone se3
    
    Iphone 12 mini
    Iphone 12 
    Iphone 12 pro
    Iphone 12 pro max
     Iphone 12 mini dualsim
    Iphone 12 dualsim
    Iphone 12 pro dualsim
    Iphone 12 pro max dualsim
    
    Iphone 13 mini
    Iphone 13 
    Iphone 13 pro
    Iphone 13 pro max
    Iphone 13 mini dualsim
    Iphone 13 dualsim
    Iphone 13 pro dualsim
    Iphone 13 pro max dualsim`)
})

export default {
    start,
    s1,
    s1s1
}