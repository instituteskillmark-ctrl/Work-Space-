import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, message, phone } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and project details are required.' });
  }

  try {
    // Transporter with User's Gmail & App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hassan217175@gmail.com',
        pass: 'vwmujrupoveqnrhz'
      }
    });

    const mailOptions = {
      from: `"Hassan Portfolio" <hassan217175@gmail.com>`,
      to: 'hassan217175@gmail.com',
      replyTo: email,
      subject: `🚀 New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #07080a; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e5983b;">
          <h2 style="color: #e5983b; margin-top: 0;">🚀 Start a Project Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid rgba(229, 152, 59, 0.3); margin: 20px 0;" />
          <p style="font-size: 16px;"><strong>Client Name:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #e5983b;">${email}</a></p>
          ${phone ? `<p style="font-size: 16px;"><strong>Phone / WhatsApp:</strong> ${phone}</p>` : ''}
          <div style="margin-top: 24px; padding: 20px; background: rgba(15, 18, 25, 0.9); border-left: 4px solid #e5983b; border-radius: 6px;">
            <p style="font-size: 14px; color: #a1a1aa; margin-top: 0;">PROJECT DETAILS:</p>
            <p style="font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid rgba(229, 152, 59, 0.3); margin: 30px 0 20px 0;" />
          <p style="font-size: 12px; color: #71717a;">Sent automatically from Hassan Ahmad Portfolio Workspace.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Nodemailer SMTP Error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Failed to send email' });
  }
}
