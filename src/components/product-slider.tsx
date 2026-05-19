"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import bau from "@/assets/prod-bau.jpg";
import sider from "@/assets/prod-sider.jpg";
import semi from "@/assets/prod-semi.jpg";
import basc from "@/assets/prod-basculante.jpg";
import aberta from "@/assets/prod-aberta.jpg";
import pecas from "@/assets/prod-pecas.jpg";

type Product = {
  code: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    code: "01",
    category: "Carga Seca",
    title: "Baú Carga Seca",
    description:
      "Estrutura reforçada em aço de alta resistência e vedação premium para logística fracionada de longa distância.",
    image: bau,
  },
  {
    code: "02",
    category: "Lona Lateral",
    title: "Sider Premium",
    description:
      "Sistema de abertura lateral rápida com lona de alta gramatura para máxima agilidade no carregamento.",
    image: sider,
  },
  {
    code: "03",
    category: "Chassi",
    title: "Semirreboque",
    description:
      "Chassi multieixos para cargas pesadas, projetado para a malha rodoviária brasileira mais exigente.",
    image: semi,
  },
  {
    code: "04",
    category: "Mineração",
    title: "Basculante",
    description:
      "Capacidade volumétrica superior para transporte de grãos, minérios e materiais a granel.",
    image: basc,
  },
  {
    code: "05",
    category: "Plataforma",
    title: "Carroceria Aberta",
    description:
      "Versatilidade total para cargas indivisíveis e operações que exigem livre acesso pelo topo.",
    image: aberta,
  },
  {
    code: "06",
    category: "Suporte",
    title: "Peças e Suporte",
    description:
      "Estoque completo de peças genuínas e suporte técnico para frotas Pavel e multimarcas.",
    image: pecas,
  },
];

export function ProductSlider() {
  const [index, setIndex] = useState(0);
  const product = PRODUCTS[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + PRODUCTS.length) % PRODUCTS.length);

  return (
    <section id="produtos" className="relative bg-industrial py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-industrial pointer-events-none" />
      <div className="absolute -top-40 -right-40 size-[480px] rounded-full bg-rust/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">
              Linha 2025
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase mt-3 leading-[0.95] text-balance">
              Implementos<br/>Premium Pavel
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl text-ice tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-12 bg-ice/20" />
            <span className="font-display text-2xl text-steel tabular-nums">
              {String(PRODUCTS.length).padStart(2, "0")}
            </span>
            <div className="ml-4 flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Anterior"
                className="inline-flex size-12 items-center justify-center border border-ice/15 text-ice hover:bg-ice/5 hover:border-ice/30 transition-all"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo"
                className="inline-flex size-12 items-center justify-center border border-rust bg-rust text-ice hover:bg-rust/90 transition-all"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-sm border border-ice/5 bg-gradient-navy shadow-metal">
              <AnimatePresence mode="wait">
                <motion.img
                  key={product.image}
                  src={product.image}
                  alt={product.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.3, 0, 0, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-industrial/70 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 bg-industrial/80 backdrop-blur-md border border-ice/10 text-[10px] font-bold uppercase tracking-[0.2em] text-ice">
                <span className="size-1.5 bg-rust" /> MOD {product.code}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-6 gap-2">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.code}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={p.title}
                  className={`relative aspect-square overflow-hidden border transition-all ${
                    i === index
                      ? "border-rust ring-1 ring-rust/40"
                      : "border-ice/10 opacity-50 hover:opacity-100 hover:border-ice/30"
                  }`}
                >
                  <img src={p.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.code}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.3, 0, 0, 1] }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-steel mb-4">
                  {product.category}
                </p>
                <h3 className="font-display text-4xl md:text-5xl font-black uppercase leading-[0.95] mb-6">
                  {product.title}
                </h3>
                <p className="text-base text-ice/70 leading-relaxed max-w-md mb-10">
                  {product.description}
                </p>
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-3 bg-ice text-industrial px-6 h-12 text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-rust hover:text-ice transition-colors"
                >
                  Solicitar proposta
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
