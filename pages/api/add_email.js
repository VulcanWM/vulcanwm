import clientPromise from "../../lib/mongodb";
const MAIL_PASS=process.env.MAIL_PASS
const MY_EMAIL = "vulcanwmemail@gmail.com"
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MY_EMAIL,
    pass: MAIL_PASS
  }
});

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Newsletters");
  const verification_col = db.collection("Verification")
  const emaillist_col = db.collection("EmailList")
  if (req.method == 'POST') {
    const email = req.body["email"]
    const name = email.split("@")[0]
    await verification_col.deleteMany({"Email": email})
    const verified_documents = await emaillist_col.find({"Email": email}).toArray();
    if (verified_documents.length > 0){
      res.redirect("/newsletter?msg=You have already subscribed to VulcanWM's Newsletter!")
      return;
    }
    const result = await verification_col.insertOne({"Email": email})
    const verification_id = result.insertedId.toString()
    const html = `
    <h1>VulcanWM's Newsletter</h1>
    <p>Hello ${name}, you have signed up for VulcanWM's Newsletter!</p>
    <p>Click <a href='https://vulcanwm.is-a.dev/api/verify?id=${verification_id}'>here</a> to verify and be able to recieve VulcanWM's Newsletters!</p>
    `
    var mailOptions = {
      from: MY_EMAIL,
      to: email,
      subject: "VulcanWM's Newsletter",
      html: html
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      // if (error) {
      //   console.log(error);
      // } else {
      //   console.log('Email sent: ' + info.response);
      // }
    });
    res.redirect("/newsletter?msg=Check your emails and verify your email to start receiving VulcanWM's Newsletters!")
  } else {
    res.redirect("/")
  }
}