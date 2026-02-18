import emailjs from 'emailjs-com';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (publicKey) {
  emailjs.init(publicKey);
}

export interface EmailParams {
  to_email: string;
  to_name: string;
  subject: string;
  message: string;
  reply_to?: string;
  [key: string]: any;
}

export const sendEmail = async (params: EmailParams): Promise<void> => {
  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS configuration is not complete');
    throw new Error('Email service is not configured');
  }

  try {
    const response = await emailjs.send(serviceId, templateId, params);
    console.log('Email sent successfully:', response.status);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendContactForm = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<void> => {
  return sendEmail({
    to_email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@icbe.org',
    to_name: 'ICBE Team',
    subject: `New Contact Form Submission: ${subject}`,
    message: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `,
    reply_to: email,
  });
};
