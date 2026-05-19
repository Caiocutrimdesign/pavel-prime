"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Import transparent cropped trailer images
import bauImg from "@/assets/trailer-bau-transparent.png";
import siderImg from "@/assets/trailer-sider-transparent.png";
import semiBauImg from "@/assets/trailer-semi-bau-transparent.png";
import basculanteImg from "@/assets/trailer-basculante-transparent.png";
import graneleiraLsImg from "@/assets/trailer-graneleira-ls-transparent.png";
import graneleiraImg from "@/assets/trailer-graneleira-transparent.png";

type Product = {
  code: string;
  category: string;
  shortText: string;
  title: string;
  description: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    code: "01",
    category: "BAÚ CARGA SECA",
    shortText: "CARGA SECA",
    title: "Baú Carga Seca",
    description: "Maior segurança para sua carga. Ideal para transporte de cargas secas com proteção total contra intempéries.",
    image: bauImg,
  },
  {
    code: "02",
    category: "SIDER",
    shortText: "SIDER",
    title: "Sider",
    description: "Praticidade no carregamento e descarregamento. Abertura lateral que agiliza a logística e otimiza o tempo de operação.",
    image: siderImg,
  },
  {
    code: "03",
    category: "SEMI-REBOQUE BAÚ",
    shortText: "SEMI-BAÚ",
    title: "Semi-Reboque Baú",
    description: "Alta capacidade e robustez para longas distâncias. Ideal para operações que exigem eficiência e segurança no transporte.",
    image: semiBauImg,
  },
  {
    code: "04",
    category: "SEMI-REBOQUE BASCULANTE",
    shortText: "BASCULANTE",
    title: "Semi-Reboque Basculante",
    description: "Desempenho superior para cargas a granel. Estrutura reforçada e basculamento eficiente para mais produtividade.",
    image: basculanteImg,
  },
  {
    code: "05",
    category: "CARROCERIA GRANELEIRA LS",
    shortText: "GRANELEIRA LS",
    title: "Carroceria Graneleira LS",
    description: "Versatilidade para diferentes tipos de carga. Estrutura leve e resistente com excelente custo-benefício.",
    image: graneleiraLsImg,
  },
  {
    code: "06",
    category: "CARROCERIA GRANELEIRA",
    shortText: "GRANELEIRA",
    title: "Carroceria Graneleira",
    description: "Ideal para transporte de cargas secas e a granel. Durabilidade e segurança para o seu dia a dia na estrada.",
    image: graneleiraImg,
  },
];

export function ProductSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const product = PRODUCTS[index];

  // Auto-play interval (every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > index ? 1 : -1);
    setIndex(idx);
  };

  // Animation variants for the trailer
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 240, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring", stiffness: 240, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    }),
  };

  return (
    <section id="produtos" className="relative min-h-[620px] lg:min-h-[750px] bg-[#23214C] overflow-hidden flex flex-col justify-between">
      {/* Upper Navy Background Layer (65%) */}
      <div className="absolute inset-0 bg-[#23214C] pointer-events-none z-0" />
      <div className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-[#19173d] to-[#23214C] pointer-events-none z-0" />

      {/* Bottom Ice White Background Layer (35%) */}
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-[#F5F6F8] border-t border-black/[0.04] pointer-events-none z-0" />

      {/* Top Header & Navigation Tabs */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12 md:px-8 md:pt-14">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Implementos Premium Pavel
          </h2>

          {/* Navigation Category Pills */}
          <div className="w-full flex justify-center">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full no-scrollbar px-4 scroll-smooth">
              {PRODUCTS.map((p, idx) => (
                <button
                  key={p.code}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                    idx === index
                      ? "bg-[#8F3D32] border-[#8F3D32] text-white shadow-lg shadow-[#8F3D32]/25 scale-105"
                      : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  {p.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Interactive Section: Huge text & Trailer Image */}
      <div className="relative flex-grow flex items-center justify-center min-h-[220px] lg:min-h-[320px] w-full z-10 overflow-visible">
        {/* Huge Semi-Transparent background text (Moved higher to remain clearly visible above trailer) */}
        <div className="absolute inset-x-0 top-[28%] -translate-y-1/2 flex items-center justify-center select-none pointer-events-none overflow-hidden h-[120px] md:h-[220px] z-0">
          <AnimatePresence mode="wait">
            <motion.h3
              key={product.shortText}
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="font-display font-black text-[12vw] leading-none uppercase text-white/[0.08] tracking-widest text-center whitespace-nowrap"
            >
              {product.shortText}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Dynamic Trailer Image Sitting on the Division line */}
        <div className="absolute bottom-[35%] translate-y-[18px] md:translate-y-[24px] lg:translate-y-[28px] left-1/2 -translate-x-1/2 w-full max-w-[300px] sm:max-w-[440px] md:max-w-[580px] lg:max-w-[700px] aspect-[16/7] z-10 flex items-center justify-center overflow-visible">
          {/* Subtle tire drop-shadow */}
          <div className="absolute w-[80%] h-[10px] bg-black/20 blur-md rounded-[100%] bottom-0 left-[10%] select-none pointer-events-none" />
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={product.code}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.15)] select-none pointer-events-none"
              loading="eager"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Content Area (Ice White Background - Pushed closer to the trailer) */}
      <div className="relative z-10 w-full bg-transparent pt-4 pb-10 md:pb-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left: Indicator & Title */}
            <div className="lg:col-span-4 flex items-center">
              <div className="flex flex-col">
                <span className="font-display text-[9px] font-black tracking-widest text-[#8F3D32]/80 uppercase mb-0.5">
                  Modelo {product.code}
                </span>
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={product.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-xl md:text-2xl font-black uppercase text-[#23214C] tracking-wide"
                  >
                    {product.title}
                  </motion.h4>
                </AnimatePresence>
              </div>
            </div>

            {/* Center: Description */}
            <div className="lg:col-span-5 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={product.description}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold"
                >
                  {product.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Right: Action Buttons & Navigation Arrows */}
            <div className="lg:col-span-3 flex flex-row items-center justify-between lg:justify-end gap-5 w-full">
              {/* Proposal CTA Button */}
              <Link
                to="/contato"
                className="group relative inline-flex items-center gap-2 bg-[#23214C] hover:bg-[#8F3D32] text-white px-5 h-11 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-md hover:shadow-lg shadow-[#23214C]/10 hover:shadow-[#8F3D32]/25"
              >
                Orçamento
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>

              {/* Slider Circular Navigation Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Anterior"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-[#23214C]/15 text-[#23214C] hover:bg-[#23214C]/5 hover:border-[#23214C]/40 transition-all duration-300 cursor-pointer"
                >
                  <ArrowLeft className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próximo"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-[#23214C]/15 text-[#23214C] hover:bg-[#23214C]/5 hover:border-[#23214C]/40 transition-all duration-300 cursor-pointer"
                >
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
