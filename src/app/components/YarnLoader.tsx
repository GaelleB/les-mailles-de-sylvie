'use client';

interface YarnLoaderProps {
    isLoading: boolean;
}

const YarnLoader = ({ isLoading }: YarnLoaderProps) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
            {/* Fond avec motifs subtils */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10 text-center">
                {/* Logo avec effet de machine à écrire */}
                <div className="mb-16">
                    <h1 className="text-6xl font-serif font-bold mb-4">
                        <span className="typewriter bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Les Mailles
                        </span>
                    </h1>
                    <p className="text-2xl text-gray-600 font-light tracking-wide subtitle-appear">
                        de Sylvie
                    </p>
                </div>

                {/* Animation créative de pelote qui se transforme */}
                <div className="relative w-72 h-48 mx-auto mb-12">
                    {/* Pelote principale avec transformation morphique */}
                    <div className="yarn-ball-morph absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-36 h-36 relative">
                        {/* Corps de la pelote avec gradients dynamiques */}
                        <div className="w-full h-full rounded-full relative overflow-hidden ball-gradient shadow-2xl">
                            {/* Texture de laine avec effet 3D plus dense */}
                            <div className="absolute inset-0 yarn-texture-3d">
                            <div className="strand strand-1"></div>
                            <div className="strand strand-2"></div>
                            <div className="strand strand-3"></div>
                            <div className="strand strand-4"></div>
                            <div className="strand strand-5"></div>
                            <div className="strand strand-6"></div>
                            <div className="strand strand-7"></div>
                            <div className="strand strand-8"></div>
                            <div className="strand strand-9"></div>
                            <div className="strand strand-10"></div>
                            </div>
                            
                            {/* Reflets lumineux améliorés */}
                            <div className="absolute top-6 left-8 w-14 h-14 bg-white/50 rounded-full blur-lg highlight-1"></div>
                            <div className="absolute top-10 right-6 w-8 h-8 bg-white/35 rounded-full blur-md highlight-2"></div>
                            <div className="absolute bottom-8 left-6 w-6 h-6 bg-white/25 rounded-full blur-sm highlight-3"></div>
                        </div>
                        </div>
                    </div>

                    {/* Fils qui se déroulent avec physique réaliste */}
                    <svg width="288" height="192" className="absolute inset-0 overflow-visible">
                        <defs>
                        <linearGradient id="yarnGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="50%" stopColor="#f472b6" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        </defs>
                        
                        {/* Fil principal serpentin */}
                        <path
                        d="M 144 96 Q 180 60 220 90 Q 260 120 240 160 Q 220 200 180 180 Q 140 160 120 130 Q 100 100 140 80 Q 180 60 144 96"
                        stroke="url(#yarnGradient1)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        className="yarn-flow-1"
                        filter="url(#glow)"
                        />
                        
                        {/* Fil secondaire qui danse */}
                        <path
                        d="M 144 96 Q 100 70 60 100 Q 20 130 40 170 Q 60 210 100 190 Q 140 170 160 140 Q 180 110 144 96"
                        stroke="#f472b6"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        className="yarn-flow-2"
                        filter="url(#glow)"
                        />

                        {/* Petits fils qui s'échappent */}
                        <path d="M 144 96 Q 150 80 160 70" stroke="#ec4899" strokeWidth="2" fill="none" strokeLinecap="round" className="yarn-escape-1"/>
                        <path d="M 144 96 Q 130 85 115 75" stroke="#f472b6" strokeWidth="2" fill="none" strokeLinecap="round" className="yarn-escape-2"/>
                        <path d="M 144 96 Q 155 110 165 125" stroke="#a855f7" strokeWidth="2" fill="none" strokeLinecap="round" className="yarn-escape-3"/>
                    </svg>

                    {/* Aiguilles à tricoter sophistiquées */}
                    <div className="needles-container">
                        <div className="needle needle-left">
                            <div className="needle-body"></div>
                            <div className="needle-tip"></div>
                            <div className="needle-handle"></div>
                        </div>
                        <div className="needle needle-right">
                            <div className="needle-body"></div>
                            <div className="needle-tip"></div>
                            <div className="needle-handle"></div>
                        </div>
                    </div>

                    {/* Particules magiques */}
                    <div className="magic-particles">
                        <div className="particle p-1"></div>
                        <div className="particle p-2"></div>
                        <div className="particle p-3"></div>
                        <div className="particle p-4"></div>
                        <div className="particle p-5"></div>
                        <div className="particle p-6"></div>
                    </div>
                </div>

                {/* Message élégant avec compteur */}
                <div className="loading-message">
                    <div className="text-2xl text-gray-700 font-light mb-4 message-slide">
                        <span className="text-gradient">Création</span> en cours
                    </div>
                    <div className="progress-container mb-6">
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                    </div>
                    <p className="text-lg text-gray-500 italic opacity-fade">
                        Tissage artisanal de vos rêves...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default YarnLoader;