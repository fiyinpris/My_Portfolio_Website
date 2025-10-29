import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getImageStyle = (index) => {
    const diff = index - currentImageIndex;
    const totalImages = images.length;

    // Normalize difference to handle wrapping
    let position = diff;
    if (Math.abs(diff) > totalImages / 2) {
      position = diff > 0 ? diff - totalImages : diff + totalImages;
    }

    if (position === 0) {
      // Center image
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
      };
    } else if (position === 1) {
      // Right image
      return {
        transform: "translateX(40%) scale(0.8) rotateY(-25deg)",
        zIndex: 20,
        opacity: 0.7,
      };
    } else if (position === -1) {
      // Left image
      return {
        transform: "translateX(-40%) scale(0.8) rotateY(25deg)",
        zIndex: 20,
        opacity: 0.7,
      };
    } else {
      // Hidden images
      return {
        transform: `translateX(${position > 0 ? 100 : -100}%) scale(0.5)`,
        zIndex: 10,
        opacity: 0,
      };
    }
  };

  return (
    <div className="relative w-full h-100 overflow-hidden ">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Images with 3D effect */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-out cursor-pointer mb-12
               w-full sm:w-[450px] md:w-[450px] max-w-full"
            style={getImageStyle(index)}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        ))}
      </div>

      {/* My Navigation Arrows/ */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-5 top-1/2 -translate-y-1/2 
             bg-white/40 dark:bg-white/15 backdrop-blur-md 
             text-foreground p-2 rounded-full 
             hover:bg-white/60 dark:hover:bg-white/25 
             hover:scale-110 transition-all duration-300 
             z-40 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-5 top-1/2 -translate-y-1/2 
             bg-white/40 dark:bg-white/15 backdrop-blur-md 
             text-foreground p-2 rounded-full 
             hover:bg-white/60 dark:hover:bg-white/25 
             hover:scale-110 transition-all duration-300 
             z-40 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/*My Progress Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-primary w-8"
                  : "bg-white/60 w-2 hover:bg-white/90"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const projects = [
  {
    images: [
      "/projects/Project 1.jpg",
      "/projects/Project 2.jpg",
      "/projects/Project 3.jpg",
    ],
  },
];

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-10 md:py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:mb-12">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCarousel key={index} images={project.images} />
          ))}
        </div>
      </div>
    </section>
  );
};
