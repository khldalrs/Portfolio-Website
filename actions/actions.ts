// actions/actions.ts

"use server"; // Indicates that this is a server-side action in Next.js 13

import nodemailer from "nodemailer"; // Import Nodemailer for sending emails
import * as z from "zod"; // Import Zod for schema validation

// Define the schema for form values using Zod
const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

// Define the type for form values based on the schema
type FormValues = z.infer<typeof formSchema>;

// Export the submitForm function
export async function submitForm(values: FormValues) {
  // Validate the form values against the schema
  const parsedValues = formSchema.safeParse(values);
  if (!parsedValues.success) {
    // If validation fails, throw an error with validation issues
    throw new Error("Validation failed");
  }

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use Gmail as the email service
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail app password
    },
  });

  // Define the email options
  const mailOptions = {
    from: parsedValues.data.email, // Sender's email address
    to: "khldalrs@gmail.com", // Replace with your email address
    subject: "New Contact Form Submission",
    text: `Email: ${parsedValues.data.email}\nMessage: ${parsedValues.data.message}`,
    html: `<p><strong>Email:</strong> ${parsedValues.data.email}</p><p><strong>Message:</strong><br/>${parsedValues.data.message}</p>`,
  };

  try {
    // Send the email using the transporter
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error to be caught in client-side code
  }
}
