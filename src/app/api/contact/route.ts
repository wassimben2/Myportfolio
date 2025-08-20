import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Création du transporteur avec Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // tu reçois sur le même email
      subject: `New message from ${name}`,
      text: `You got a new message from ${name} (${email}):\n\n${message}`,
    };

    // Envoi de l’email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email envoyé :", info.response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Erreur envoi email :", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
