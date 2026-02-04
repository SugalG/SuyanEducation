import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);
export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, contact, service} = body;
        await resend.emails.send({
            from: "No Reply <no-reply@suyan.com.np>",
            to: ["info@suyan.com.np"],
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            html: `
              <h3>New Inquiry</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Contact:</strong><br/>${contact}</p>
              <p><strong>Service:</strong><br/>${service}</p>
            `,
          });

          return NextResponse.json({
            success: true,
            message: "Message Sent Successfully!!!"
          },{status: 200})

    }catch(e){
        console.error(e);
        return NextResponse.json({
            success: false,
            error: "Something Happened!!!"
        }, {status: 500})
    }
}