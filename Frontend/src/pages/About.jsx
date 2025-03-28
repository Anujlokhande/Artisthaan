import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
        >
          About Artisthan
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600">
              Artisthan is a platform where art meets innovation. We believe in
              nurturing creativity and providing a space for artists to showcase
              their unique talents and connect with art enthusiasts worldwide.
            </p>
            <div className="flex gap-4">
              <div className="h-2 w-20 bg-purple-500 rounded-full"></div>
              <div className="h-2 w-12 bg-pink-500 rounded-full"></div>
              <div className="h-2 w-8 bg-indigo-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3"
                alt="Art Gallery"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Inspire", "Create", "Connect"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item}
                </h3>
                <p className="text-gray-600">
                  We strive to {item.toLowerCase()} artists and art lovers
                  through our innovative platform.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
