import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { nombre, email, consulta, plan } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Usar App Password si es Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: `"Entrenadora" <${process.env.EMAIL_USER}>`,
      to: email,
      cc: process.env.EMAIL_USER, // 👈 Esto te copia a vos también
      subject: `Inscripción al plan: ${plan}`,
      html: `
        <p>¡Hola <strong>${nombre}</strong>!</p>
        <p>Gracias por inscribirte al plan <strong>${plan}</strong>.</p>
        <p>Tu consulta: ${consulta || "Sin consulta adicional."}</p>
        <p>Nos pondremos en contacto con vos pronto.</p>
        <p>¡Gracias por confiar!</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: "Error al enviar el correo." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
