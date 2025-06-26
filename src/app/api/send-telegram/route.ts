import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// TODO: Replace with your actual chat ID (user or group)
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ;

export async function POST(req: NextRequest) {
    try {
        const { name, message } = await req.json();
        if (!name || !message) {
            return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
        }

        const text = `New message from: ${name}\n\n${message}`;

        const telegramRes = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: text,
                }),
            }
        );

        if (!telegramRes.ok) {
            return NextResponse.json({ error: 'Telegram API error' }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
} 