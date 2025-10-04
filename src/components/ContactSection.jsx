const ContactSection = ({ phone, whatsappLink }) => (
  <section id="contact" className="py-20 bg-green-50 text-center">
    <h3 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h3>
    <p className="text-gray-600 mb-6">
      We’d love to hear from you! Reach us easily through the following:
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href={`tel:${phone}`}
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all"
      >
        Call Us
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-full hover:bg-green-100 transition-all"
      >
        WhatsApp Us
      </a>
    </div>
  </section>
);

export default ContactSection;
