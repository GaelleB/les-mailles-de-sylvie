'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animation d'entrée avec GSAP (pour plus tard)
        if (heroRef.current) {
        // Préparation pour les animations GSAP
        }
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="accueil" className="hero min-h-screen relative overflow-hidden" ref={heroRef}>
        {/* Éléments décoratifs flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-sm"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="hero-content text-center max-w-6xl mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
            {/* Badge d'introduction */}
            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-pastel">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-base-content/80">Artisane tricoteuse passionnée</span>
                </div>
            </div>

            {/* Titre principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-gradient-pastel">Les Mailles</span>
                <span className="block text-base-content">de Sylvie</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Découvrez un univers chaleureux où chaque fil raconte une histoire. 
                Créations artisanales uniques, tricotées avec amour et savoir-faire.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-md mx-auto">
                <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">20+</div>
                <div className="text-xs md:text-sm text-base-content/60">Années d&apos;expérience</div>
                </div>
                <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">100+</div>
                <div className="text-xs md:text-sm text-base-content/60">Créations uniques</div>
                </div>
                <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">∞</div>
                <div className="text-xs md:text-sm text-base-content/60">Passion</div>
                </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                onClick={() => scrollToSection('creations')}
                className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                <span>Découvrir mes créations</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
                
                <button 
                onClick={() => scrollToSection('a-propos')}
                className="btn btn-outline btn-lg hover:btn-secondary transition-all duration-300"
                >
                En savoir plus
                </button>
            </div>

            {/* Indicateur de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs text-base-content/50">Défiler</span>
                <svg className="w-5 h-5 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                </div>
            </div>
            </div>
        </div>

        {/* Motif décoratif en arrière-plan */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8a5c2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
        </div>
        </section>
    );
};

export default Hero;