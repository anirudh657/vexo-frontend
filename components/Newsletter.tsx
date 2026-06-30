import Reveal from "./Reveal";

export default function Newsletter() {
    return (
        <Reveal>
            <section className="bg-zinc-950 text-white py-24">
                <div className="max-w-4xl mx-auto text-center px-8">
                    <h2 className="text-5xl font-bold">
                        Stay Updated
                    </h2>

                    <p className="text-gray-400 mt-6 text-lg">
                        Subscribe to receive exclusive offers, new arrivals and exciting
                        updates.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-4 rounded-full bg-zinc-900 border border-zinc-700 w-full md:w-96 outline-none focus:border-cyan-400 transition"
                        />

                        <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-white hover:scale-105 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}