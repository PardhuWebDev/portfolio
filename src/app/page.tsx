'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import SlidingImages from '@/components/home/SlidingImages';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { LetterCollision } from '@/components/animations/textAnimations/scrollText';
import Magnetic from '@/components/animations/magnetic';
import Hero from '@/components/home/hero';
import Description from '@/components/home/Description/description';

const slider1 = [
  {
<<<<<<< HEAD
    color: '#0f172a',
    src: 'projects/indiaQuant.png'
  },
  {
    color: '#1e1b4b',
    src: 'projects/research.png'
  },
  {
    color: '#0c1a2e',
    src: 'projects/vela.png'
  },
  {
    color: '#111827',
    src: 'projects/stock.png'
=======
    color: 'white',
    src: 'stylesync/pca.png'
  },
  {
    color: 'white',
    src: 'stylesync/diagram.png'
  },
  {
    color: '#21242b',
    src: 'catapult-trading/dashboard.png'
  },
  {
    color: '#21242b',
    src: 'm31/controller.jpg'
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
  }
];
const slider2 = [
  {
<<<<<<< HEAD
    color: '#1a1a2e',
    src: 'projects/devpulse.png'
  },
  {
    color: '#16213e',
    src: 'projects/filesure.png'
  },
  {
    color: '#0f3460',
    src: 'projects/po.png'
  },
  {
    color: '#0d1117',
    src: 'projects/devpulse.png'
=======
    color: '#d4e3ec',
    src: 'm31/specs.png'
  },
  {
    color: '#9289BD',
    src: 'axo/prototype.png'
  },
  {
    color: 'white',
    src: 'm31/app.png'
  },
  {
    color: 'white',
    src: 'stylesync/hero.svg'
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
  }
];

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const scrollContainerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollContainerRef} className="overflow-x-hidden">
      <LetterCollision />
      {showScrollButton && (
        <Magnetic>
          <div
            className="fixed bottom-4 right-8 flex cursor-pointer items-center space-x-2 text-3xl font-semibold sm:bottom-8"
            onClick={scrollToHero}
          >
            <p>Scroll</p>
<<<<<<< HEAD
=======

>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
            <ArrowDownRight strokeWidth={3} className="size-6" />
          </div>
        </Magnetic>
      )}
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <Description />
      <SlidingImages slider1={slider1} slider2={slider2} />
      <ContrastCursor isActive={false} text={'Go to project'} />
    </div>
  );
}
