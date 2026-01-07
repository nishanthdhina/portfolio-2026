import React from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import {
  FiBell,
  FiCheck,
  FiChevronDown,
  FiList,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

export const NeuHero = () => {
  return (
    <section className="flex min-h-screen flex-col overflow-hidden bg-white">
      <div className="relative flex flex-1 flex-col items-center justify-center px-12 pb-32 pt-12 md:pt-24">
        <Copy />
        <MockupScreen />
      </div>
      <Logos />
    </section>
  );
};

const Copy = () => {
  return (
    <>
      <div className="mb-1.5 rounded-full bg-zinc-600">
        <a
          href="https://provocis.com"
          target="_blank"
          rel="nofollow"
          className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
        >
          <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
            HEY!
          </span>
          <span className="ml-1.5 mr-1 inline-block">
            I founded ProVocis!
          </span>
          <FiArrowUpRight className="mr-2 inline-block" />
        </a>
      </div>
      <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-6xl md:leading-[1.15]">
        Not your Average 18 year old
      </h1>
      <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-xl md:leading-relaxed">
        I've built and scaled multiple platforms for businesses. I don't work with everyone, but when I do, I deliver.
      </p>
      <a
        href="mailto:contact@nishanthdhina.com"
        className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
      >
        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
          <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
        </span>
        <span className="font-medium">Get in touch</span>
      </a>
    </>
  );
};

const MockupScreen = () => {
  return (
    <div className="absolute bottom-0 left-1/2 h-36 w-[calc(100vw_-_56px)] max-w-[1100px] -translate-x-1/2 overflow-hidden rounded-t-xl bg-zinc-900 p-0.5">
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-0.5">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-yellow-400" />
          <span className="size-2 rounded-full bg-green-400" />
        </div>
        <span className="rounded bg-zinc-600 px-2 py-0.5 text-xs text-zinc-100">
          app.provocis.com
        </span>
        <FiChevronDown className="text-white" />
      </div>
      <div className="relative z-0 grid h-full w-full grid-cols-[100px,_1fr] overflow-hidden rounded-t-lg bg-white md:grid-cols-[150px,_1fr]">
        <div className="h-full border-r border-zinc-300 p-2">
          <Logo />
          <div className="mt-3 space-y-1.5">
            <span className="flex items-center gap-1.5 text-xs text-indigo-600">
              <FiMessageCircle />
              <span>Messages</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <FiCheck />
              <span>Tasks</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <FiList />
              <span>Board</span>
            </span>
          </div>
        </div>

        <div className="relative z-0 p-2">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded bg-zinc-200 px-1.5 py-1 pr-8 text-xs text-zinc-600">
              Search...
            </span>
            <div className="flex items-center gap-1.5 text-xl">
              <FiBell className="text-indigo-600" />
              <FiUser />
            </div>
          </div>
          <div className="h-full rounded-xl border border-dashed border-zinc-500 bg-zinc-100" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-white/0 to-white" />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <img
      src="/images/provocislogo.png"
      alt="ProVocis Logo"
      className="h-8 w-auto"
    />
  );
};

const Logos = () => {
  return (
    <div className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <>
            <AchievementText text="Yeah, I'm 18 and I've delivered digital solutions to multi-million dollar companies." />
            <AchievementText text="Yeah, I'm 18 and I've delivered digital solutions to multi-million dollar companies." />
            <AchievementText text="Yeah, I'm 18 and I've delivered digital solutions to multi-million dollar companies." />
          </>
        </TranslateWrapper>
        <TranslateWrapper>
          <>
            <AchievementText text="Yeah, I'm 18 and I've delivered digital solutions to multi-million dollar companies." />
            <AchievementText text="Yeah, I'm 18 and I've delivered digital solutions to multi-million dollar companies." />
            <AchievementText text="Yeah, I'm 18 and I've delivered digital solutions to multi-million dollar companies." />
          </>
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <>
            <AchievementText text="I built and scaled my startup ProVocis, then got hired by Mercedes-Benz." />
            <AchievementText text="I built and scaled my startup ProVocis, then got hired by Mercedes-Benz." />
            <AchievementText text="I built and scaled my startup ProVocis, then got hired by Mercedes-Benz." />
          </>
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <>
            <AchievementText text="I built and scaled my startup ProVocis, then got hired by Mercedes-Benz." />
            <AchievementText text="I built and scaled my startup ProVocis, then got hired by Mercedes-Benz." />
            <AchievementText text="I built and scaled my startup ProVocis, then got hired by Mercedes-Benz." />
          </>
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
    </div>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      className="flex shrink-0"
    >
      {children}
    </motion.div>
  );
};

const AchievementText = ({ text }: { text: string }) => {
  return (
    <span className="flex items-center justify-center px-4 py-3 md:py-4">
      <span className="whitespace-nowrap text-base font-bold md:text-xl">
        {text}
      </span>
    </span>
  );
};
