'use client';

const SkipLinks = () => {
    return (
        <div className="skip-links">
            <a 
                href="#main-content" 
                className="skip-link"
                aria-label="Passer au contenu principal"
            >
                Aller au contenu principal
            </a>
            <a 
                href="#navigation" 
                className="skip-link"
                aria-label="Passer à la navigation"
            >
                Aller à la navigation
            </a>
            <a 
                href="#creations" 
                className="skip-link"
                aria-label="Passer à la section créations"
            >
                Aller aux créations
            </a>
            <a 
                href="#contact" 
                className="skip-link"
                aria-label="Passer aux informations de contact"
            >
                Aller au contact
            </a>
        </div>
    );
};

export default SkipLinks;