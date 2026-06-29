"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Cyan Glow */}
            <div className="absolute w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-[220px]"></div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-6"
                initial={{ opacity: 0, y: 150, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                }}
            >
                <p className="text-cyan-300 tracking-[10px] uppercase mb-5 font-semibold">
                    EXPERIENCE THE FUTURE
                </p>

                <h1 className="text-7xl md:text-8xl font-extrabold text-white drop-shadow-[0_0_35px_rgba(0,255,255,0.35)]">
                    VEXO
                </h1>

                <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
                    Discover premium electronics designed for tomorrow.
                </p>

                <button className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 hover:bg-cyan-300 transition duration-300">
                    Shop Now
                </button>
            </motion.div>
        </main>
    );
}