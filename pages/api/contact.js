export default async function (req, res) {
  let nodemailer = require("nodemailer");
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marcel.golob@gmail.com",
      pass: `${process.env.GPASS}`,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: "marcel.golob@gmail.com",
      to: "marcel.golob@gmail.com",
      subject: "New Contact Form Submission", // Subject line
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`, // Plain text body
      html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`, // HTML body
    });
    res.status(200).json({ status: 'Success', message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error', message: 'Error sending email' });
  }
}
