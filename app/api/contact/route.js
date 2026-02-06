import axios from 'axios';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, budget, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email and message are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Telegram message
    const telegramMessage = `
📬 New contact form submission:

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || 'Not provided'}
🏢 Company: ${company || 'Not provided'}
🛠️ Service: ${service || 'Not specified'}
💰 Budget: ${budget || 'Not specified'}

💬 Message:
${message}

⏰ Time: ${new Date().toLocaleString('de-DE')}
    `;

    // Send to Telegram (you need to set environment variables in Vercel)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown'
      });
    }

    return Response.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending message:', error);
    return Response.json({
      error: 'Failed to send message'
    }, { status: 500 });
  }
}