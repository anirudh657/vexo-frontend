import ProductCard from "./ProductCard";

const products = [
    {
        name: "iPhone 16 Pro",
        price: "₹1,39,900",
        image: "/products/iphone.jpg",
    },
    {
        name: "MacBook Pro",
        price: "₹1,99,900",
        image: "/products/macbook.jpg",
    },
    {
        name: "AirPods Pro",
        price: "₹49,900",
        image: "/products/airpods.jpg",
    },
    {
        name: "Apple Watch Ultra",
        price: "₹89,900",
        image: "/products/watch.jpg",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-black py-24 px-8">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
                Featured Products
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
}