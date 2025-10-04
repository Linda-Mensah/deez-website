import ImageCarousel from "./ImageCarousel";

const ProductSection = ({
  title,
  description,
  images,
  ctaText,
  onCtaClick,
}) => (
  <section className="py-16 px-6 bg-white border-t border-gray-100">
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 max-w-2xl">{description}</p>
    <ImageCarousel images={images} />
    <button
      onClick={onCtaClick}
      className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all"
    >
      {ctaText}
    </button>
  </section>
);

export default ProductSection;
