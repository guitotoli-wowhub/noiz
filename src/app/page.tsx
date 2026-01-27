"use client";

import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CasesSection from '@/components/CasesSection';
import ClientsSection from '@/components/ClientsSection';
import MethodologySection from '@/components/MethodologySection';
import DifferentialSection from '@/components/DifferentialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');

    const sectionRefs = {
        hero: useRef<HTMLDivElement>(null),
        services: useRef<HTMLDivElement>(null),
        cases: useRef<HTMLDivElement>(null),
        methodology: useRef<HTMLDivElement>(null),
        differential: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null)
    };

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const handleNavigate = (section: string) => {
        const targetRef = sectionRefs[section as keyof typeof sectionRefs];
        if (targetRef?.current) {
            targetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };



    // Track active section based on scroll position
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, [isLoading]);

    if (isLoading) {
        return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
    }

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Header activeSection={activeSection} onNavigate={handleNavigate} />

            <div ref={sectionRefs.hero} id="hero">
                <HeroSection onNavigate={handleNavigate} />
            </div>

            <div ref={sectionRefs.services} id="services">
                <ServicesSection />
            </div>

            <div ref={sectionRefs.cases} id="cases">
                <CasesSection />
            </div>

            <ClientsSection />

            <div ref={sectionRefs.methodology} id="methodology">
                <MethodologySection />
            </div>

            <div ref={sectionRefs.differential} id="differential">
                <DifferentialSection />
            </div>

            <div ref={sectionRefs.contact} id="contact">
                <ContactSection />
            </div>

            <Footer />
        </div>
    );
}
