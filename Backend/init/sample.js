const sampleData = [
  {
    title: "Eiffel Tower Experience",
    description: "Iconic iron lattice tower with stunning city views",
    image:
      "https://images.unsplash.com/photo-1556970255-3c8ef65ba6ef?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Paris",
    country: "France",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Photography",
  },
  {
    title: "Taj Mahal Visit",
    description: "Beautiful white marble mausoleum and UNESCO heritage site",
    image:
      "https://images.unsplash.com/photo-1518029352116-ba8da1d85513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Agra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Painting",
  },
  {
    title: "Grand Canyon Adventure",
    description: "Natural wonder with breathtaking views and hiking trails",
    image:
      "https://images.unsplash.com/photo-1617030905020-f45d2e450f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Arizona",
    country: "USA",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Digital Art",
  },
  {
    title: "Santorini Sunset",
    description: "Beautiful Greek island with white-washed buildings",
    image:
      "https://images.unsplash.com/photo-1529690840038-f38da8894ff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Santorini",
    country: "Greece",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Mixed Media",
  },
  {
    title: "Machu Picchu Trek",
    description: "Ancient Incan city in the Andes mountains",
    image:
      "https://images.unsplash.com/photo-1584285418948-fa79344dafd9?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Cusco Region",
    country: "Peru",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Photography",
  },
  {
    title: "Great Wall Adventure",
    description: "Historic fortification spanning thousands of miles",
    image:
      "https://images.unsplash.com/photo-1594136976553-38699ae9047c?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Beijing",
    country: "China",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Sculpture",
  },
  {
    title: "Safari Experience",
    description: "Wildlife adventure in the African savanna",
    image:
      "https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg",
    location: "Serengeti",
    country: "Tanzania",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Digital Art",
  },
  {
    title: "Venice Gondola Ride",
    description: "Romantic canal tour in the floating city",
    image:
      "https://images.unsplash.com/photo-1606234128575-d1ac480372b0?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Venice",
    country: "Italy",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Painting",
  },
  {
    title: "Sydney Opera House Tour",
    description: "Iconic performing arts venue by the harbor",
    image:
      "https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg",
    location: "Sydney",
    country: "Australia",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Other",
  },
  {
    title: "Northern Lights Watch",
    description: "Natural light display in the arctic sky",
    image:
      "https://images.unsplash.com/photo-1553528989-978b279600f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Reykjavik",
    country: "Iceland",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Mixed Media",
  },
  {
    title: "Eiffel Tower Experience",
    description: "Iconic iron lattice tower with stunning city views",
    image:
      "https://images.unsplash.com/photo-1556970255-3c8ef65ba6ef?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Paris",
    country: "France",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Photography",
  },
  {
    title: "Taj Mahal Visit",
    description: "Beautiful white marble mausoleum and UNESCO heritage site",
    image:
      "https://images.unsplash.com/photo-1518029352116-ba8da1d85513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Agra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Painting",
  },
  {
    title: "Grand Canyon Adventure",
    description: "Natural wonder with breathtaking views and hiking trails",
    image:
      "https://images.unsplash.com/photo-1617030905020-f45d2e450f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Arizona",
    country: "USA",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Digital Art",
  },
  {
    title: "Santorini Sunset",
    description: "Beautiful Greek island with white-washed buildings",
    image:
      "https://images.unsplash.com/photo-1529690840038-f38da8894ff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Santorini",
    country: "Greece",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Mixed Media",
  },
  {
    title: "Machu Picchu Trek",
    description: "Ancient Incan city in the Andes mountains",
    image:
      "https://images.unsplash.com/photo-1584285418948-fa79344dafd9?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Cusco Region",
    country: "Peru",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Photography",
  },
  {
    title: "Great Wall Adventure",
    description: "Historic fortification spanning thousands of miles",
    image:
      "https://images.unsplash.com/photo-1594136976553-38699ae9047c?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Beijing",
    country: "China",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Sculpture",
  },
  {
    title: "Safari Experience",
    description: "Wildlife adventure in the African savanna",
    image:
      "https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg",
    location: "Serengeti",
    country: "Tanzania",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Digital Art",
  },
  {
    title: "Venice Gondola Ride",
    description: "Romantic canal tour in the floating city",
    image:
      "https://images.unsplash.com/photo-1606234128575-d1ac480372b0?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Venice",
    country: "Italy",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Painting",
  },
  {
    title: "Sydney Opera House Tour",
    description: "Iconic performing arts venue by the harbor",
    image:
      "https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg",
    location: "Sydney",
    country: "Australia",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Other",
  },
  {
    title: "Northern Lights Watch",
    description: "Natural light display in the arctic sky",
    image:
      "https://images.unsplash.com/photo-1553528989-978b279600f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Reykjavik",
    country: "Iceland",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Mixed Media",
  },
  {
    title: "Eiffel Tower Experience",
    description: "Iconic iron lattice tower with stunning city views",
    image:
      "https://images.unsplash.com/photo-1556970255-3c8ef65ba6ef?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Paris",
    country: "France",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Photography",
  },
  {
    title: "Taj Mahal Visit",
    description: "Beautiful white marble mausoleum and UNESCO heritage site",
    image:
      "https://images.unsplash.com/photo-1518029352116-ba8da1d85513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Agra",
    country: "India",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Painting",
  },
  {
    title: "Grand Canyon Adventure",
    description: "Natural wonder with breathtaking views and hiking trails",
    image:
      "https://images.unsplash.com/photo-1617030905020-f45d2e450f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Arizona",
    country: "USA",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Digital Art",
  },
  {
    title: "Santorini Sunset",
    description: "Beautiful Greek island with white-washed buildings",
    image:
      "https://images.unsplash.com/photo-1529690840038-f38da8894ff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Santorini",
    country: "Greece",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Mixed Media",
  },
  {
    title: "Machu Picchu Trek",
    description: "Ancient Incan city in the Andes mountains",
    image:
      "https://images.unsplash.com/photo-1584285418948-fa79344dafd9?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Cusco Region",
    country: "Peru",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Photography",
  },
  {
    title: "Great Wall Adventure",
    description: "Historic fortification spanning thousands of miles",
    image:
      "https://images.unsplash.com/photo-1594136976553-38699ae9047c?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Beijing",
    country: "China",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Sculpture",
  },
  {
    title: "Safari Experience",
    description: "Wildlife adventure in the African savanna",
    image:
      "https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg",
    location: "Serengeti",
    country: "Tanzania",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Digital Art",
  },
  {
    title: "Venice Gondola Ride",
    description: "Romantic canal tour in the floating city",
    image:
      "https://images.unsplash.com/photo-1606234128575-d1ac480372b0?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Venice",
    country: "Italy",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Painting",
  },
  {
    title: "Sydney Opera House Tour",
    description: "Iconic performing arts venue by the harbor",
    image:
      "https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg",
    location: "Sydney",
    country: "Australia",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Other",
  },
  {
    title: "Northern Lights Watch",
    description: "Natural light display in the arctic sky",
    image:
      "https://images.unsplash.com/photo-1553528989-978b279600f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Reykjavik",
    country: "Iceland",
    owner: "67bdaf6aa5b152a0272b979f",
    typeOfArt: "Mixed Media",
  },
];

module.exports = { data: sampleData };
