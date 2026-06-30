import Reveal from "./Reveal";
import {
  Truck,
  ShieldCheck,
  Headphones,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "Get your products delivered quickly and safely.",
    icon: Truck,
  },
  {
    title: "Secure Payments",
    description: "100% secure and encrypted checkout experience.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    description: "Our support team is always ready to help.",
    icon: Headphones,
  },
  {
    title: "Genuine Products",
    description: "Every product is original and quality checked.",
    icon: BadgeCheck,
  },
];

export default function Features() {
  return (
    <Reveal>
      <section className="bg-zinc-950 text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose VEXO?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
                >
                  <Icon
                    size={50}
                    className="text-cyan-400 mb-6"
                  />

                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}