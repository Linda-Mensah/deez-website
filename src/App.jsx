import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const products = {
  diapers: {
    title: "Premium Diapers",
    description:
      "Soft, absorbent, and gentle on your baby's skin. Our premium diapers provide all-day comfort and protection, giving you peace of mind and your little one the care they deserve.",
    images: ["/img/diaper1.jpg", "/img/diaper1.jpg", "/img/diaper1.jpg"],
  },
  dishSoap: {
    title: "Liquid Dish Soaps",
    description:
      "Powerful yet gentle cleaning solutions that cut through grease while being kind to your hands. Available in refreshing scents that make dishwashing a pleasant experience.",
    images: [
      "/img/dish-soap1.jpg",
      "/img/dish-soap1.jpg",
      "/img/dish-soap1.jpg",
    ],
  },
  washSoap: {
    title: "Wash Soaps",
    description:
      "Nourishing hand and body soaps crafted with natural ingredients. Our wash soaps cleanse effectively while maintaining your skin's natural moisture balance.",
    images: ["/img/wash1.jpg", "/img/wash1.jpg", "/img/wash1.jpg"],
  },
  bleach: {
    title: "Premium Bleach",
    description:
      "Professional-grade bleach for powerful cleaning and disinfection. Perfect for laundry, surfaces, and deep cleaning tasks while maintaining safety standards.",
    images: ["/img/bleach1.jpg", "/img/bleach1.jpg", "/img/bleach1.jpg"],
  },
};

// Carousel Component
const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Product ${idx + 1}`}
              className="w-full flex-shrink-0 object-cover h-64 md:h-80"
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-emerald-600 w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main App Component
export default function DeezEssence() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DE</span>
              </div>
              <span className="text-xl font-bold text-gray-800">
                Deez Essence
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="tel:+233500175261"
                className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">+233 50 017 5261</span>
              </a>

              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/233500175261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-700 transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <a
                href="tel:+233123456789"
                className="flex items-center text-gray-700 py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>+233 50 017 5261</span>
              </a>
              <div className="flex space-x-4 mt-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/233500175261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Deez Essence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Essentials that keep your home fresh, clean, and cared for.
          </p>
          <button
            onClick={() => scrollToSection("products")}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Explore Our Products
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Diapers */}
          <div className="mb-24">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {products.diapers.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {products.diapers.description}
              </p>
              <ProductCarousel images={products.diapers.images} />
              <div className="text-center mt-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
                >
                  Contact Us to Order
                </button>
              </div>
            </div>
          </div>

          {/* Dish Soap */}
          <div className="mb-24">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {products.dishSoap.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {products.dishSoap.description}
              </p>
              <ProductCarousel images={products.dishSoap.images} />
              <div className="text-center mt-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Contact Us to Order
                </button>
              </div>
            </div>
          </div>

          {/* Wash Soap */}
          <div className="mb-24">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {products.washSoap.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {products.washSoap.description}
              </p>
              <ProductCarousel images={products.washSoap.images} />
              <div className="text-center mt-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
                >
                  Contact Us to Order
                </button>
              </div>
            </div>
          </div>

          {/* Bleach */}
          <div className="mb-24">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {products.bleach.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {products.bleach.description}
              </p>
              <ProductCarousel images={products.bleach.images} />
              <div className="text-center mt-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Contact Us to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100 to-blue-100"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you! Reach out for orders or inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+233500175261"
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-emerald-600" />
                  <span>+233 50 017 5261</span>
                </a>

                <a
                  href="https://wa.me/233500175261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-3 text-green-600" />
                  <span>WhatsApp Us</span>
                </a>

                <div className="flex items-start text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1" />
                  <span>Nkawkaw, Accra, Ghana</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-gray-600 mb-4">
                  Follow us on social media:
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">DE</span>
              </div>
              <span className="text-2xl font-bold">Deez Essence</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted source for home essentials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h4 className="font-semibold mb-3">Address</h4>
              <p className="text-gray-400">
                Nkawkaw,
                <br />
                Accra, Ghana
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="flex flex-col">
                <a
                  href="tel:+233500175261"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  +233 50 017 5261
                </a>
                <a
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  href=""
                >
                  deezdiaperz1@gmail.com
                </a>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/233500175261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 Deez Essence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
