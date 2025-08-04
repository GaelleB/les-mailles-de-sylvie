'use client';

import { useState } from 'react';

const Creations = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tout', icon: '🧶' },
        { id: 'pulls', name: 'Pulls', icon: '👕' },
        { id: 'echarpes', name: 'Écharpes', icon: '🧣' },
        { id: 'couvertures', name: 'Couvertures', icon: '🛋️' },
        { id: 'accessoires', name: 'Accessoires', icon: '🧤' }
    ];

    const creations = [
        {
            id: 1,
            title: 'Pull irlandais traditionnel',
            category: 'pulls',
            description: 'Pull en laine mérinos avec motifs câbles traditionnels',
            features: ['Laine mérinos', 'Motifs câbles', 'Coupe classique'],
            time: '3-4 semaines',
            difficulty: 'Expert',
            image: '/api/placeholder/400/300',
            colors: ['primary', 'secondary']
        },
        {
            id: 2,
            title: 'Écharpe en alpaga',
            category: 'echarpes',
            description: 'Écharpe douce et chaude en fibres d\'alpaga',
            features: ['100% alpaga', 'Ultra douce', 'Coloris naturels'],
            time: '1-2 semaines',
            difficulty: 'Débutant',
            image: '/api/placeholder/400/300',
            colors: ['accent', 'primary']
        },
        {
            id: 3,
            title: 'Couverture bébé',
            category: 'couvertures',
            description: 'Couverture délicate pour bébé en coton bio',
            features: ['Coton bio', 'Hypoallergénique', 'Lavable machine'],
            time: '2-3 semaines',
            difficulty: 'Intermédiaire',
            image: '/api/placeholder/400/300',
            colors: ['secondary', 'accent']
        },
        {
            id: 4,
            title: 'Bonnet pompon',
            category: 'accessoires',
            description: 'Bonnet chaud avec pompon assorti',
            features: ['Laine chaude', 'Pompon amovible', 'Coloris variés'],
            time: '3-5 jours',
            difficulty: 'Débutant',
            image: '/api/placeholder/400/300',
            colors: ['primary', 'accent']
        },
        {
            id: 5,
            title: 'Gilet long moderne',
            category: 'pulls',
            description: 'Gilet long style cardigan, parfait pour mi-saison',
            features: ['Coupe moderne', 'Poches plaquées', 'Boutons bois'],
            time: '4-5 semaines',
            difficulty: 'Expert',
            image: '/api/placeholder/400/300',
            colors: ['secondary', 'primary']
        },
        {
            id: 6,
            title: 'Plaid scandinave',
            category: 'couvertures',
            description: 'Grand plaid aux motifs géométriques nordiques',
            features: ['Motifs nordiques', 'Grande taille', 'Laine douce'],
            time: '5-6 semaines',
            difficulty: 'Expert',
            image: '/api/placeholder/400/300',
            colors: ['accent', 'secondary']
        }
    ];

    const filteredCreations = activeCategory === 'all' 
        ? creations 
        : creations.filter(creation => creation.category === activeCategory);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
        case 'Débutant': return 'success';
        case 'Intermédiaire': return 'warning';
        case 'Expert': return 'error';
        default: return 'neutral';
        }
    };

    return (
        <section id="creations" className="py-20 bg-slate-700">
            <div className="container mx-auto px-4">
                {/* En-tête de section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
                        <span className="text-secondary">✨</span>
                        <span className="text-sm font-medium text-secondary">Mes créations</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-dark">
                        Un savoir-faire unique
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Découvrez une sélection de mes créations les plus représentatives, 
                        chacune reflétant mon attention au détail et ma passion pour l&apos;artisanat.
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`btn ${
                            activeCategory === category.id
                            ? 'btn-primary shadow-lg'
                            : 'btn-outline btn-primary hover:btn-primary'
                        } transition-all duration-300`}
                        >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                        </button>
                    ))}
                </div>

                {/* Grille des créations */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredCreations.map((creation, index) => (
                        <div 
                            key={creation.id}
                            className="card card-pastel shadow-pastel hover:shadow-xl transition-all duration-500 group cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                            >
                            {/* Image placeholder */}
                            <figure className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-48">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-6xl opacity-30">
                                        {categories.find(cat => cat.id === creation.category)?.icon}
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <div className={`badge badge-${getDifficultyColor(creation.difficulty)} badge-sm`}>
                                        {creation.difficulty}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                            </figure>

                            <div className="card-body p-6">
                                <h3 className="card-title text-lg text-base-content group-hover:text-primary transition-colors">
                                {creation.title}
                                </h3>
                                
                                <p className="text-sm text-base-content/70 mb-4">
                                {creation.description}
                                </p>

                                {/* Caractéristiques */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {creation.features.map((feature, idx) => (
                                        <span 
                                        key={idx}
                                        className="badge badge-ghost badge-sm text-xs"
                                        >
                                        {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Informations pratiques */}
                                <div className="flex justify-between items-center text-xs text-base-content/60 mb-4">
                                    <div className="flex items-center gap-1">
                                        <span>⏱️</span>
                                        <span>{creation.time}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        {creation.colors.map((color, idx) => (
                                        <div 
                                            key={idx}
                                            className={`w-3 h-3 rounded-full bg-${color}`}
                                        ></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary btn-sm group-hover:btn-secondary transition-all duration-300">
                                        Voir détails
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section processus créatif */}
                <div className="card card-pastel shadow-pastel">
                    <div className="card-body p-8">
                        <h3 className="text-2xl font-bold text-center text-base-content mb-8">
                        Mon processus créatif
                        </h3>
                        
                        <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                            step: '01',
                            title: 'Conception',
                            description: 'Étude de votre demande et création du design sur mesure',
                            icon: '✏️'
                            },
                            {
                            step: '02',
                            title: 'Sélection',
                            description: 'Choix minutieux des matières premières de qualité',
                            icon: '🧶'
                            },
                            {
                            step: '03',
                            title: 'Création',
                            description: 'Tricotage artisanal avec attention aux moindres détails',
                            icon: '✋'
                            },
                            {
                            step: '04',
                            title: 'Finitions',
                            description: 'Assemblage et finitions soignées pour un résultat parfait',
                            icon: '✨'
                            }
                        ].map((phase, index) => (
                            <div key={index} className="text-center group">
                            <div className="mb-4">
                                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:bg-primary/20 transition-colors">
                                {phase.icon}
                                </div>
                                <div className="text-xs font-bold text-primary/60 tracking-wider">
                                ÉTAPE {phase.step}
                                </div>
                            </div>
                            <h4 className="font-bold text-base-content mb-2">{phase.title}</h4>
                            <p className="text-sm text-base-content/70 leading-relaxed">
                                {phase.description}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creations;