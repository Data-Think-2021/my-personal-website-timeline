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
          <h1>You’re on the list! 🎉 <span style="font-size: 0.8em; font-weight: normal; display: block; margin-top: 5px;">(Action required to secure your spot)</span></h1>
          <p>Hi ${firstName || 'there'},</p>
          <p>Thanks for joining the waitlist for the <strong>AI Kickstart Sprint</strong>! I’m thrilled to help you move from "AI curious" to "AI productive."</p>
          <p>Because I want to keep these cohorts small and impactful, I personally manage the registration to ensure everyone gets the support they need. Here is what happens next:</p>
          
          <h2 style="font-size: 18px; margin-top: 25px;">🚀 How to Secure Your Seat</h2>
          <p>The first cohort starts on the 13th February and further cohorts are planned. To ensure a high-quality experience, seats are limited and are secured only upon payment.</p>
          <p><strong>Investment: €149 (all-inclusive).</strong></p>
          <p>Payment per PayPal or IBAN. Invoice will be provided if you need. Please contact me.</p>

          <h2 style="font-size: 18px; margin-top: 25px;">🌍 A Quick Question for You</h2>
          <p>To make sure this sprint is perfectly tailored to you, could you hit "Reply" and let me know two things?</p>
          <ul style="padding-left: 20px;">
            <li><strong>Language Preference:</strong> Would you prefer the cohort to be in English or German or both is fine?</li>
            <li style="margin-top: 10px;"><strong>Your Goal:</strong> What is the main motivation for joining this cohort?</li>
          </ul>

          <h2 style="font-size: 18px; margin-top: 25px;">🗓️ Can't make the first one?</h2>
          <p>No worries! If the upcoming dates don't work for you, don't sweat it. There are more cohorts coming, and as a waitlist member, you'll get priority notification for every single one.</p>
          
          <p style="margin-top: 30px;">I’m looking forward to building these habits with you.</p>
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
