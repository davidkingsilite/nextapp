import nodemailer from 'nodemailer';

export const sendEmail = async (quote: any) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Pro Cleaning" <${process.env.EMAIL_USERNAME}>`,
    to: 'davidnwachukwu3@gmail.com',
    subject: `New Quote Request from ${quote.name}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${quote.name}</p>
      <p><strong>Email:</strong> ${quote.email}</p>
      <p><strong>Phone:</strong> ${quote.phone}</p>
      <p><strong>Service:</strong> ${quote.service}</p>
      <p><strong>Message:</strong> ${quote.message || 'No message provided'}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
