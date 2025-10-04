export default [
  {
    title: "Diapers",
    description:
      "Soft, absorbent, and gentle diapers for all-day comfort and dryness.",
    images: [
      "/assets/diaper1.jpg",
      "/assets/diaper1.jpg",
      "/assets/diaper1.jpg",
    ],
    ctaText: "Contact Us",
    onCtaClick: () =>
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" }),
  },
  {
    title: "Liquid Dish Soaps",
    description:
      "Tough on grease, gentle on hands — our dish soaps clean brilliantly.",
    images: ["/assets/soap1.jpg", "/assets/soap2.jpg"],
    ctaText: "Contact Us",
    onCtaClick: () =>
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" }),
  },
  {
    title: "Wash Soaps",
    description:
      "Keep your clothes fresh and spotless with our premium wash soaps.",
    images: ["/assets/wash1.jpg", "/assets/wash1.jpg"],
    ctaText: "Contact Us",
    onCtaClick: () =>
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" }),
  },
  {
    title: "Bleach",
    description:
      "Powerful, effective bleach that makes white truly white again.",
    images: ["/assets/bleach1.jpg", "/assets/bleach1.jpg"],
    ctaText: "Contact Us",
    onCtaClick: () =>
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" }),
  },
];
