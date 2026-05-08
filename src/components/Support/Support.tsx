'use client';

import { site } from '@/content/site';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import SupportPresenter from './Support.presenter';
import type { SupportFormState } from './Support.model';

export function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    hp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const presenter = new SupportPresenter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const ok = await presenter.submitForm(formData as SupportFormState);

    setIsSubmitting(false);
    if (ok) {
      setFormData({ name: '', email: '', message: '', hp: '' });
    }
  };

  return (
    <section id="support" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <div className="mb-4 text-5xl">💬</div>
            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Questions about Crystal? We&apos;re here to help.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F5F5F7] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-2"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-2"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-2"
                  placeholder="How can we help you?"
                  disabled={isSubmitting}
                />
              </div>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                value={formData.hp}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-black px-8 py-4 font-bold text-white transition-all hover:scale-[1.02] hover:bg-gray-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-8 border-t border-gray-300 pt-8">
              <p className="mb-4 text-center text-sm text-gray-600">Or email us directly at</p>
              <a
                href={`mailto:${site.company.email}`}
                className="block text-center text-lg font-semibold text-gray-900 hover:text-black"
              >
                {site.company.email}
              </a>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-8">
              <p className="mb-4 text-center text-sm font-semibold text-gray-500">
                Legal Information
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="/legal/privacy" className="font-medium text-gray-700 hover:text-black">
                  Privacy Policy
                </Link>
                <Link href="/legal/terms" className="font-medium text-gray-700 hover:text-black">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
