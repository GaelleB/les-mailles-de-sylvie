'use client';

import { useRef } from 'react';

const HeroRefined = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            id="accueil" 
            className="hero min-h-screen relative overflow-hidden bg-base-100" 
            ref={heroRef}
            aria-label="Section d'accueil - Les Mailles de Sylvie"
        >
            {/* Éléments décoratifs flottants optimisés */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-sm"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
                <div className="absolute bottom-20 right-10 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="hero-content text-center max-w-6xl mx-auto px-4 relative z-10">
                <div className="max-w-4xl fade-in-up">
                {/* Badge d'introduction raffiné */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-6 py-3 badge-adaptive rounded-full shadow-lg">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
                        <span className="text-sm font-medium">Artisane tricoteuse passionnée</span>
                    </div>
                </div>

                {/* Titre principal avec gradient optimisé */}
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                    <span className="block text-gradient-adaptive mb-2">Les Mailles</span>
                    <span className="block text-adaptive text-4xl md:text-5xl lg:text-6xl">de Sylvie</span>
                    </h1>
                </div>

                {/* Sous-titre avec meilleur espacement */}
                <div className="mb-12">
                    <p className="text-lg md:text-xl text-adaptive max-w-2xl mx-auto leading-relaxed">
                        Découvrez un univers chaleureux où chaque fil raconte une histoire. 
                    <br className="hidden md:block" />
                        Créations artisanales uniques, tricotées avec amour et savoir-faire.
                    </p>
                </div>

                {/* Statistiques avec design amélioré */}
                <div className="hero-stats mb-12">
                    <div className="hero-stat group hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-1">20+</div>
                        <div className="text-xs md:text-sm text-slate-400 font-medium">Années d&apos;expérience</div>
                    </div>
                    <div className="hero-stat group hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">100+</div>
                        <div className="text-xs md:text-sm text-slate-400 font-medium">Créations uniques</div>
                    </div>
                    <div className="hero-stat group hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-accent mb-1">∞</div>
                        <div className="text-xs md:text-sm text-slate-400 font-medium">Passion</div>
                    </div>
                </div>

                {/* Boutons d'action avec espacement optimisé */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button 
                        onClick={() => scrollToSection('creations')}
                        className="btn btn-primary btn-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-800"
                        style={{
                            background: 'linear-gradient(135deg, #dda0dd, #87ceeb)',
                            color: 'white'
                        }}
                        aria-label="Découvrir les créations tricot de Sylvie"
                        >
                        <span>Découvrir mes créations</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={() => scrollToSection('a-propos')}
                        className="btn btn-outline btn-lg px-8 py-4 border-2 border-sky-300/50 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-800"
                        aria-label="En savoir plus sur Sylvie et son parcours"
                        >
                        En savoir plus
                    </button>
                </div>

                {/* Indicateur de scroll stylisé */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60" aria-hidden="true">
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-xs text-slate-400 font-medium tracking-wide">DÉFILER</span>
                        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-slate-400/60 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Motif décoratif subtil */}
            <div className="absolute inset-0 opacity-3" aria-hidden="true">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f8a5c2' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
                >
                </div>
            </div>
        </section>
    );
};

export default HeroRefined;