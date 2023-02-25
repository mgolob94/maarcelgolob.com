export default function (req, res) {
  let nodemailer = require("nodemailer");
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marcel.golob@gmail.com",
      pass: `${process.env.GPASS}`,
    },
  });

  const mailData = {
    from: "marcel.golob@gmail.com",
    to: "marcel.golob@gmail.com",
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
