'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    const formUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "#";

    try {
        const formDataEncoded = new URLSearchParams(formData).toString();

        const res = await fetch(formUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        },
        body: formDataEncoded,
        });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div id='contact'>
      <section className="text-center px-4 sm:px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-3">
          Let's Connect
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Have a project or just want to say hi? Drop me a message!
        </p>
      </section>

      <section>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <div className="flex justify-center">
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-md transition inline-block ${
                    status === 'loading' || status === 'success' ? 'cursor-not-allowed opacity-70' : ''
                }`}
                >
                {status === 'loading'
                    ? 'Sending...'
                    : status === 'success'
                    ? 'Message sent ✨'
                    : 'Send Message'}
            </button>
          </div>

          {status === 'error' && (
            <p className="text-red-500 text-center text-sm">
              Oops! Something went wrong. Try again later.
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
