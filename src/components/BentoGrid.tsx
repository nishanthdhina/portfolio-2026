import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiDollarSign, FiClock } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiTiktok, SiInstagram } from "react-icons/si";

export const RevealBento = () => {
  return (
    <div id="about" className="relative min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="grid max-w-4xl w-full grid-flow-dense grid-cols-12 gap-4 mb-16"
        >
          <HeaderBlock />
          <SocialsBlock />
          <AboutBlock />
          <StatsBlock />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }: { className?: string; [key: string]: any }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 relative",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="/images/provocislogo.png"
      alt="ProVocis Logo"
      className="mb-4 h-14 w-auto"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
       I'm Nishanth.{" "}
      <span className="text-zinc-400">
        I scale businesses and make a lot of money doing so.
      </span>
    </h1>
    <a
      href="mailto:contact@nishanthdhina.com"
      className="flex items-center gap-1 text-white hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-700 md:col-span-3 cursor-pointer"
    >
      <a
        href="https://github.com/nishanthdhina"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full w-full place-content-center text-3xl text-white absolute inset-0"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-700 md:col-span-3 cursor-pointer"
    >
      <a
        href="https://linkedin.com/in/nishanthdhina"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full w-full place-content-center text-3xl text-white absolute inset-0"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-700 md:col-span-3 cursor-pointer"
    >
      <a
        href="https://tiktok.com/@nishanthdhina"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full w-full place-content-center text-3xl text-white absolute inset-0"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-700 md:col-span-3 cursor-pointer"
    >
      <a
        href="https://instagram.com/nishanthdhina"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full w-full place-content-center text-3xl text-white absolute inset-0"
      >
        <SiInstagram />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-lg leading-relaxed">
    <p className="mb-4 text-zinc-400">
      I've always wanted to be insanely rich. Not Lamborghini rich, but rich enough to understand the niche references Drake makes in his songs.
    </p>
    <p className="mb-4 text-zinc-400">
      At <span className="font-semibold text-white">15</span>, I started a clothing brand. I was figuring out how businesses work although it didnt work out i still learnt a lot.
    </p>
    <p className="mb-4 text-zinc-400">
      At <span className="font-semibold text-white">16</span>, I built{" "}
      <a
        href="https://provocis.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-white hover:text-red-300 transition-colors cursor-pointer"
      >
        ProVocis
      </a>
      . An AI workspace that doesn't kill creativity. It helps you balance life and productivity, making you 10x more efficient. I want everyone to integrate AI into their workflow.
    </p>
    <p className="mb-4 text-zinc-400">
      At <span className="font-semibold text-white">17</span>, I launched{" "}
      <a
        href="https://refound.studio"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-white hover:text-red-300 transition-colors cursor-pointer"
      >
        Refound
      </a>
      {" "}with Alex, my best friend and ProVocis co-founder. Wanted to gain real sales experience, so we reached out to businesses lacking digital presence. Understood their challenges, delivered tailored solutions, and watched my net worth explode.
    </p>
    <p className="mb-4 text-zinc-400">
      Dropped out of high school, went into tech, landed at <span className="font-semibold text-white">Mercedes-Benz</span>. Now I'm building products and working with companies that move fast.
    </p>
    <p className="text-zinc-400">
      If you're here, you're probably building something. Let's connect.
    </p>
  </Block>
);

const StatsBlock = () => {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(2007, 10, 23, 8, 15, 0); // Nov 23, 2007 at 8:15 AM (month is 0-indexed)
      const now = new Date();

      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      let hours = now.getHours() - birthDate.getHours();
      let minutes = now.getMinutes() - birthDate.getMinutes();
      let seconds = now.getSeconds() - birthDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setAge({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Block className="col-span-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <p className="text-sm text-zinc-400 mb-2">Current Net Worth</p>
          <p className="text-4xl font-bold text-white">€328,281.28</p>
          <p className="text-sm text-zinc-500 mt-1">Last updated: Jan 7, 2026</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-zinc-400 mb-3">Life Span</p>
          <div className="flex flex-wrap gap-0.5">
            {Array.from({ length: 80 }, (_, i) => {
              const year = i + 1;
              const isFilled = year <= age.years;
              return (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-sm border transition-all ${
                    isFilled
                      ? 'bg-white border-white'
                      : 'bg-transparent border-zinc-700'
                  }`}
                  title={`Year ${year}`}
                />
              );
            })}
          </div>
          <p className="text-xs text-zinc-500 mt-2">
            {age.years} of 80 years lived • {80 - age.years} years remaining
          </p>
        </div>
      </div>
    </Block>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto pb-6">
      <p className="text-center text-zinc-400">
        This website was built by{" "}
        <a
          href="https://refound.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline transition-all"
        >
          Refound Studio
        </a>
        {" "}{currentYear}
      </p>
    </footer>
  );
};
