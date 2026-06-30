"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="mx-auto max-w-7xl flex items-center justify-between px-8 py-5">

                {/* Logo */}
                <h1 className="text-3xl font-extrabold text-white tracking-wide cursor-pointer">
                    VEXO
                </h1>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-12 text-white font-medium backdrop-blur-xl bg-white/10 px-8 py-3 rounded-full border border-white/20">

                    <li className="cursor-pointer hover:text-cyan-300 transition duration-300">
                        Home
                    </li>

                    <li className="cursor-pointer hover:text-cyan-300 transition duration-300">
                        Products
                    </li>

                    <li className="cursor-pointer hover:text-cyan-300 transition duration-300">
                        About
                    </li>

                    <li className="cursor-pointer hover:text-cyan-300 transition duration-300">
                        Contact
                    </li>

                </ul>

                <div className="hidden lg:flex items-center bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 w-72">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
                    />
                </div>

                {/* Login Button */}
                <div className="flex items-center gap-4">

                    <button className="hidden md:block bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-cyan-300 transition duration-300">
                        Login
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white"
                    >
                        {menuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>

                </div>

            </nav>
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-8 py-8">

                    <div className="flex flex-col gap-6 text-white text-lg font-medium">

                        <a href="#" className="hover:text-cyan-300 transition">
                            Home
                        </a>

                        <a href="#" className="hover:text-cyan-300 transition">
                            Products
                        </a>

                        <a href="#" className="hover:text-cyan-300 transition">
                            About
                        </a>

                        <a href="#" className="hover:text-cyan-300 transition">
                            Contact
                        </a>

                        <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-full px-4 py-3 mt-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
                            />
                        </div>

                        <button className="mt-2 bg-white text-black py-3 rounded-full font-semibold hover:bg-cyan-300 transition">
                            Login
                        </button>

                    </div>

                </div>
            )}
        </header>
    );
}