import { createTransport } from "nodemailer";
const SendMassege = (useMsg) => {
    
   // Create a transporter for SMTP
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    const sendMsg = transporter.sendMail({
        from: process.env.APP_EMAIL,
        to: process.env.APP_EMAIL,
        text: useMsg,
    });

    return sendMsg;
}

module.exports = { SendMsg };