import clientPromise from "../../lib/mongodb";
import { ObjectId } from 'mongodb'
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
  const emaillist_col = db.collection("EmailList")
  if (req.method == 'GET') {
    const verification_id = req.query['id']
    var email_documents;
    try {
        email_documents = await emaillist_col.find({"_id": new ObjectId(verification_id)}).toArray()
    } catch {
        res.redirect(302, "/newsletter?msg=This is not a valid url!")
        return;
    }
    if (emaillist_col.length == 0){
        res.redirect(302, "/newsletter?msg=This is not a valid url!")
        return;
    }
    const email_document = email_documents[0]
    const email = email_document.Email
    await emaillist_col.deleteOne({"_id": new ObjectId(verification_id)})
    const name = email.split("@")[0]
    const html = `
    <h1>VulcanWM's Newsletter</h1>
    <p>Hello ${name}, you have unsubscribed to VulcanWM's Newsletter!</p>
    <p>If you think this is a mistake, please <a href="https://vulcanwm.is-a.dev/newsletter">resubscribe</a>.</p>
    `
    var mailOptions = {
      from: MY_EMAIL,
      to: email,
      subject: "VulcanWM's Newsletter",
      html: html
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.redirect(302, "/newsletter?msg=You have unsubscribed to VulcanWM's Newsletters!")
  } else {
    res.redirect(302, "/")
  }
}