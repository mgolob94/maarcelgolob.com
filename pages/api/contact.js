export default function (req, res) {
  let nodemailer = require("nodemailer");
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "sh22.neoserv.si",
    auth: {
      user: "info@marcelgolob.com",
      pass: `${process.env.PASSWORD}`,
    },
    secure: true,
  });

  const mailData = {
    from: "info@marcelgolob.com",
    to: "info@marcelgolob.com",
    subject: `Povpraševanje od ${req.body.name} - marcegolob.com`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send(mailData);
}
