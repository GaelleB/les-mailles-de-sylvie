'use client';

const About = () => {
    return (
        <section id="a-propos" className="py-20 bg-slate-600">
            <div className="container mx-auto px-4">
                {/* Description principale stylée avec design moderne */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Éléments décoratifs */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" aria-hidden="true"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl" aria-hidden="true"></div>
                        
                        <div className="card bg-gradient-to-br from-base-200/80 to-base-300/60 backdrop-blur-lg shadow-2xl border-0 relative overflow-hidden fade-in-up hover:shadow-3xl hover:scale-102 transition-all duration-500">
                            {/* Motif décoratif subtil */}
                            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8a5c2' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3Ccircle cx='15' cy='15' r='4'/%3E%3Ccircle cx='45' cy='45' r='6'/%3E%3Ccircle cx='45' cy='15' r='3'/%3E%3Ccircle cx='15' cy='45' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                }}></div>
                            </div>
                            
                            <div className="card-body p-10 md:p-16 relative z-10">
                                {/* Header avec avatar stylé */}
                                <div className="flex flex-col items-center text-center mb-12">
                                    <div className="relative mb-6">
                                        <div className="text-8xl md:text-9xl hover:scale-110 transition-transform duration-500">
                                            🧶
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <h3 className="text-4xl md:text-5xl font-bold text-gradient-adaptive mb-3">Sylvie</h3>
                                    </div>
                                </div>
                            
                                {/* Contenu textuel avec mise en forme élégante */}
                                <div className="space-y-8 mb-12">
                                    <div className="relative fade-in-up" style={{animationDelay: '0.6s'}}>
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full" aria-hidden="true"></div>
                                        <p className="text-lg md:text-xl leading-relaxed text-adaptive pl-6">
                                            Bonjour ! Je suis Sylvie, passionnée de tricot et de crochet depuis 55 ans. 
                                            J&apos;ai commencé à tricoter pour mes poupées à l&apos;âge de 7 ans, ma mère m&apos;ayant 
                                            transmis cet art merveilleux qui illumine chacune de mes journées.
                                        </p>
                                    </div>
                                    
                                    <div className="relative fade-in-up" style={{animationDelay: '0.9s'}}>
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full" aria-hidden="true"></div>
                                        <p className="text-lg md:text-xl leading-relaxed text-adaptive pl-6">
                                            Après des années consacrées à ma carrière professionnelle, c&apos;est depuis ma retraite 
                                            en janvier 2022 que je me suis véritablement replongée dans cet univers. Ces 4 dernières 
                                            années ont été une <strong className="text-primary">renaissance créative</strong>, où j&apos;ai pu allier les techniques ancestrales 
                                            apprises de ma mère avec des créations contemporaines modernes.
                                        </p>
                                    </div>
                                    
                                    <div className="relative fade-in-up" style={{animationDelay: '1.2s'}}>
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent to-transparent rounded-full" aria-hidden="true"></div>
                                        <p className="text-lg md:text-xl leading-relaxed text-adaptive pl-6">
                                            Je crée des pièces durables et uniques par <strong className="text-secondary">pure passion</strong>. Chaque création 
                                            est réalisée avec une attention particulière et tout l&apos;amour que je porte 
                                            à cet art merveilleux qu&apos;est le tricot. Ces créations ne sont pas à vendre, 
                                            elles sont le <em className="text-accent font-medium">reflet de ma passion personnelle</em>.
                                        </p>
                                    </div>
                                </div>

                                {/* Badges stylés avec animations */}
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300" aria-hidden="true"></div>
                                        <div className="relative badge bg-gradient-to-r from-primary to-primary/80 text-primary-content border-0 badge-lg px-6 py-4 hover:scale-105 transition-transform duration-300">
                                            <span className="font-bold">4 ans de retraite créative</span>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300" aria-hidden="true"></div>
                                        <div className="relative badge bg-gradient-to-r from-secondary to-secondary/80 text-secondary-content border-0 badge-lg px-6 py-4 hover:scale-105 transition-transform duration-300">
                                            <span className="font-bold">Créations passion</span>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300" aria-hidden="true"></div>
                                        <div className="relative badge bg-gradient-to-r from-accent to-accent/80 text-accent-content border-0 badge-lg px-6 py-4 hover:scale-105 transition-transform duration-300">
                                            <span className="font-bold">Fait avec amour</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Citation inspirante */}
                <div className="text-center mt-16">
                    <div className="max-w-2xl mx-auto">
                        <blockquote className="text-xl md:text-2xl font-light italic text-adaptive mb-4">
                            &ldquo;Chaque maille tissée avec passion devient un fil conducteur 
                            vers le bonheur de celui qui la portera.&rdquo;
                        </blockquote>
                        <cite className="text-primary font-medium">- Sylvie</cite>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;