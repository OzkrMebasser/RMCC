import emailjs from "@emailjs/browser";
import functions from 'firebase-functions';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { from_name, email, message, newsletter } = req.body;

    const serviceId = functions.config().emailjs.service_id;
    const templateId = functions.config().emailjs.template_id;
    const userId = functions.config().emailjs.user_id;

    const templateParams = {
      from_name,
      email,
      message,
      newsletter,
    };

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, userId);
      res.status(200).json(result);
    } catch (error) {
      console.error('Email send error:', error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
