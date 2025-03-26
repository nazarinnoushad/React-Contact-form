import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m448nrj', 'template_z8su6yp', form.current, {
        publicKey: 'N0gUCbFBxi4CX9fjU',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-200 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-50"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-50"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-50"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-gray-700 rounded-md shadow-md hover:bg-gray-800 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

