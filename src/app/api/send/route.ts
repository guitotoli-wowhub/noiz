import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.CONTACT_EMAIL || 'gui@wowhub.digital'],
      replyTo: email,
      subject: `Novo contato do site: ${name} (${company})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF00FF;">Novo Lead do Site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #ccc; margin: 20px 0;" />
          <p><strong>Mensagem:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
