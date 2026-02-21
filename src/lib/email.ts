export interface ContactFormPayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

export type ContactDeliveryMethod = 'direct';

export const sendContactForm = async (
  payload: ContactFormPayload,
  recipientEmail: string
): Promise<ContactDeliveryMethod> => {
  if (typeof window === 'undefined') {
    throw new Error('Contact form submission is only available in the browser.');
  }

  const subject = payload.subject?.trim() || 'New Contact Form Submission';
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;

  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.fullName.trim(),
        email: payload.email.trim(),
        phone: payload.phone.trim(),
        message: payload.message.trim(),
        _subject: subject,
        _captcha: 'false',
      }),
    });
  } catch {
    throw new Error('Network error while submitting contact form.');
  }

  if (!response.ok) {
    throw new Error(`Contact form submission failed with status ${response.status}.`);
  }

  return 'direct';
};
