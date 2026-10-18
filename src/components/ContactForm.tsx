import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, RefreshCw } from 'lucide-react';
import { ContactFormData, FormErrors } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

const INITIAL_FORM: ContactFormData = {
  fullName: '',
  contactMethod: '',
  vehicle: '',
  category: 'Auto Detailing',
  message: '',
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [referenceId, setReferenceId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    const contactVal = formData.contactMethod.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{2,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}$/;
    // Also accept simple 7-15 digits
    const digitsOnly = contactVal.replace(/\D/g, '');

    if (!contactVal) {
      newErrors.contactMethod = 'Telephone number or email address is required.';
    } else if (!emailRegex.test(contactVal) && (!phoneRegex.test(contactVal) && digitsOnly.length < 7)) {
      newErrors.contactMethod = 'Please provide a valid telephone number or email address.';
    }

    if (!formData.category) {
      newErrors.category = 'Please select an enquiry category.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please describe your request with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setReferenceId(data.referenceId || `LDS-${Date.now().toString(36).toUpperCase()}`);
        setSubmitStatus('success');
        setFormData(INITIAL_FORM);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data.error ||
            'Unable to process online enquiry automatically at this time. Please call +92 322 4811924 directly.'
        );
        setSubmitStatus('error');
      }
    } catch {
      setErrorMessage(
        'The online inquiry submission is currently undergoing system configuration. Please contact Lahore Detailing Solutions directly at +92 322 4811924.'
      );
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
    setReferenceId('');
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#12161e] p-6 sm:p-8 lg:p-10 shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white tracking-tight">Direct Vehicle Inquiry</h3>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          Provide your vehicle details and required service. For immediate bay scheduling and urgent assistance, please call{' '}
          <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-[#00e5ff] font-semibold hover:underline">
            {BUSINESS_INFO.phoneDisplay}
          </a>
          .
        </p>
      </div>

      {submitStatus === 'success' ? (
        <div className="rounded-xl border border-cyan-500/30 bg-[#0d2229]/80 p-6 text-slate-200 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-[#00e5ff] shrink-0 mt-0.5" />
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">Inquiry Successfully Recorded</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your vehicle enquiry details have been safely logged under reference{' '}
                <span className="font-mono font-bold text-[#00e5ff]">{referenceId}</span>.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our team will review your vehicle information. If you wish to expedite your appointment or confirm bay availability right away, feel free to call our main line.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-4 py-2 text-xs font-semibold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {submitStatus === 'error' && errorMessage && (
            <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-4 text-xs text-red-200 flex items-start gap-3 animate-in fade-in duration-150">
              <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-white">Transmission Notice</p>
                <p className="text-red-200/90 leading-relaxed">{errorMessage}</p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#00e5ff] hover:underline pt-1 block"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call {BUSINESS_INFO.phoneDisplay} Now</span>
                </a>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                Full Name <span className="text-[#00e5ff]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                placeholder="e.g. Tariq Mehmood"
                className={`w-full rounded-lg border bg-[#0a0d12] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#00e5ff]'
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-[11px] text-red-400">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Contact Method */}
            <div>
              <label htmlFor="contactMethod" className="block text-xs font-medium text-slate-300 mb-1.5">
                Telephone Number or Email <span className="text-[#00e5ff]">*</span>
              </label>
              <input
                type="text"
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={(e) => {
                  setFormData({ ...formData, contactMethod: e.target.value });
                  if (errors.contactMethod) setErrors({ ...errors, contactMethod: undefined });
                }}
                placeholder="e.g. +92 300 1234567 or name@example.com"
                className={`w-full rounded-lg border bg-[#0a0d12] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.contactMethod ? 'border-red-500' : 'border-white/10 focus:border-[#00e5ff]'
                }`}
                aria-invalid={!!errors.contactMethod}
                aria-describedby={errors.contactMethod ? 'contactMethod-error' : undefined}
              />
              {errors.contactMethod && (
                <p id="contactMethod-error" className="mt-1 text-[11px] text-red-400">
                  {errors.contactMethod}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Vehicle Make/Model */}
            <div>
              <label htmlFor="vehicle" className="block text-xs font-medium text-slate-300 mb-1.5">
                Vehicle Make / Model <span className="text-slate-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                placeholder="e.g. Honda Civic RS, Toyota Land Cruiser"
                className="w-full rounded-lg border border-white/10 bg-[#0a0d12] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#00e5ff] focus:outline-none transition-colors"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-xs font-medium text-slate-300 mb-1.5">
                Enquiry Category <span className="text-[#00e5ff]">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#0a0d12] px-3.5 py-2.5 text-sm text-white focus:border-[#00e5ff] focus:outline-none transition-colors"
              >
                <option value="Auto Detailing">Auto Detailing</option>
                <option value="Paint Protection">Paint Protection</option>
                <option value="Automotive Coatings">Automotive Coatings</option>
                <option value="Interior & Exterior Care">Interior & Exterior Care</option>
                <option value="General Vehicle Consultation">General Vehicle Consultation</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
              Message & Vehicle Condition <span className="text-[#00e5ff]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Describe your requirements, paint condition, or questions regarding our detailing and coating services..."
              className={`w-full rounded-lg border bg-[#0a0d12] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#00e5ff]'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-[11px] text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-[11px] text-slate-500 leading-normal">
              Direct contact line: <span className="text-slate-300 font-medium">{BUSINESS_INFO.phoneDisplay}</span>
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00e5ff] px-6 py-3 text-xs font-bold text-[#0b0d10] hover:bg-[#38bdf8] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Recording Inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Vehicle Inquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
