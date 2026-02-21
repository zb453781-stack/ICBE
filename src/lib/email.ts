export interface ContactFormPayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

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

export const sendContactForm = (
  payload: ContactFormPayload,
  recipientEmail: string
): void => {
  if (typeof window === 'undefined') {
    throw new Error('Mail client redirection is only available in the browser.');
  }

  window.location.href = buildContactMailto(payload, recipientEmail);
};
