import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { galleryData } from '../../data/cmsData';

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B3D91] to-[#1B7F5B]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white/90">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

interface ImageModalProps {
  image: any;
  onClose: () => void;
}

function ImageModal({ image, onClose }: ImageModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} className="text-gray-700" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-[400px] md:h-auto">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="inline-block px-3 py-1 bg-[#0B3D91]/10 text-[#0B3D91] rounded-full text-sm font-medium mb-4">
              {image.category}
            </div>
            <h2 className="text-3xl font-bold text-[#0B3D91] mb-4">{image.title}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{image.caption}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} className="text-[#1B7F5B]" />
                <span>{image.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar size={20} className="text-[#1B7F5B]" />
                <span>{formatDate(image.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['All', ...Array.from(new Set(galleryData.map(img => img.category)))];

  const filteredImages = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Capturing moments of change, resilience, and hope from communities across Pakistan"
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#0B3D91] text-white shadow-lg'
                      : 'bg-[#F5F5F5] text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Masonry 
                columnsCount={columns} 
                gutter="24px" 
                className="masonry-grid"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-200"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-sm font-medium text-[#1B7F5B] mb-2">{image.category}</div>
                        <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-white/80">
                          <MapPin size={14} />
                          <span>{image.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
