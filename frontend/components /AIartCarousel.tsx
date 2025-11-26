import { motion } from "framer-motion";
export default function AIArtCarousel({ images = [] }: { images: string[] }) {
  return (
    <div className="steam-carousel flex space-x-4 py-4 overflow-x-auto">
      {images.map((img, i) =>
        <motion.img
          key={i}
          src={img}
          alt={`AI Art ${i}`}
          className="ai-art-img rounded-md shadow-lg"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.3 }}
          style={{ width: 96, height: 96, objectFit: "cover" }}
        />
      )}
    </div>
  );
}
