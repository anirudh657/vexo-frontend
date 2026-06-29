type ProductCardProps = {
    name: string;
    price: string;
    image: string;
};

export default function ProductCard({
    name,
    price,
    image,
}: ProductCardProps) {
    return (
        <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3">

            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />
            </div>

            <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                    {name}
                </h3>

                <p className="text-cyan-400 text-xl mt-2">
                    {price}
                </p>

                <button className="mt-6 w-full py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition">
                    Add to Cart
                </button>

            </div>

        </div>
    );
}