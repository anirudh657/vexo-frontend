import Reveal from "./Reveal";
import { Mail, Globe, Phone } from "lucide-react";

export default function Footer() {
    return (
        <Reveal>
            <footer className="bg-zinc-950 text-white border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Logo */}
                    <div>
                        <h2 className="text-3xl font-bold text-cyan-400">
                            VEXO
                        </h2>

                        <p className="mt-4 text-gray-400 leading-7">
                            Premium electronics for the future.
                            Shop the latest gadgets with confidence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-cyan-400 transition cursor-pointer">
                                Home
                            </li>

                            <li className="hover:text-cyan-400 transition cursor-pointer">
                                Products
                            </li>

                            <li className="hover:text-cyan-400 transition cursor-pointer">
                                About
                            </li>

                            <li className="hover:text-cyan-400 transition cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Categories
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>Smartphones</li>
                            <li>Laptops</li>
                            <li>Headphones</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="flex items-center gap-2 text-gray-400 mb-3">
                            <Mail size={18} />
                            support@vexo.com
                        </div>

                        <div className="flex gap-5 mt-6">
                            <Globe className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition" />

                            <Phone className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition" />

                            <Mail className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition" />
                        </div>
                    </div>

                </div>

                <div className="border-t border-zinc-800 py-6 text-center text-gray-500">
                    © 2026 VEXO. All Rights Reserved.
                </div>
            </footer>
        </Reveal>
    );
}