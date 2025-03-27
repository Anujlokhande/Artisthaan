import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-[#E3E1D9] to-[#F2EFE5] text-[#5e503f]"
    >
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: headerY, opacity }}
        >
          <img
            src="https://images.unsplash.com/photo-1631446415295-6fb14a3e9c4c?q=80&w=2071&auto=format&fit=crop"
            alt="Indian Art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E3E1D9]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-600">
            Discover Indian Art
          </h1>
          <p className="text-2xl text-amber-100 mb-8">
            Where tradition meets modern artistry
          </p>
        </motion.div>
      </motion.section>

      <motion.section className="relative z-10 px-8 py-24 bg-white/80 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-900 bg-clip-text text-transparent">
            A Marketplace for Local Artists
          </h2>
          <p className="text-xl leading-relaxed">
            Our platform is dedicated to empowering local artists by providing
            them with a digital marketplace where they can showcase and sell
            their handcrafted creations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Empowering Artists",
              img: "https://images.unsplash.com/photo-1621788894112-ddb767d097e1?q=80&w=2070&auto=format&fit=crop",
              desc: "We provide a seamless platform where artists can reach a global audience and make their passion a profession.",
            },
            {
              title: "Authentic Creations",
              img: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?q=80&w=1966&auto=format&fit=crop",
              desc: "Our marketplace offers a wide range of handcrafted goods that reflect India's rich cultural heritage.",
            },
            {
              title: "Bridging the Gap",
              img: "https://images.unsplash.com/photo-1582022614003-20a92ab1cbbe?q=80&w=2016&auto=format&fit=crop",
              desc: "By connecting artists with buyers worldwide, we ensure fair trade and sustainable growth for the local art industry.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden h-[400px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-amber-200"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.footer
        className="bg-gradient-to-r from-amber-700 to-amber-900 py-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center gap-6">
          <Link
            to="/login"
            className="px-8 py-3 rounded-full bg-white text-amber-900 font-semibold hover:bg-amber-100 transition-all duration-300 transform hover:scale-105"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </motion.footer>
    </div>
  );
}
