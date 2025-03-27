const sampleData = [
  {
    title: "warli painting",
    description:
      "This Warli painting beautifully blends traditional tribal art with modern elements. Depicting the iconic iron lattice tower against a serene Kerala cityscape, it captures the harmony between nature and urban life.",
    image:
      "https://images.unsplash.com/photo-1621870536986-151d03e2e99a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FybGklMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    location: "Kerala",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "warli painting",
    price: "299.99",
  },
  {
    title: "chittara art",
    description:
      "This vibrant mural at Wat Phra Kaew captures intricate, colorful depictions of Thai mythology and history. The artwork showcases rich, detailed scenes painted with vivid colors, reflecting the spiritual and cultural significance of the Temple of the Emerald Buddha in Bangkok, Thailand.",
    image:
      "https://media.istockphoto.com/id/500535921/photo/murals-at-wat-phra-kaew.webp?a=1&b=1&s=612x612&w=0&k=20&c=iI9GIRwHv0qDull6Vn660irpa8fH-o0cgDAex0zQOLg=",
    location: "maharastra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "chittara art ",
    price: "299.99",
  },
  {
    title: "madhubani painting",
    description:
      "The image showcases a traditional Madhubani painting, characterized by intricate patterns, vibrant colors, and symbolic motifs depicting nature, mythology, and folklore. Originating from Bihar, India, this folk art is often created using natural dyes and handmade paper.",
    image:
      "https://images.unsplash.com/photo-1576504677634-06b2130bd1f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hZGh1YmFuaSUyMHBhaW50aW5nfGVufDB8fDB8fHww",
    location: "himachal",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "madhubani ",
    price: "299.99",
  },
  {
    title: "kalighat art",
    description:
      "This temple detail showcases the exquisite craftsmanship and vibrant colors of traditional Asian architecture. The ornate carvings and intricate patterns highlight the spiritual and cultural significance of the structure, offering a glimpse into the rich heritage of the region.",
    image:
      "https://media.istockphoto.com/id/92034009/photo/temple-detail.webp?a=1&b=1&s=612x612&w=0&k=20&c=k7xG6w3hmQrdKefoHaWqZb6aQ8lwJ38Dqb-0UwuxkL0=",
    location: "maharastra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "kalighat art ",
    price: "299.99",
  },
  {
    title: "warli painting",
    description:
      "This Warli painting beautifully blends traditional tribal art with modern elements. Depicting the iconic iron lattice tower against a serene Kerala cityscape, it captures the harmony between nature and urban life.",
    image:
      "https://media.istockphoto.com/id/1335876835/photo/warli-tribal-painting-inside-sanjay-gandhi-national-park-mumbai-maharashtra-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=F4stlf6ETGjgOa5Vl5zuAr8aRjoMfgCCR7rmYD2ztls=",
    location: "Kerala",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Warli painting",
    price: "299.99",
  },
  {
    title: "Madhubani painting",
    description:
      "The image showcases a traditional Madhubani painting, characterized by intricate patterns, vibrant colors, and symbolic motifs depicting nature, mythology, and folklore. Originating from Bihar, India, this folk art is often created using natural dyes and handmade paper.",
    image:
      "https://media.istockphoto.com/id/1431309241/photo/geometric-ethnic-oriental-ikat-seamless-pattern-traditional-design-for-background-carpet.webp?a=1&b=1&s=612x612&w=0&k=20&c=wrgThRA9v9vMhC2h0mjKUfDeepdcDojZPltcowNwq0w=",
    location: "himachal",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "madhubani ",
    price: "299.99",
  },
  {
    title: "Chittara art",
    description:
      "This vibrant mural at Wat Phra Kaew captures intricate, colorful depictions of Thai mythology and history. The artwork showcases rich, detailed scenes painted with vivid colors, reflecting the spiritual and cultural significance of the Temple of the Emerald Buddha in Bangkok, Thailand.",
    image:
      "https://media.istockphoto.com/id/500535921/photo/murals-at-wat-phra-kaew.webp?a=1&b=1&s=612x612&w=0&k=20&c=iI9GIRwHv0qDull6Vn660irpa8fH-o0cgDAex0zQOLg=",
    location: "maharastra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "chittara art ",
    price: "299.99",
  },
  {
    title: "kalighat art",
    description:
      "This temple detail showcases the exquisite craftsmanship and vibrant colors of traditional Asian architecture. The ornate carvings and intricate patterns highlight the spiritual and cultural significance of the structure, offering a glimpse into the rich heritage of the region.",
    image:
      "https://media.istockphoto.com/id/680424406/photo/colorful-detail-decorated-entrance-dome-to-a-mosque-in-shiraz-iran.jpg?s=612x612&w=0&k=20&c=LMckbel6yAkVQ-3Rp4tSBiXeY_brQkgsCLLlkO3O1uE=",
    location: "maharastra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Kalighat art ",
    price: "299.99",
  },
  {
    title: "chittara art",
    description:
      "This vibrant mural at Wat Phra Kaew captures intricate, colorful depictions of Thai mythology and history. The artwork showcases rich, detailed scenes painted with vivid colors, reflecting the spiritual and cultural significance of the Temple of the Emerald Buddha in Bangkok, Thailand.",
    image:
      "https://media.istockphoto.com/id/486830842/photo/wooden-buddhist-carving.jpg?s=612x612&w=0&k=20&c=jSQmlrhMRsWC2Nv_SxvOBF8kmknuUdAI-EZT_63jShg=",
    location: "maharastra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Chittara art ",
    price: "299.99",
  },
  {
    title: "kalighat art",
    description:
      "This temple detail showcases the exquisite craftsmanship and vibrant colors of traditional Asian architecture. The ornate carvings and intricate patterns highlight the spiritual and cultural significance of the structure, offering a glimpse into the rich heritage of the region.",
    image:
      "https://media.istockphoto.com/id/1300642861/photo/marble-surface-with-stone-inlay-in-famous-diwan-i-khas-palace-in-agra-fort-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=7avkKMx8QiOvEjQ5KIeToGZMEpa9QaYAlNpLM0bYAAM=",
    location: "maharastra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Kalighat art ",
    price: "299.99",
  },
];

module.exports = { data: sampleData };
