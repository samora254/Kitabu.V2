import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import confetti from 'canvas-confetti';
import { Howl } from 'howler';
import { BackButton } from '../components/BackButton';
import 'swiper/css';
import 'swiper/css/effect-cards';

const facts = {
  mathematics: [
    "The word 'mathematics' comes from the Greek word 'mathema', meaning 'learning'",
    "Zero was invented by ancient Indian mathematicians",
    "The equals sign (=) was invented in 1557",
    "A googol is a 1 followed by 100 zeros",
    "Every even number greater than 2 can be expressed as the sum of two prime numbers"
  ],
  english: [
    "The most common letter in English is 'e'",
    "The longest word without a vowel is 'rhythms'",
    "Shakespeare invented over 1,700 words",
    "The shortest complete sentence in English is 'Go!'",
    "The most common word in English is 'the'"
  ],
  kiswahili: [
    "Swahili is spoken by over 100 million people",
    "It's the official language in Tanzania, Kenya, and Uganda",
    "Swahili has borrowed words from Arabic, English, and Portuguese",
    "The word 'safari' comes from Swahili, meaning 'journey'",
    "Swahili is the most widely spoken African language"
  ],
  science: [
    "The human body contains enough carbon to make 900 pencils",
    "Honey never spoils. Archaeologists found 3000-year-old honey still edible",
    "A day on Venus is longer than its year",
    "Bananas are berries, but strawberries aren't",
    "The average human body contains enough iron to make a 3-inch nail"
  ],
  social: [
    "The Great Wall of China is not visible from space",
    "Ancient Egypt had female pharaohs",
    "The shortest war in history lasted 38 minutes",
    "The first Olympic Games were held in 776 BC",
    "The Sahara Desert was once a lush grassland"
  ]
};

export const BrainTease: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const [showCelebration, setShowCelebration] = useState(false);

  const subjectFacts = subjectId && facts[subjectId as keyof typeof facts] || [];

  const applauseSound = new Howl({
    src: ['https://raw.githubusercontent.com/samora254/Kitabu/main/Applause%20Sound%20Effect.mp3'],
    volume: 0.5,
    html5: true
  });

  const handleSlideChange = (swiper: any) => {
    if (swiper.realIndex === subjectFacts.length - 1) {
      setTimeout(() => {
        setShowCelebration(true);
        if (subjectId) {
          localStorage.setItem(`${subjectId}-brain-tease-complete`, 'true');
        }
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        applauseSound.play();
        
        // Navigate after celebration
        setTimeout(() => {
          navigate(`/subject/${subjectId}`);
        }, 3000);
      }, 500);
    }
  };

  useEffect(() => {
    return () => {
      applauseSound.unload();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4">
      <div className="max-w-md mx-auto pt-8">
        <BackButton className="mb-6 text-gray-600" customPath={`/subject/${subjectId}`} />
        
        <h1 className="text-3xl font-bold text-center mb-8">Did You Know?</h1>
        
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="h-[400px]"
          onSlideChange={handleSlideChange}
        >
          {subjectFacts.map((fact, index) => (
            <SwiperSlide key={index} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-800 text-lg text-center leading-relaxed bg-gray-50 p-6 rounded-xl">
                  {fact}
                </p>
              </div>
              <div className="text-center mt-4 text-gray-500 text-sm">
                Swipe left to continue ({index + 1}/{subjectFacts.length})
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
            >
              <motion.div
                initial={{ scale: 0.5, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl px-12 py-8 text-center"
              >
                <h2 className="text-4xl font-bold text-emerald-600 mb-2">
                  Now You Know! 🎉
                </h2>
                <p className="text-gray-600 text-lg">
                  Great job completing this challenge!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};