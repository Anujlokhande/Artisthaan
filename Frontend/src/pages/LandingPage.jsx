import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#E3E1D9] text-[#5e503f] flex flex-col justify-between">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center h-screen text-center p-4"
      >
        <img
          src="https://images.unsplash.com/photo-1631446415295-6fb14a3e9c4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          alt="Indian Art"
          className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
        />
        {/* <div className="absolute left-10 max-w-md bg-transparent backdrop-blur-md  bg-opacity-80 p-6  text-[#5e503f]">
          <h2 className="text-4xl font-bold mb-4">Discover Indian Art</h2>
          <p className="text-lg">
            Immerse yourself in the beauty of handcrafted creations by talented
            local artists. Explore unique pieces that tell stories of tradition,
            culture, and passion.
          </p>
        </div> */}
      </motion.section>

      <motion.section className="columns-1 md:columns-2 lg:columns-3 gap-8 p-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">
            A Marketplace for Local Artists
          </h2>
          <p className="text-lg">
            Our platform is dedicated to empowering local artists by providing
            them with a digital marketplace where they can showcase and sell
            their handcrafted creations. By bridging the gap between tradition
            and modern commerce, we help artisans reach a global audience while
            preserving their cultural heritage.
          </p>
        </div>
        {[
          {
            title: "Empowering Artists",
            img: "https://images.unsplash.com/photo-1621788894112-ddb767d097e1?q=80&w=2070&auto=format&fit=crop",
            desc: "We provide a seamless platform where artists can reach a global audience and make their passion a profession. Our intuitive interface helps artisans focus on their craft while we handle the complexities of online selling.",
          },
          {
            title: "Authentic Creations",
            img: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?q=80&w=1966&auto=format&fit=crop",
            desc: "Our marketplace offers a wide range of handcrafted goods that reflect India's rich cultural heritage. Each piece tells a story, bringing centuries-old traditions into the modern world.",
          },
          {
            title: "Bridging the Gap",
            img: "https://images.unsplash.com/photo-1582022614003-20a92ab1cbbe?q=80&w=2016&auto=format&fit=crop",
            desc: "By connecting artists with buyers worldwide, we ensure fair trade and sustainable growth for the local art industry. Our platform supports communities and helps preserve invaluable artistic traditions.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#F2EFE5] p-6 rounded-2xl shadow-lg break-inside-avoid flex flex-col items-center text-center relative group"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={item.title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-[#5e503f] group-hover:opacity-100 opacity-100 transition-opacity duration-300">
              {item.title}
            </h3>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-[#E3E1D9] bg-opacity-90 p-4 rounded-2xl text-[#5e503f]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.section>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#B4B4B8] py-6 shadow-md flex justify-center items-center gap-4"
      >
        <Link
          to="/login"
          className="bg-[#C7C8CC] text-[#5e503f] px-4 py-2 rounded-lg shadow-md hover:bg-[#B4B4B8] transition"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="bg-[#B4B4B8] text-[#14120e] px-4 py-2 rounded-lg shadow-md hover:bg-[#C7C8CC] transition"
        >
          Sign Up
        </Link>
      </motion.footer>
    </div>
  );
}
