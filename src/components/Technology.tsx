import { motion } from 'framer-motion';

function Technology() {
  const images = [
    { src: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg", alt: "Adobe Premiere Pro" },
    { src: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects.svg", alt: "Adobe After Effects" },
    { src: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop-40.svg", alt: "Adobe Photoshop" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png", alt: "Da Vinci Resolve" },
    { src: "https://static.wikia.nocookie.net/ipod/images/4/48/Final_Cut_Pro_10.5_icon.png", alt: "Final Cut Pro" },
  ];

  return (
    <div className="px-4 lg:px-32">
      <div className="mx-auto text-center mb-6">
        <h2 className="text-gray-600 md:text-2xl">" In the world of video, the editor is the storyteller. "</h2>
      </div>
      <div className="relative py-6 md:py-10 overflow-hidden before:bg-gradient-to-r before:from-white before:to-transparent after:bg-gradient-to-l after:from-white after:to-transparent before:absolute before:top-0 before:start-0 before:z-10 before:w-20 before:h-full after:absolute after:top-0 after:end-0 after:w-20 after:h-full">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ['20%', '-30%', '20%']
            }}
            transition={{ duration: 20, ease: "linear", times: [0, 0.5, 1], repeat: Infinity }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="w-12 md:w-16 h-auto mr-2 md:mr-8"
                src={image.src}
                alt={image.alt}
              />
            ))}
            {images.map((image, index) => (
              <img
                key={`duplicate-${index}`}
                className="hidden md:block w-12 md:w-16 h-auto mr-8"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Technology;