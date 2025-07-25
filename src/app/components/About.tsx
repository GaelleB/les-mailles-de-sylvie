'use client';

const About = () => {
    const skills = [
        { name: 'Tricot traditionnel', level: 95, color: 'primary' },
        { name: 'Créations modernes', level: 90, color: 'secondary' },
        { name: 'Réparations', level: 85, color: 'accent' },
        { name: 'Conseils techniques', level: 92, color: 'primary' }
    ];

    const values = [
        {
            icon: '🧶',
            title: 'Artisanat authentique',
            description: 'Chaque pièce est créée à la main avec des techniques traditionnelles transmises de génération en génération.'
        },
        {
            icon: '💝',
            title: 'Fait avec amour',
            description: 'Derrière chaque création se cache une attention particulière et une passion sincère pour l\'art du tricot.'
        },
        {
            icon: '♻️',
            title: 'Démarche éco-responsable',
            description: 'Utilisation de laines naturelles et de qualité, privilégiant les circuits courts et les matières durables.'
        },
        {
            icon: '⭐',
            title: 'Pièces uniques',
            description: 'Chaque création est unique, personnalisée selon vos envies et adaptée à votre style de vie.'
        }
    ];

    return (
        <section id="a-propos" className="py-20 bg-gradient-to-br from-base-100 to-base-200">
            <div className="container mx-auto px-4">
                {/* En-tête de section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <span className="text-primary">👋</span>
                        <span className="text-sm font-medium text-primary">À propos de moi</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-pastel">
                        Une passion transmise
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Découvrez l&apos;histoire derrière Les Mailles de Sylvie et la passion qui anime chaque création.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Colonne gauche - Photo et présentation */}
                    <div className="space-y-6">
                        <div className="card card-pastel shadow-pastel">
                            <div className="card-body p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="avatar placeholder">
                                        <div className="bg-primary text-primary-content rounded-full w-16 h-16">
                                        <span className="text-2xl">S</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-base-content">Sylvie</h3>
                                        <p className="text-primary font-medium">Artisane tricoteuse</p>
                                    </div>
                                </div>
                                
                                <div className="prose prose-lg max-w-none text-base-content/80">
                                    <p className="mb-4">
                                        Bonjour ! Je suis Sylvie, passionnée de tricot depuis plus de 20 ans. 
                                        Ce qui a commencé comme un loisir s&apos;est transformé en une véritable vocation.
                                    </p>
                                    <p className="mb-4">
                                        J&apos;ai appris les bases auprès de ma grand-mère, mais j&apos;ai su moderniser 
                                        ces techniques ancestrales pour créer des pièces contemporaines qui 
                                        allient tradition et modernité.
                                    </p>
                                    <p>
                                        Chaque projet est unique et raconte une histoire. Mon objectif est de 
                                        créer des pièces durables qui vous accompagneront au fil des saisons.
                                    </p>
                                </div>

                                <div className="flex gap-2 mt-6">
                                    <div className="badge badge-primary badge-outline">20+ ans d&apos;expérience</div>
                                    <div className="badge badge-secondary badge-outline">Techniques traditionnelles</div>
                                    <div className="badge badge-accent badge-outline">Créations modernes</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite - Compétences */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-base-content mb-6">Mes spécialités</h3>
                        
                        {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-base-content font-medium">{skill.name}</span>
                                <span className="text-sm text-base-content/60">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-base-300 rounded-full h-2.5">
                                <div 
                                    className={`bg-${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                        ))}

                        <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">🏆</span>
                                <h4 className="text-lg font-bold text-base-content">Reconnaissance</h4>
                            </div>
                            <p className="text-base-content/70">
                                Mes créations ont été reconnues dans plusieurs expositions locales 
                                et j&apos;ai eu l&apos;honneur de transmettre mon savoir-faire lors d&apos;ateliers 
                                communautaires.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Valeurs */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-base-content">
                        Mes valeurs
                    </h3>
                
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                        <div 
                            key={index} 
                            className="card card-pastel shadow-pastel hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            <div className="card-body items-center text-center p-6">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h4 className="card-title text-lg text-base-content mb-2">
                                {value.title}
                            </h4>
                            <p className="text-sm text-base-content/70 leading-relaxed">
                                {value.description}
                            </p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;