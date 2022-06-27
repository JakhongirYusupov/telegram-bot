
const isUserMember = async function (ctx, next) {
    try {
        const { status } = await ctx.telegram.getChatMember(
            '-1001672258863', ctx.message.chat.id
        );
        if (status === "member") return await next();
        joinChannel(ctx)
    } catch (error) {
        console.log(error);
    }
};

const joinChannel = async ctx => {
    try {
        ctx.reply('Kanalga a\'zo bo\'ling', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Kanalga a\'zo bo\'ling 📲', callback_data: 'one', url: 'https://t.me/telefon_bozor_iphone1_samsung' }],
                    [{ text: 'A\'zo bo\'ldim', callback_data: 'one', }]
                ]
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    isUserMember,
    joinChannel
};