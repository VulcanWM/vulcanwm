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
  const verification_col = db.collection("Verification")
  const emaillist_col = db.collection("EmailList")
  if (req.method == 'GET') {
    const verification_id = req.query['id']
    var veri_documents;
    try {
        veri_documents = await verification_col.find({"_id": new ObjectId(verification_id)}).toArray()
    } catch {
        res.redirect(302, "/newsletter?msg=This is not a valid url!")
        return;
    }
    if (veri_documents.length == 0){
        res.redirect(302, "/newsletter?msg=This is not a valid url!")
        return;
    }
    const veri_document = veri_documents[0]
    const email = veri_document.Email
    await verification_col.deleteOne({"_id": new ObjectId(verification_id)})
    await emaillist_col.insertOne({"Email": email})
    const name = email.split("@")[0]
    const html = `
    <h1>VulcanWM's Newsletter</h1>
    <p>Hello ${name}, you have verified your email and will start receiving VulcanWM's Newsletter!</p>
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
    res.redirect(302, "/newsletter?msg=Email verified! You will start receiving VulcanWM's Newsletters!")
  } else {
    res.redirect(302, "/")
  }
}