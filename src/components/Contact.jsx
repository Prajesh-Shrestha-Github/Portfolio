import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <a href="mailto:your-email@example.com" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Contact;
