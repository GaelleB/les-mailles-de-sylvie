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
            className="hero min-h-screen relative overflow-hidden bg-slate-600" 
            ref={heroRef}
            aria-label="Section d'accueil - Les Mailles de Sylvie"
        >
            <div className="hero-content text-center max-w-6xl mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    {/* Titre principal simplifié */}
                    <div className="mb-16 fade-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="block text-gradient-adaptive mb-8">Les Mailles de Sylvie</span>
                        </h1>
                    </div>

                    {/* Message personnel et chaleureux */}
                    <div className="mb-8 md:mb-16 fade-in-up" style={{animationDelay: '0.3s'}}>
                        <p className="text-lg md:text-xl lg:text-2xl text-adaptive max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
                            Bienvenue dans mon univers de tricot ! 
                            <br />
                            <span className="text-primary font-medium">55 ans de passion</span> pour créer des pièces uniques 
                            <br className="hidden md:block" />
                            avec <span className="text-accent font-medium">amour</span> et <span className="text-secondary font-medium">savoir-faire</span>.
                        </p>
                        <p className="text-base md:text-lg text-adaptive/80 italic px-4">
                            Mes créations ne sont pas à vendre, elles sont le reflet de ma passion personnelle.
                        </p>
                    </div>

                    {/* Boutons simplifiés */}
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center fade-in-up absolute -bottom-20 sm:-bottom-6 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-full px-4" style={{animationDelay: '0.5s'}}>
                        <button 
                            onClick={() => scrollToSection('a-propos')}
                            className="btn btn-primary btn-md md:btn-lg px-6 md:px-10 py-3 md:py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 rounded-full w-full sm:w-auto max-w-xs"
                            style={{
                                background: 'linear-gradient(135deg, #dda0dd, #87ceeb)',
                                color: 'white'
                            }}
                            aria-label="Découvrir l'histoire de Sylvie"
                        >
                            <span className="text-sm md:text-base">Découvrir mon histoire</span>
                            <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        
                        <button 
                            onClick={() => scrollToSection('galerie')}
                            className="btn btn-outline btn-md md:btn-lg px-6 md:px-10 py-3 md:py-4 border-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full w-full sm:w-auto max-w-xs"
                            aria-label="Voir la galerie de créations"
                        >
                            <span className="text-sm md:text-base">Voir mes créations</span>
                        </button>
                    </div>

                    {/* Indicateur de scroll stylisé */}
                    <div className="absolute -bottom-42 md:-bottom-26 left-1/2 transform -translate-x-1/2 opacity-60 fade-in-up" style={{animationDelay: '1s'}} aria-hidden="true">
                        <div className="flex flex-col items-center gap-3 animate-bounce-subtle">
                            <span className="text-xs text-slate-300 font-medium tracking-wide">DÉCOUVRIR</span>
                            <div className="w-6 h-10 border-2 border-slate-300/50 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-slate-300/60 rounded-full mt-2 animate-pulse"></div>
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