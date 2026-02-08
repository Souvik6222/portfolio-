"use client";
import { motion } from "motion/react";
import BackgroundAnimation from "@/components/ui/background-gradient";
import { useTheme } from "next-themes";

export const IntroSplash = () => {
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      className="relative top-0 z-20 size-full snap-start overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      <BackgroundAnimation
        color={resolvedTheme === "light" ? "blue" : "ember"}
      />


      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <h1 className="relative">
          {/* Glow effect */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-6xl font-black uppercase tracking-[0.15em] blur-2xl sm:text-7xl md:text-9xl"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            SOUVIK
          </motion.span>

          {/* Main text with gradient */}
          <span className="relative bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-6xl font-black uppercase tracking-[0.15em] text-transparent sm:text-7xl md:text-9xl">
            {"SOUVIK".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.08,
                  ease: "easeOut",
                }}
                className="inline-block"
                style={{
                  textShadow: "0 0 30px rgba(251, 146, 60, 0.5), 0 0 60px rgba(251, 146, 60, 0.3)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>
      </motion.div>


      <motion.div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-2 font-semibold text-white @max-md:hidden">
        Scroll down
        <motion.div className="flex h-10 w-7 justify-center rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-2xl">
          <motion.div
            className="mx-auto w-1 rounded-xl bg-white/80 backdrop-blur-2xl @max-sm:w-0.5"
            animate={{
              y: [4, 12, 4],
              height: [4, 8, 4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};