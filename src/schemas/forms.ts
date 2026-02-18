import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]*$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  serviceType: z.string()
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

export const donationFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  amount: z.number()
    .min(5, 'Minimum donation is $5')
    .max(100000, 'Maximum donation is $100,000'),
  message: z.string()
    .optional()
    .or(z.literal('')),
});

export type DonationFormData = z.infer<typeof donationFormSchema>;
