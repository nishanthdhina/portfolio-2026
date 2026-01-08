import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const LifeSection = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TextParallaxContent
        imgUrl="/images/life-2.jpg"
        subheading="September 2024"
        heading="Founded ProVocis"
      >
        <ContentSection
          title="Bridging AI and Communication"
          description="At ProVocis, I focus on building a platform that makes career growth smarter and more effective. My goal is to bridge the gap between AI and real-world communication, helping professionals improve their skills effortlessly."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/life-3.jpg"
        subheading="July 2025"
        heading="Co-Founded Refound"
      >
        <ContentSection
          title="Strategy, Partnerships & Growth"
          description="Leading strategy, partnerships, and client growth at Refound. From onboarding to big-picture transformation, I work closely with founders and teams to align business goals with brand direction and digital execution. Focused on intentional growth, relationship-building, and bringing clarity to creative strategy."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/life-4.jpg"
        subheading="August 2025"
        heading="Dropped Out"
      >
        <ContentSection
          title="Taking The Unconventional Path"
          description="Dropped out of highschool at 17 and moved straight into tech. Made the decision to pursue my own path, focusing on building real products and gaining real-world experience."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/life-1.jpg"
        subheading="September 2025"
        heading="Mercedes-Benz Developer"
      >
        <ContentSection
          title="Building at Mercedes-Benz Tech Innovation"
          description="Started my journey as a Software Engineer at Mercedes-Benz Tech Innovation. Focused on building functional software, learning full-stack development, and solving real-world problems. Passionate about coding, clean design, and creating applications that make an impact."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/life-5.jpg"
        subheading="Present"
        heading="Who I Am"
      >
        <ContentSection
          title="Platform Owner & Swing Trader"
          description="18 Year old Building ProVocis & Refound. Horology enthusiast. Aspiring Cyber Security engineer. Fluent in English and German and i act like i can speak fluent Spanish cause i listen to bad bunny"
        />
      </TextParallaxContent>
      <footer className="mt-auto py-6 bg-white">
        <p className="text-center text-neutral-600">
          This website was built by{" "}
          <a
            href="https://refound.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:underline transition-all"
          >
            Refound Studio
          </a>
          {" "}{new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ContentSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        {description}
      </p>
    </div>
  </div>
);
