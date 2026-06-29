export default function Navbar() {
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

                {/* Login Button */}
                <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-cyan-300 transition duration-300">
                    Login
                </button>

            </nav>
        </header>
    );
}