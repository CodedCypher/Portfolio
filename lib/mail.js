const nodemailer = require("nodemailer");

const sendMail = async ({ email, message }) => {
	if (!email || !message) return;
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			pool: true,
			auth: {
				user: process.env.MAIL_AUTH_USER,
				pass: process.env.MAIL_AUTH_USER_PASS,
			},
		});

		const sendResult = await transporter.sendMail({
			from: email,
			subject: "Portfolio Message",
			to: process.env.OWN_EMAIL,
			text: message,
		});
		console.log(sendResult);
	} catch (error) {
		console.log(error);
	}
};

module.exports = sendMail;
