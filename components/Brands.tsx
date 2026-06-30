export default function Brands() {
    const brands = [
        "Apple",
        "Samsung",
        "Sony",
        "Dell",
        "JBL",
        "Logitech",
    ];

    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-5xl font-bold text-center mb-14">
                    Trusted Brands
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900 py-8 text-center text-2xl font-bold transition duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-2"
                        >
                            {brand}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}