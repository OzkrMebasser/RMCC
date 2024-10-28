
import emailjs from "@emailjs/browser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { from_name, email, message, newsletter } = req.body;
    
    const formData = {
      from_name,
      email,
      message,
      newsletter,
    };
    
    try {
      // Enviar el correo electrónico con EmailJS
      const result = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        formData,
        process.env.EMAILJS_USER_ID
      );

      res.status(200).json({ message: "Email sent successfully!", result });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
