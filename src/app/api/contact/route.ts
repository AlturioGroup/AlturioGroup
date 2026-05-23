import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: "Alturio Group <contact@alturiogroup.com>",
      to: "shaunmr.975@gmail.com",

      subject: `New Contact Form: ${subject}`,

      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <p><strong>Message:</strong></p>

          <div style="padding: 12px; background: #f4f4f4; border-radius: 8px;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 },
    );
  }
}
