'use client';

import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header 
        className={`navbar fixed top-0 z-50 transition-all duration-300 ${
            isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-pastel' 
            : 'bg-transparent'
        }`}
        >
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white/90 backdrop-blur-md rounded-box w-52">
                <li><button onClick={() => scrollToSection('accueil')} className="text-base-content hover:text-primary">Accueil</button></li>
                <li><button onClick={() => scrollToSection('a-propos')} className="text-base-content hover:text-primary">À propos</button></li>
                <li><button onClick={() => scrollToSection('creations')} className="text-base-content hover:text-primary">Créations</button></li>
                <li><button onClick={() => scrollToSection('galerie')} className="text-base-content hover:text-primary">Galerie</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-base-content hover:text-primary">Contact</button></li>
            </ul>
            </div>
            <button 
            onClick={() => scrollToSection('accueil')}
            className="btn btn-ghost text-xl font-bold text-gradient-pastel"
            >
            Les Mailles de Sylvie
            </button>
        </div>
        
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">
            <li>
                <button 
                onClick={() => scrollToSection('accueil')} 
                className="btn btn-ghost hover:btn-primary hover:text-primary-content transition-all duration-300"
                >
                Accueil
                </button>
            </li>
            <li>
                <button 
                onClick={() => scrollToSection('a-propos')} 
                className="btn btn-ghost hover:btn-secondary hover:text-secondary-content transition-all duration-300"
                >
                À propos
                </button>
            </li>
            <li>
                <button 
                onClick={() => scrollToSection('creations')} 
                className="btn btn-ghost hover:btn-accent hover:text-accent-content transition-all duration-300"
                >
                Créations
                </button>
            </li>
            <li>
                <button 
                onClick={() => scrollToSection('galerie')} 
                className="btn btn-ghost hover:btn-primary hover:text-primary-content transition-all duration-300"
                >
                Galerie
                </button>
            </li>
            <li>
                <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-ghost hover:btn-secondary hover:text-secondary-content transition-all duration-300"
                >
                Contact
                </button>
            </li>
            </ul>
        </div>
        
        <div className="navbar-end">
            <div className="tooltip tooltip-bottom" data-tip="Suivez mes créations">
            <button className="btn btn-ghost btn-circle hover:btn-primary group transition-all duration-300">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </button>
            </div>
        </div>
        </header>
    );
};

export default Header;