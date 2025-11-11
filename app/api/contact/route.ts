import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      parentFullName,
      parentPhone,
      parentEmail,
      studentFullName,
      currentSchool,
      studentGradeLevel,
      apCourseEnrollment,
      additionalInfo,
    } = body;

    const teacherEmail = "gc95014@gmail.com"; // CLIENT EMAIL WHERE INQUIRIES GO

    await resend.emails.send({
      from: "inquiries@acecalculus.com",
      to: teacherEmail,
      subject: "New AP Calculus Inquiry Submitted",
      reply_to: parentEmail,
      text: `
New Inquiry Received

Parent Full Name: ${parentFullName}
Parent Phone: ${parentPhone}
Parent Email: ${parentEmail}

Student Full Name: ${studentFullName}
Current School: ${currentSchool}
Student Grade Level: ${studentGradeLevel}
AP Course Enrollment: ${apCourseEnrollment}

Additional Information (if any):
${additionalInfo || "N/A"}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
