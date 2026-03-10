'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface SubscribeState {
    success: boolean;
    error?: string;
}

export async function subscribeToSprint(prevState: SubscribeState, formData: FormData): Promise<SubscribeState> {
    const email = formData.get('email') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const fullName = `${firstName} ${lastName}`.trim();

    if (!email) {
        return { success: false, error: 'Email is required' };
    }

    try {
        // 1. Send Welcome Email to User
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        const replyToEmail = process.env.RESEND_REPLY_TO;
        const adminEmail = process.env.RESEND_ADMIN_EMAIL || replyToEmail;

        await resend.emails.send({

            from: `Xia from AI Kickstart <${fromEmail}>`,
            to: email,
            replyTo: replyToEmail,
            subject: 'Welcome to the AI Kickstart Sprint Waitlist! 🚀',
            html: `
        <div style="font-family: sans-serif; font-size: 16px; color: #333;">
          <h1>You're on the list! 🎉</h1>
          <p>Hi ${firstName || 'there'},</p>
          <p>Thanks so much for joining the waitlist for the <strong>AI Kickstart Sprint</strong>!</p>
          <p>Our current cohort is already underway, and the next one will be announced soon. As a waitlist member, you'll be the first to know when new dates are available.</p>
          <p>In the meantime, if you have any questions at all, please don't hesitate to reach out — just hit "Reply" and I'll be happy to help.</p>
          <p style="margin-top: 30px;">Looking forward to connecting with you!</p>
          <p>Best regards,<br>Xia He-Bleinagel</p>
        </div>
      `,
        });

        // Add delay before next request to avoid rate limits (2 req/sec)
        await delay(1000);

        // 2. Send Notification to Admin
        if (adminEmail) {
            try {
                await resend.emails.send({
                    from: `AI Sprint Bot <${fromEmail}>`,
                    to: adminEmail,
                    subject: `New Subscriber: ${email}`,
                    text: `New subscriber joined the waitlist:\nName: ${fullName}\nEmail: ${email}`,
                });
            } catch (adminError) {
                console.error('Failed to send admin notification:', adminError);
                // Don't fail the user request if admin notification fails
            }
        }

        // Add delay before contact creation
        await delay(1000);

        // 3. Add to Resend Audience (for CSV Export)
        const audienceId = process.env.RESEND_AUDIENCE_ID;
        console.log('Using Audience ID:', audienceId ? 'Found' : 'Missing');

        if (audienceId) {
            try {
                const contactResult = await resend.contacts.create({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    unsubscribed: false,
                    audienceId: audienceId,
                });
                console.log('Contact created successfully:', contactResult);
            } catch (contactError) {
                console.error('Failed to add contact to audience:', contactError);
                // Don't fail the user request if contact addition fails
            }
        } else {
            console.warn('RESEND_AUDIENCE_ID is not defined, skipping contact creation.');
        }


        return { success: true };
    } catch (error) {
        console.error('Failed to subscribe:', error);
        return { success: false, error: 'Failed to join waitlist. Please try again.' };
    }
}
