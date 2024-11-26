import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/Landing page-1.png',
    fallback: 'https://raw.githubusercontent.com/samora254/kitabuAI.v1a/main/Public/Landing%20page-1.png'
  },
  {
    id: 2,
    image: '/Landing page-2.png',
    fallback: 'https://raw.githubusercontent.com/samora254/kitabuAI.v1a/main/Public/Landing%20page-2.png'
  },
  {
    id: 3,
    image: '/Landing page-3.png',
    fallback: 'https://raw.githubusercontent.com/samora254/kitabuAI.v1a/main/Public/Landing%20page-3.png'
  },
];

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleRegister = () => {
    navigate('/signup');
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-400 to-orange-300">
      <div className="relative h-screen max-w-md mx-auto flex flex-col">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                onClick={goToNextSlide}
                className="relative w-full h-full flex flex-col items-center justify-center cursor-pointer"
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                  loading={slide.id === 1 ? "eager" : "lazy"}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = slide.fallback;
                  }}
                />
                {slide.id === 3 && (
                  <div className="absolute bottom-24 left-0 right-0 flex flex-col items-center space-y-4 px-4">
                    <button
                      onClick={handleRegister}
                      className="w-full max-w-xs bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors shadow-lg"
                    >
                      Start Learning Now
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};