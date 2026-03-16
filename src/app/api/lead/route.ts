import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, role } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.CONTACT_EMAIL || 'gui@wowhub.digital'],
      replyTo: email,
      subject: `🚨 NOVO LEAD (Ebook Estado da Influência): ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #FF00FF; margin-top: 0;">Novo Lead - Ebook O Estado da Influência</h2>
          <p>Alguém se cadastrou para acessar o material:</p>
          <ul style="list-style-type: none; padding-left: 0; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <li style="margin-bottom: 10px;"><strong>Nome:</strong> ${name}</li>
            <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
            <li style="margin-bottom: 10px;"><strong>Telefone/WhatsApp:</strong> ${phone || 'Não informado'}</li>
            <li style="margin-bottom: 0;"><strong>Cargo/Atuação:</strong> ${role}</li>
          </ul>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
