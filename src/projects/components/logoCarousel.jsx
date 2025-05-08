import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "@motionone/utils";

function ParallaxRow({ children, baseVelocity = 100, isReversed = false }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Adjust wrapping for a row of logos
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(isReversed ? -1 : 1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change direction when scroll flips
    if (velocityFactor.get() < 0) {
      moveBy = moveBy * -0.5;
    } else if (velocityFactor.get() > 0) {
      moveBy = moveBy * 0.5;
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax-row w-full py-1 lg:py-3 overflow-hidden">
      <motion.div
        className="scroller flex whitespace-nowrap"
        style={{ x }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function LogoItem({ src }) {
  return (
    <div className="logo-item inline-block px-1 lg:px-4">
      <div className="bg-black p-5 lg:p-10 xl:p-20 rounded-xl flex items-center justify-center w-[30vw] h-[20vw]">
        <img src={src} alt="Logo" className="h-full w-auto object-contain" />
      </div>
    </div>
  );
}

export default function LogoCarousel() {
  const topRowLogos = [
    "/images/logo1.webp",
    "/images/logo2.webp",
    "/images/logo3.webp",
    "/images/logo4.webp",
    "/images/logo5.webp",
    "/images/logo6.webp",
    "/images/logo7.webp",
  ];

  const bottomRowLogos = [
    "/images/logo1.webp",
    "/images/logo2.webp",
    "/images/logo3.webp",
    "/images/logo4.webp",
    "/images/logo5.webp",
    "/images/logo6.webp",
    "/images/logo7.webp",
  ];

  return (
    <section className="flex flex-col justify-center w-full overflow-hidden py-6">
      {/* Top row - moving right */}
      <ParallaxRow baseVelocity={2} isReversed={false}>
        <div className="flex">
          {topRowLogos.map((logo, index) => (
            <LogoItem key={`top-${index}`} src={logo} />
          ))}
        </div>
      </ParallaxRow>
      
      {/* Bottom row - moving left */}
      <ParallaxRow baseVelocity={2} isReversed={true}>
        <div className="flex">
          {bottomRowLogos.map((logo, index) => (
            <LogoItem key={`bottom-${index}`} src={logo} />
          ))}
        </div>
      </ParallaxRow>
    </section>
  );
}