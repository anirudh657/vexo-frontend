import {
    Smartphone,
    Laptop,
    Headphones,
    Watch,
    Gamepad2,
    House,
} from "lucide-react";

const categories = [
    {
        title: "Smartphones",
        icon: Smartphone,
        description: "Latest flagship devices",
    },
    {
        title: "Laptops",
        icon: Laptop,
        description: "Powerful performance",
    },
    {
        title: "Headphones",
        icon: Headphones,
        description: "Premium sound quality",
    },
    {
        title: "Smart Watches",
        icon: Watch,
        description: "Track your lifestyle",
    },
    {
        title: "Gaming",
        icon: Gamepad2,
        description: "Next-gen gaming gear",
    },
    {
        title: "Smart Home",
        icon: House,
        description: "Connected living",
    },
];

export default function Categories() {
    return (
        <section className="bg-black text-white py-24 px-8">
            <h2 className="text-5xl font-bold text-center mb-16">
                Shop by Category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={category.title}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            <Icon size={50} className="text-cyan-400 mb-6" />

                            <h3 className="text-2xl font-bold mb-3">
                                {category.title}
                            </h3>

                            <p className="text-gray-400">
                                {category.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}