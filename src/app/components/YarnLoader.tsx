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

      <style jsx>{`
        .typewriter {
          overflow: hidden;
          border-right: 3px solid #ec4899;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 2s steps(11, end), blink-caret 1s step-end infinite;
        }

        .subtitle-appear {
          opacity: 0;
          animation: fadeInUp 1s ease-out 2.5s forwards;
        }

        .yarn-ball-morph {
          animation: ballFloat 4s ease-in-out infinite, ballMorph 6s ease-in-out infinite;
        }

        .ball-gradient {
          background: conic-gradient(from 0deg, #ec4899, #f472b6, #a855f7, #ec4899);
          animation: gradientSpin 8s linear infinite;
        }

        .yarn-texture-3d {
          animation: textureRotate 10s linear infinite;
        }

        .strand {
          position: absolute;
          background: linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
          border-radius: 2px;
          opacity: 0.8;
        }

        .strand-1 { width: 70px; height: 2px; top: 18px; left: 8px; transform: rotate(15deg); animation: strandMove1 3s ease-in-out infinite; }
        .strand-2 { width: 55px; height: 2px; top: 30px; left: 22px; transform: rotate(-20deg); animation: strandMove2 3.2s ease-in-out infinite; }
        .strand-3 { width: 60px; height: 2px; top: 45px; left: 12px; transform: rotate(45deg); animation: strandMove3 2.8s ease-in-out infinite; }
        .strand-4 { width: 48px; height: 2px; top: 58px; left: 28px; transform: rotate(-10deg); animation: strandMove4 3.5s ease-in-out infinite; }
        .strand-5 { width: 65px; height: 2px; top: 72px; left: 4px; transform: rotate(30deg); animation: strandMove5 3.1s ease-in-out infinite; }
        .strand-6 { width: 42px; height: 2px; top: 88px; left: 32px; transform: rotate(-35deg); animation: strandMove6 2.9s ease-in-out infinite; }
        .strand-7 { width: 38px; height: 2px; top: 102px; left: 15px; transform: rotate(60deg); animation: strandMove1 3.3s ease-in-out infinite; }
        .strand-8 { width: 52px; height: 2px; top: 115px; left: 25px; transform: rotate(-45deg); animation: strandMove2 2.7s ease-in-out infinite; }
        .strand-9 { width: 44px; height: 2px; top: 125px; left: 8px; transform: rotate(20deg); animation: strandMove3 3.4s ease-in-out infinite; }
        .strand-10 { width: 36px; height: 2px; top: 135px; left: 30px; transform: rotate(-25deg); animation: strandMove4 2.6s ease-in-out infinite; }

        .highlight-1 { animation: highlightPulse1 2s ease-in-out infinite; }
        .highlight-2 { animation: highlightPulse2 2.5s ease-in-out infinite 0.5s; }
        .highlight-3 { animation: highlightPulse1 2.2s ease-in-out infinite 1s; }

        .yarn-flow-1 {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: yarnFlow1 4s ease-in-out infinite;
        }

        .yarn-flow-2 {
          stroke-dasharray: 350;
          stroke-dashoffset: 350;
          animation: yarnFlow2 3.5s ease-in-out infinite 1s;
        }

        .yarn-escape-1 { animation: escapeYarn1 2s ease-in-out infinite; }
        .yarn-escape-2 { animation: escapeYarn2 2.2s ease-in-out infinite 0.3s; }
        .yarn-escape-3 { animation: escapeYarn3 1.8s ease-in-out infinite 0.6s; }

        .needles-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .needle {
          position: absolute;
          animation: needleWork 2s ease-in-out infinite;
        }

        .needle-left {
          left: -60px;
          top: -2px;
          transform: rotate(-30deg);
        }

        .needle-right {
          right: -60px;
          top: -2px;
          transform: rotate(30deg);
          animation-delay: 1s;
        }

        .needle-body {
          width: 90px;
          height: 5px;
          background: linear-gradient(to right, #d97706, #f59e0b, #fbbf24);
          border-radius: 3px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.3);
          position: relative;
        }

        .needle-tip {
          position: absolute;
          right: -6px;
          top: -1px;
          width: 12px;
          height: 7px;
          background: linear-gradient(to right, #92400e, #78350f);
          border-radius: 0 50% 50% 0;
          box-shadow: 0 2px 3px rgba(0,0,0,0.2);
        }

        .needle-handle {
          position: absolute;
          left: -12px;
          top: -3px;
          width: 12px;
          height: 11px;
          background: linear-gradient(to bottom, #dc2626, #b91c1c);
          border-radius: 50% 0 0 50%;
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.3);
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #fbbf24, #f59e0b);
          border-radius: 50%;
          opacity: 0;
        }

        .p-1 { top: 20%; left: 20%; animation: particleFloat1 3s ease-in-out infinite; }
        .p-2 { top: 30%; right: 15%; animation: particleFloat2 3.2s ease-in-out infinite 0.5s; }
        .p-3 { bottom: 25%; left: 25%; animation: particleFloat3 2.8s ease-in-out infinite 1s; }
        .p-4 { bottom: 35%; right: 20%; animation: particleFloat4 3.5s ease-in-out infinite 1.5s; }
        .p-5 { top: 60%; left: 10%; animation: particleFloat5 3.1s ease-in-out infinite 2s; }
        .p-6 { top: 70%; right: 10%; animation: particleFloat6 2.9s ease-in-out infinite 2.5s; }

        .message-slide {
          animation: slideInUp 1s ease-out 3s both;
        }

        .text-gradient {
          background: linear-gradient(45deg, #ec4899, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .progress-container {
          animation: slideInUp 1s ease-out 3.5s both;
        }

        .progress-bar {
          width: 200px;
          height: 4px;
          background: rgba(236, 72, 153, 0.2);
          border-radius: 2px;
          margin: 0 auto;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ec4899, #f472b6, #a855f7);
          border-radius: 2px;
          animation: progressFill 5s ease-in-out infinite;
        }

        .opacity-fade {
          animation: fadeInUp 1s ease-out 4s both;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #ec4899; }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes ballFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }

        @keyframes ballMorph {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }

        @keyframes gradientSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes textureRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes strandMove1 {
          0%, 100% { opacity: 0.8; transform: rotate(15deg) scaleX(1); }
          50% { opacity: 1; transform: rotate(20deg) scaleX(1.1); }
        }

        @keyframes strandMove2 {
          0%, 100% { opacity: 0.7; transform: rotate(-20deg) scaleX(1); }
          50% { opacity: 1; transform: rotate(-15deg) scaleX(1.05); }
        }

        @keyframes strandMove3 {
          0%, 100% { opacity: 0.9; transform: rotate(45deg) scaleX(1); }
          50% { opacity: 1; transform: rotate(50deg) scaleX(1.08); }
        }

        @keyframes strandMove4 {
          0%, 100% { opacity: 0.6; transform: rotate(-10deg) scaleX(1); }
          50% { opacity: 0.9; transform: rotate(-5deg) scaleX(1.03); }
        }

        @keyframes strandMove5 {
          0%, 100% { opacity: 0.8; transform: rotate(30deg) scaleX(1); }
          50% { opacity: 1; transform: rotate(35deg) scaleX(1.06); }
        }

        @keyframes strandMove6 {
          0%, 100% { opacity: 0.7; transform: rotate(-35deg) scaleX(1); }
          50% { opacity: 0.95; transform: rotate(-30deg) scaleX(1.04); }
        }

        @keyframes highlightPulse1 {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes highlightPulse2 {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes yarnFlow1 {
          0% { stroke-dashoffset: 400; opacity: 0.6; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -400; opacity: 0.6; }
        }

        @keyframes yarnFlow2 {
          0% { stroke-dashoffset: 350; opacity: 0.5; }
          50% { stroke-dashoffset: 0; opacity: 0.9; }
          100% { stroke-dashoffset: -350; opacity: 0.5; }
        }

        @keyframes escapeYarn1 {
          0%, 100% { opacity: 0; stroke-dashoffset: 20; }
          50% { opacity: 1; stroke-dashoffset: 0; }
        }

        @keyframes escapeYarn2 {
          0%, 100% { opacity: 0; stroke-dashoffset: 15; }
          50% { opacity: 0.8; stroke-dashoffset: 0; }
        }

        @keyframes escapeYarn3 {
          0%, 100% { opacity: 0; stroke-dashoffset: 18; }
          50% { opacity: 0.9; stroke-dashoffset: 0; }
        }

        @keyframes needleWork {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(2px) translateY(-1px); }
        }

        @keyframes particleFloat1 {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.5); }
          50% { opacity: 1; transform: translateY(-30px) scale(1.2); }
        }

        @keyframes particleFloat2 {
          0%, 100% { opacity: 0; transform: translateX(0) translateY(0) scale(0.6); }
          50% { opacity: 0.8; transform: translateX(-20px) translateY(-25px) scale(1); }
        }

        @keyframes particleFloat3 {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.7); }
          50% { opacity: 0.9; transform: translateY(25px) scale(1.1); }
        }

        @keyframes particleFloat4 {
          0%, 100% { opacity: 0; transform: translateX(0) scale(0.5); }
          50% { opacity: 1; transform: translateX(15px) scale(1.3); }
        }

        @keyframes particleFloat5 {
          0%, 100% { opacity: 0; transform: translateX(0) translateY(0) scale(0.8); }
          50% { opacity: 0.7; transform: translateX(25px) translateY(-15px) scale(1); }
        }

        @keyframes particleFloat6 {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.6); }
          50% { opacity: 0.9; transform: translateY(-20px) scale(1.4); }
        }

        @keyframes progressFill {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default YarnLoader;