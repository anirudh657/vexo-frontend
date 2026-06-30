import Image from "next/image";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

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
        <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,255,255,0.15)]">
            {/* NEW Badge */}
            <span className="absolute left-4 top-4 z-20 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                NEW
            </span>

            {/* Wishlist */}
            <button
                type="button"
                title="Add to Wishlist"
                aria-label="Add to Wishlist"
                className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-3 transition hover:bg-red-500"
            >
                <FaHeart className="text-white" />
            </button>

            {/* Product Image */}
            <div className="overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Product Details */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{name}</h3>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />

                    <span className="ml-2 text-sm text-gray-400">5.0</span>
                </div>

                {/* Price */}
                <p className="mt-4 text-2xl font-bold text-cyan-400">
                    {price}
                </p>

                {/* Add to Cart */}
                <button
                    type="button"
                    title="Add to Cart"
                    aria-label="Add to Cart"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-bold text-black transition hover:bg-white"
                >
                    <FaShoppingCart />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}