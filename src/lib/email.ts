export interface ContactFormPayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

export type ContactDeliveryMethod = 'direct' | 'mailto_fallback';

const encode = (value: string): string => encodeURIComponent(value).replace(/%20/g, '+');

export const buildContactMailto = (
  payload: ContactFormPayload,
  recipientEmail: string
): string => {
  const subject = payload.subject?.trim() || 'New Contact Form Submission';
  const body = [
    `Name: ${payload.fullName.trim()}`,
    `Email: ${payload.email.trim()}`,
    `Phone: ${payload.phone.trim()}`,
    '',
    'Message:',
    payload.message.trim(),
  ].join('\n');

  return `mailto:${recipientEmail}?subject=${encode(subject)}&body=${encode(body)}`;
};

export const sendContactForm = async (
  payload: ContactFormPayload,
  recipientEmail: string
): Promise<ContactDeliveryMethod> => {
  if (typeof window === 'undefined') {
    throw new Error('Contact form submission is only available in the browser.');
  }

  const subject = payload.subject?.trim() || 'New Contact Form Submission';
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;

  try {
    const response = await fetch(endpoint, {
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

    if (response.ok) {
      return 'direct';
    }
  } catch {
    // Fall back to mailto below.
  }

  window.location.href = buildContactMailto(payload, recipientEmail);
  return 'mailto_fallback';
};
