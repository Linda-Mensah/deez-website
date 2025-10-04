const ImageCarousel = ({ images }) => (
  <div className="flex overflow-x-scroll gap-4 pb-2 scrollbar-hide">
    {images.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`product-${i}`}
        className="w-64 h-64 object-cover rounded-xl flex-shrink-0 shadow-sm"
      />
    ))}
  </div>
);

export default ImageCarousel;
