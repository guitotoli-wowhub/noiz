"use client";

"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, TrendingUp, Users, Eye, MessageCircle, Heart, Sparkles, ThumbsUp, Target, Building2, ShoppingBag, Ticket, ChefHat, Utensils } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { caseData } from '@/data/cases';

interface CaseDetailProps {
  caseId: string;
}

export default function CaseDetail({ caseId }: CaseDetailProps) {
  const caseInfo = caseData[caseId as keyof typeof caseData];

  if (!caseInfo) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Case não encontrado</p>
          <Link href="/" className="text-accent-pink hover:underline">
            Voltar para a home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Back Button */}
      <Link
        href="/cases"
        className="fixed top-24 left-8 z-30 glass px-6 py-3 rounded-full flex items-center gap-2 hover:glass-pink transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:text-accent-pink transition-colors" />
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group-hover:text-accent-pink transition-colors"
        >
          voltar
        </motion.span>
      </Link>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl mb-6"
                style={{
                  background: 'linear-gradient(90deg, #FF00FF, #9D00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {caseInfo.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl italic mb-8 text-gray-300"
              >
                {caseInfo.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed text-gray-400"
              >
                {caseInfo.description}
              </motion.p>
            </motion.div>

            {/* Hero Image or Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-pink p-8 rounded-3xl">
                {/* @ts-ignore - heroVideo might not exist on all types yet */}
                {caseInfo.heroVideo ? (
                  <div className="relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden rounded-2xl">
                    <video
                      src={(caseInfo as any).heroVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={caseInfo.heroImage}
                    alt={caseInfo.title}
                    className="w-full h-auto rounded-2xl"
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* Product Image (if available) */}

        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-accent-pink italic">
              {caseInfo.challenge.title}
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              {caseInfo.challenge.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            resultados<span className="text-accent-pink">_</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {caseInfo.metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-pink p-8 rounded-2xl text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-6 text-accent-pink" />
                  <div className="text-4xl md:text-5xl mb-2" style={{
                    background: 'linear-gradient(90deg, #FF00FF, #9D00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {metric.value}
                  </div>
                  <div className="text-2xl mb-3">{metric.label}</div>
                  <p className="text-gray-400">{metric.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-6 text-accent-pink italic"
          >
            {caseInfo.timeline.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-16 text-gray-300 max-w-3xl"
          >
            {caseInfo.timeline.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Timeline Steps */}
            <div className="space-y-8">
              {caseInfo.timeline.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full glass-pink flex items-center justify-center text-xl" style={{
                      background: 'linear-gradient(135deg, #FF00FF, #9D00FF)',
                    }}>
                      {step.number}
                    </div>
                    {index < caseInfo.timeline.steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-accent-pink to-accent-violet mx-auto mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline Images Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] flex items-center justify-center"
            >
              {/* First Image - Left, slightly behind */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 z-10 w-[55%]"
              >
                <div className="glass-pink p-4 rounded-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src={caseInfo.galleryImages[0]}
                    alt="Case visual 1"
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                    style={{ aspectRatio: '9/16' }}
                  />
                </div>
              </motion.div>

              {/* Second Image - Right, in front */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute right-0 z-20 w-[55%]"
              >
                <div className="glass-pink p-4 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src={caseInfo.galleryImages[1]}
                    alt="Case visual 2"
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                    style={{ aspectRatio: '9/16' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-pink p-12 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              quer resultados assim?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Entre em contato e descubra como podemos transformar sua marca com inteligência cultural
            </p>
            <Link

              href="/contato"
              className="px-8 py-4 rounded-full text-lg transition-all duration-300 inline-block"
              style={{
                background: 'linear-gradient(90deg, #FF00FF, #9D00FF)',
              }}
            >
              vamos conversar
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
