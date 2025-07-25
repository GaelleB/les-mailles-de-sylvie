'use client';

import { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [filter, setFilter] = useState('all');

    const images = [
        {
            id: 1,
            category: 'pulls',
            title: 'Pull torsadé beige',
            description: 'Pull en laine naturelle avec motifs torsadés',
            placeholder: '🧥',
            gradient: 'from-amber-200 to-orange-200'
        },
        {
            id: 2,
            category: 'echarpes',
            title: 'Écharpe multicolore',
            description: 'Écharpe aux couleurs vives et motifs géométriques',
            placeholder: '🧣',
            gradient: 'from-pink-200 to-purple-200'
        },
        {
            id: 3,
            category: 'couvertures',
            title: 'Plaid scandinave',
            description: 'Grand plaid aux motifs nordiques',
            placeholder: '🛋️',
            gradient: 'from-blue-200 to-cyan-200'
        },
        {
            id: 4,
            category: 'accessoires',
            title: 'Ensemble bonnet-gants',
            description: 'Coordonnés parfaits pour l\'hiver',
            placeholder: '🧤',
            gradient: 'from-green-200 to-teal-200'
        },
        {
            id: 5,
            category: 'pulls',
            title: 'Cardigan long',
            description: 'Gilet long style bohème',
            placeholder: '👘',
            gradient: 'from-rose-200 to-pink-200'
        },
        {
            id: 6,
            category: 'couvertures',
            title: 'Couverture bébé',
            description: 'Douce couverture pour nouveau-né',
            placeholder: '👶',
            gradient: 'from-yellow-200 to-amber-200'
        },
        {
            id: 7,
            category: 'echarpes',
            title: 'Châle dentelle',
            description: 'Châle fin avec motifs en dentelle',
            placeholder: '🌸',
            gradient: 'from-violet-200 to-purple-200'
        },
        {
            id: 8,
            category: 'accessoires',
            title: 'Chaussons douillets',
            description: 'Chaussons chauds pour la maison',
            placeholder: '🧦',
            gradient: 'from-indigo-200 to-blue-200'
        },
        {
            id: 9,
            category: 'pulls',
            title: 'Pull jacquard',
            description: 'Motifs traditionnels colorés',
            placeholder: '🎨',
            gradient: 'from-red-200 to-orange-200'
        }
    ];

    const categories = [
        { id: 'all', name: 'Tout voir', icon: '🌟' },
        { id: 'pulls', name: 'Pulls', icon: '👕' },
        { id: 'echarpes', name: 'Écharpes', icon: '🧣' },
        { id: 'couvertures', name: 'Couvertures', icon: '🛋️' },
        { id: 'accessoires', name: 'Accessoires', icon: '🧤' }
    ];

    const filteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.category === filter);

    return (
        <section id="galerie" className="py-20 bg-gradient-to-br from-base-100 to-base-200">
            <div className="container mx-auto px-4">
                {/* En-tête de section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
                        <span className="text-accent">📸</span>
                        <span className="text-sm font-medium text-accent">Galerie</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-pastel">
                        Mes réalisations
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Une sélection de mes créations les plus récentes. Chaque pièce raconte une histoire unique.
                    </p>
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        className={`btn ${
                            filter === category.id
                            ? 'btn-accent shadow-lg'
                            : 'btn-outline btn-accent hover:btn-accent'
                        } transition-all duration-300`}
                        >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                        </button>
                    ))}
                </div>

                {/* Grille de la galerie */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredImages.map((image, index) => (
                        <div 
                            key={image.id}
                            className="group cursor-pointer"
                            onClick={() => setSelectedImage(image.id)}
                            style={{ animationDelay: `${index * 100}ms` }}
                            >
                            <div className="card card-pastel shadow-pastel hover:shadow-xl transition-all duration-500 overflow-hidden">
                                {/* Image placeholder avec gradient */}
                                <figure className={`relative h-64 bg-gradient-to-br ${image.gradient} overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-8xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                                        {image.placeholder}
                                        </span>
                                    </div>
                                    
                                    {/* Overlay au hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="btn btn-circle btn-primary shadow-lg">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </button>
                                        </div>
                                    </div>

                                    {/* Badge catégorie */}
                                    <div className="absolute top-3 left-3">
                                        <div className="badge badge-primary badge-sm opacity-80">
                                        {categories.find(cat => cat.id === image.category)?.name}
                                        </div>
                                    </div>
                                </figure>

                                <div className="card-body p-4">
                                    <h3 className="card-title text-base group-hover:text-primary transition-colors">
                                        {image.title}
                                    </h3>
                                    <p className="text-sm text-base-content/70">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal pour image agrandie */}
                {selectedImage && (
                    <div className="modal modal-open">
                        <div className="modal-box max-w-4xl">
                        <button 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        
                        {(() => {
                            const image = images.find(img => img.id === selectedImage);
                            return image ? (
                            <div>
                                <figure className={`w-full h-80 bg-gradient-to-br ${image.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                                <span className="text-9xl opacity-30">{image.placeholder}</span>
                                </figure>
                                <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                                <p className="text-base-content/70">{image.description}</p>
                            </div>
                            ) : null;
                        })()}
                        </div>
                        <div className="modal-backdrop" onClick={() => setSelectedImage(null)}></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;