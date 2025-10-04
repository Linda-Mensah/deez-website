const Hero = ({ headline, tagline, ctaText, onCtaClick }) => (
  <section className="pt-24 pb-16 text-center bg-gradient-to-b from-green-50 to-white">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">{headline}</h2>
    <p className="text-gray-600 max-w-xl mx-auto mb-6">{tagline}</p>
    <button
      onClick={onCtaClick}
      className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all"
    >
      {ctaText}
    </button>
  </section>
);

export default Hero;
