'use client';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-br from-base-300 to-base-200 text-base-content">
            {/* Section principale du footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Colonne 1: À propos */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gradient-pastel mb-4">
                            Les Mailles de Sylvie
                        </h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                            Artisane tricoteuse passionnée depuis plus de 20 ans, 
                            je crée des pièces uniques avec amour et savoir-faire traditionnel.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-base-content/60">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span>Créations 100% artisanales</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-base-content/60">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                            <span>Matières naturelles et qualité</span>
                        </div>
                    </div>

                    {/* Colonne 2: Navigation */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-base-content">Navigation</h4>
                        <nav className="space-y-2">
                            {[
                                { name: 'Accueil', id: 'accueil' },
                                { name: 'À propos', id: 'a-propos' },
                                { name: 'Créations', id: 'creations' },
                                { name: 'Galerie', id: 'galerie' },
                                { name: 'Contact', id: 'contact' }
                            ].map((link, index) => (
                                <button
                                key={index}
                                onClick={() => scrollToSection(link.id)}
                                className="block text-sm text-base-content/70 hover:text-primary transition-colors duration-300"
                                >
                                {link.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Colonne 3: Services */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-base-content">Mes services</h4>
                        <div className="space-y-2 text-sm text-base-content/70">
                            <div className="flex items-center gap-2">
                                <span className="text-primary">•</span>
                                <span>Pulls et gilets sur mesure</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">•</span>
                                <span>Écharpes et châles</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-accent">•</span>
                                <span>Couvertures et plaids</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-primary">•</span>
                                <span>Accessoires tricot</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">•</span>
                                <span>Réparations et retouches</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-accent">•</span>
                                <span>Cours et ateliers</span>
                            </div>
                        </div>
                    </div>

                    {/* Colonne 4: Contact & Newsletter */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-base-content">Restons en contact</h4>
                        
                        {/* Informations de contact */}
                        <div className="space-y-2 text-sm text-base-content/70">
                            <div className="flex items-center gap-2">
                                <span className="text-primary">📧</span>
                                <span>sylvie@lesmaillesdesylvie.fr</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">📱</span>
                                <span>+33 6 12 34 56 78</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-accent">📍</span>
                                <span>Champagne-Ardenne, France</span>
                            </div>
                        </div>

                        {/* Mini newsletter */}
                        <div className="space-y-3">
                            <p className="text-sm text-base-content/70">
                                Suivez mes créations et astuces tricot :
                            </p>
                            <div className="flex gap-2">
                                <input
                                type="email"
                                placeholder="Votre email"
                                className="input input-sm input-bordered flex-1 text-xs"
                                />
                                <button className="btn btn-sm btn-primary">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-xs text-base-content/50">
                                Promis, pas de spam ! Juste mes dernières créations 🧶
                            </p>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="flex gap-2">
                            <button className="btn btn-circle btn-sm btn-ghost hover:btn-primary transition-all duration-300 group">
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </button>
                            <button className="btn btn-circle btn-sm btn-ghost hover:btn-secondary transition-all duration-300 group">
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </button>
                            <button className="btn btn-circle btn-sm btn-ghost hover:btn-accent transition-all duration-300 group">
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barre de copyright */}
            <div className="border-t border-base-content/10">
                <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-base-content/60">
                    © {currentYear} Les Mailles de Sylvie. 
                    <span className="hidden sm:inline"> Tous droits réservés.</span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                    <div className="text-base-content/50">
                        Site créé avec ❤️ par{' '}
                        <span className="text-primary font-medium">GB WebAssist</span>
                    </div>
                    
                    <button
                        onClick={scrollToTop}
                        className="btn btn-circle btn-sm btn-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
                        aria-label="Retour en haut"
                    >
                        <svg 
                        className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
        </footer>
    );
};

export default Footer;