"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsMarquee from "@/components/SkillsMarquee";
import { experienceData, educationData } from "@/data/portfolio";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <main className="min-h-screen grainy-bg relative selection:bg-electricViolet selection:text-white">
      {/* Reactive mouse follow glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.1), transparent 80%)`,
        }}
      />

      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-acidGreen tracking-widest uppercase text-sm mb-4 font-mono"
          >
            Student & Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight"
          >
            I build <span className="text-gradient">digital</span><br />
            experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed"
          >
            I am Divyesh Ashok, an undergraduate in Computer Science at Rajiv Gandhi Institute of Technology.
            Passionate about modern web development and crafting high-end, interactive interfaces.
          </motion.p>
        </section>

        {/* Experience Section (Bento Grid) */}
        <section id="experience" className="py-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 tracking-tight"
          >
            Experience
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Background image effect */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-electricViolet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="z-10 relative h-full flex flex-col">
                  <span className="text-neonCyan font-mono text-sm mb-4 inline-block">{item.year}</span>
                  <h3 className="text-2xl font-bold mb-2 mt-auto">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 tracking-tight"
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">{item.school}</h3>
                  <p className="text-gray-500">{item.degree}</p>
                </div>
                <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-electricViolet">↗</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 tracking-tight"
          >
            Tech Arsenal
          </motion.h2>
          <SkillsMarquee />
        </section>
      </div>

      <Footer />
    </main>
  );
}
