import axios from 'axios';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, budget, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ error: 'Name, E-Mail und Nachricht sind erforderlich' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Ungültiges E-Mail-Format' }, { status: 400 });
    }

    // Telegram message
    const telegramMessage = `
📬 Neue Kontaktanfrage:

👤 Name: ${name}
📧 E-Mail: ${email}
📱 Telefon: ${phone || 'Nicht angegeben'}
🏢 Unternehmen: ${company || 'Nicht angegeben'}
🛠️ Dienstleistung: ${service || 'Nicht spezifiziert'}
💰 Budget: ${budget || 'Nicht spezifiziert'}

💬 Nachricht:
${message}

⏰ Zeit: ${new Date().toLocaleString('de-DE')}
    `;

    // Send to Telegram (you need to set environment variables in Vercel)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log('Bot Token exists:', !!botToken);
    console.log('Chat ID exists:', !!chatId);

    if (botToken && chatId) {
      try {
        const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown'
        });
        console.log('Telegram API response:', response.data);
      } catch (telegramError) {
        console.error('Telegram API error:', telegramError.response?.data || telegramError.message);
        // Don't fail the request if Telegram fails, just log it
      }
    } else {
      console.warn('Telegram bot token or chat ID not configured');
    }

    return Response.json({
      success: true,
      message: 'Nachricht erfolgreich gesendet!'
    });

  } catch (error) {
    console.error('Error sending message:', error);
    return Response.json({
      error: 'Failed to send message'
    }, { status: 500 });
  }
}