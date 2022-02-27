// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendMail from "../../lib/mail";

export default async function handler(req, res) {
	try {
		if (req.method === "POST") {
			await sendMail(JSON.parse(req.body));
			res.status(200).json({ name: "Hello wolrd" });
		}
	} catch (error) {
		console.log(error);
	}
}
