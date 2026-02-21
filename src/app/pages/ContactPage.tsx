import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Info, AlertCircle } from 'lucide-react';
import { contactInfo } from '../../data/cmsData';
import { sendContactForm } from '../../lib/email';

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-[#0B3D91] to-[#1B7F5B]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-base sm:text-xl text-white/90">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactPage() {
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=30.1798,66.9750';

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionNotice, setSubmissionNotice] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid mobile number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmissionNotice(null);

    try {
      await sendContactForm(
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'Website Contact Inquiry',
        },
        contactInfo.email
      );
      setSubmissionNotice(
        `A pre-filled email draft has been prepared for ${contactInfo.email}. Send it from your email app to complete submission.`
      );
    } catch {
      setSubmitError(
        `Unable to open your email app automatically. Please email us directly at ${contactInfo.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (submitError) {
      setSubmitError(null);
    }

    if (submissionNotice) {
      setSubmissionNotice(null);
    }
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Be part of the change. Get in touch."
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3D91] mb-6 sm:mb-8">Get In Touch</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-10 sm:mb-12 leading-relaxed">
                ICBE serves communities across Balochistan through inclusive, needs-based action.
                Reach out to collaborate, support ongoing programs, or join our work for justice,
                dignity, and resilience.
              </p>

              <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B3D91]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#0B3D91]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B3D91] mb-2">Visit Us</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{contactInfo.address}</p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 text-sm sm:text-base text-[#1B7F5B] hover:text-[#166646] font-medium transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B3D91]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#0B3D91]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B3D91] mb-2">Email Us</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 text-sm sm:text-base hover:text-[#1B7F5B] transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B3D91]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#0B3D91]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B3D91] mb-2">Call Us</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 text-sm sm:text-base hover:text-[#1B7F5B] transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-6 sm:p-8">
                <h3 className="font-semibold text-[#0B3D91] mb-4">Who Can Get Involved</h3>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p>Volunteers</p>
                  <p>Youth leaders</p>
                  <p>Community activists</p>
                  <p>Development partners</p>
                  <p>Researchers and donors</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 rounded-lg border ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#0B3D91] transition-colors text-sm sm:text-base`}
                    placeholder="Enter your full name here"
                  />
                  {errors.fullName && <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#0B3D91] transition-colors text-sm sm:text-base`}
                    placeholder="Enter your email address here"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#0B3D91] transition-colors text-sm sm:text-base`}
                    placeholder="Enter your mobile number here"
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2.5 sm:py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#0B3D91] transition-colors resize-none text-sm sm:text-base`}
                    placeholder="Enter your message or inquiry here"
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 sm:py-4 bg-[#1B7F5B] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-[#166646] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
                </button>
              </form>

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
                >
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <p className="text-red-800 text-sm">{submitError}</p>
                </motion.div>
              )}

              {submissionNotice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start space-x-3"
                >
                  <Info className="text-blue-700 flex-shrink-0" size={20} />
                  <p className="text-blue-900 text-sm">{submissionNotice}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-[#F5F5F5]">
        <div className="w-full h-[300px] sm:h-[380px] lg:h-[450px]">
          <iframe
            src={contactInfo.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ICBE Location Map"
          />
        </div>
      </section>
    </div>
  );
}

