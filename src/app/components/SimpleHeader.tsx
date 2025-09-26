'use client';

import { useState, useEffect } from 'react';

const SimpleHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setShowMenu(false);
    };

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(8px)' : 'none',
                boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'all 0.3s ease',
                padding: '0 1rem',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            {/* Left section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Hamburger button */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    style={{
                        display: 'block',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        borderRadius: '8px',
                        transition: 'transform 0.2s ease'
                    }}
                    className="lg:hidden"
                >
                    {showMenu ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer' }}>
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ cursor: 'pointer' }}>
                            <path d="M3 12h18M3 6h18M3 18h18"/>
                        </svg>
                    )}
                </button>

                {/* Logo */}
                <button
                    onClick={() => scrollToSection('accueil')}
                    style={{
                        background: 'linear-gradient(135deg, #a8e6cf 0%, #ffd3a5 50%, #f8a5c2 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        border: 'none',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Les Mailles de Sylvie
                </button>
            </div>

            {/* Desktop menu */}
            <nav style={{ display: 'none' }} className="lg:flex">
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {['Accueil', 'À propos', 'Créations', 'Galerie', 'Contact'].map((label, i) => (
                        <button
                            key={label}
                            onClick={() => scrollToSection(['accueil', 'a-propos', 'creations', 'galerie', 'contact'][i])}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '8px 16px',
                                cursor: 'pointer',
                                borderRadius: '8px',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#f3f4f6'}
                            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'transparent'}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Right section - empty for now */}
            <div></div>

            {/* Mobile menu */}
            {showMenu && (
                <>
                    {/* Overlay pour fermer en cliquant en dehors */}
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 59
                        }}
                        onClick={() => setShowMenu(false)}
                        className="lg:hidden"
                    />
                    {/* Menu */}
                    <div
                        style={{
                            position: 'fixed',
                            top: '64px',
                            left: '1rem',
                            width: '200px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #e5e7eb',
                            padding: '1rem',
                            zIndex: 60
                        }}
                        className="lg:hidden"
                    >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                            { label: '🏠 Accueil', id: 'accueil' },
                            { label: '👋 À propos', id: 'a-propos' },
                            { label: '🧶 Créations', id: 'creations' },
                            { label: '🖼️ Galerie', id: 'galerie' },
                            { label: '📧 Contact', id: 'contact' }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                style={{
                                    textAlign: 'left',
                                    padding: '12px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    borderRadius: '6px',
                                    width: '100%',
                                    transition: 'background-color 0.2s',
                                    color: '#1f2937',
                                    fontSize: '1rem',
                                    fontWeight: '500'
                                }}
                                onMouseEnter={(e) => {
                                    const target = e.target as HTMLButtonElement;
                                    target.style.backgroundColor = '#f3f4f6';
                                    target.style.color = '#4338ca';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.target as HTMLButtonElement;
                                    target.style.backgroundColor = 'transparent';
                                    target.style.color = '#1f2937';
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default SimpleHeader;