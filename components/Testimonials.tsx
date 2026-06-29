export default function Testimonials() {
    const reviews = [
        {
            name: "Rahul Sharma",
            review:
                "Amazing quality and super fast delivery. I will definitely shop again!",
        },
        {
            name: "Priya Verma",
            review:
                "The website looks premium and the products exceeded my expectations.",
        },
        {
            name: "Arjun Mehta",
            review:
                "Customer support was excellent and the checkout process was smooth.",
        },
    ];

    return (
        <section className="bg-black text-white py-24 px-8">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-center mb-16">
                    What Our Customers Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-cyan-400 transition duration-300"
                        >

                            <p className="text-yellow-400 text-2xl mb-4">
                                ⭐⭐⭐⭐⭐
                            </p>

                            <p className="text-gray-300 leading-7 italic">
                                "{review.review}"
                            </p>

                            <h3 className="mt-6 text-xl font-bold">
                                {review.name}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}