import { motion } from "motion/react";

// this interface is prone to change once real data kicks in
interface WishlistItems {
  id: number;
  title: string;
  description: string;
  link: string;
  price: string;
}

// dummy data so something can load
const wishlists: WishlistItems[] = [
  {
    id: 1,
    title: "New Headphones",
    description: "Wireless noise-cancelling headphones for music and work.",
    link: "https://example.com/headphones",
    price: "$199",
  },
  {
    id: 2,
    title: "Travel Backpack",
    description: "Durable 40L travel backpack with USB charging port.",
    link: "https://example.com/backpack",
    price: "$89",
  },
  {
    id: 3,
    title: "Cookbook",
    description: "A cookbook with 100 easy and healthy recipes.",
    link: "https://example.com/cookbook",
    price: "$25",
  },
  {
    id: 4,
    title: "Smartwatch",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    link: "https://example.com/smartwatch",
    price: "$149",
  },
  {
    id: 5,
    title: "Art Supplies Kit",
    description: "Complete art kit with brushes, paints, and sketch pads.",
    link: "https://example.com/art-supplies",
    price: "$59",
  },
];

export default function WishlistContent() {
  return (
    <div className="flex justify-center items-center mt-[2rem] bg-[#f4f5fb] border border-gray-300 rounded-lg px-4 py-3">
      <ul className="list-disc mx-5">
        {wishlists.map((item) => (
          <motion.li
            key={item.id}
            initial={{
              y: 0,
            }}
            whileHover={{
              y: -1.2,
            }}
          >
            <p className="cursor-default">
              {item.title} - {item.price}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
