'use client';

const StructuredData = () => {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://les-mailles-de-sylvie.vercel.app/#business",
        "name": "Les Mailles de Sylvie",
        "alternateName": "Mailles de Sylvie",
        "description": "Portfolio tricot artisanal de Sylvie : 55 ans de passion pour créer des pièces uniques. Découvrez un savoir-faire français authentique transmis de mère en fille.",
        "url": "https://les-mailles-de-sylvie.vercel.app",
        "image": "https://les-mailles-de-sylvie.vercel.app/apple-touch-icon.svg",
        "logo": "https://les-mailles-de-sylvie.vercel.app/apple-touch-icon.svg",
        "founder": {
            "@type": "Person",
            "name": "Sylvie",
            "jobTitle": "Artisane tricoteuse",
            "knowsAbout": ["Tricot", "Artisanat", "Créations textiles", "Laine naturelle"]
        },
        "foundingDate": "1969",
        "areaServed": {
            "@type": "Country",
            "name": "France"
        },
        "serviceType": "Artisanat textile",
        "knowsAbout": [
            "Tricot artisanal",
            "Pulls faits main",
            "Écharpes tricot", 
            "Couvertures laine",
            "Créations sur mesure"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Créations Tricot",
            "itemListElement": [
                {
                    "@type": "Product",
                    "name": "Pulls tricotés main",
                    "description": "Pulls uniques tricotés à la main avec des laines de qualité",
                    "category": "Vêtements",
                    "material": "Laine naturelle",
                    "brand": "Les Mailles de Sylvie"
                },
                {
                    "@type": "Product", 
                    "name": "Écharpes artisanales",
                    "description": "Écharpes douces et chaudes, créations originales",
                    "category": "Accessoires",
                    "material": "Laine naturelle",
                    "brand": "Les Mailles de Sylvie"
                },
                {
                    "@type": "Product",
                    "name": "Couvertures tricot",
                    "description": "Couvertures douillettes pour votre intérieur",
                    "category": "Décoration",
                    "material": "Laine naturelle",
                    "brand": "Les Mailles de Sylvie"
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "47"
        },
        "review": [
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Marie D."
                },
                "reviewBody": "Pull magnifique, qualité exceptionnelle ! Sylvie est une vraie artiste."
            }
        ]
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://les-mailles-de-sylvie.vercel.app/#sylvie",
        "name": "Sylvie",
        "jobTitle": "Artisane tricoteuse",
        "description": "Artisane passionnée avec 55 ans d'expérience dans le tricot artisanal français, transmettant un savoir-faire familial authentique",
        "url": "https://les-mailles-de-sylvie.vercel.app",
        "image": "https://les-mailles-de-sylvie.vercel.app/apple-touch-icon.svg",
        "knowsAbout": [
            "Tricot artisanal",
            "Artisanat textile",
            "Créations sur mesure",
            "Laine naturelle"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Artisane tricoteuse",
            "occupationLocation": {
                "@type": "Country",
                "name": "France"
            },
            "skills": ["Tricot", "Design textile", "Artisanat"]
        },
        "worksFor": {
            "@id": "https://les-mailles-de-sylvie.vercel.app/#business"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://les-mailles-de-sylvie.vercel.app/#website",
        "url": "https://les-mailles-de-sylvie.vercel.app",
        "name": "Les Mailles de Sylvie",
        "description": "Site officiel des créations tricot artisanales de Sylvie",
        "publisher": {
            "@id": "https://les-mailles-de-sylvie.vercel.app/#business"
        },
        "potentialAction": [
            {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://les-mailles-de-sylvie.vercel.app/?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        ],
        "inLanguage": "fr-FR"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://les-mailles-de-sylvie.vercel.app/"
            },
            {
                "@type": "ListItem", 
                "position": 2,
                "name": "À propos",
                "item": "https://les-mailles-de-sylvie.vercel.app/#a-propos"
            },
            {
                "@type": "ListItem",
                "position": 3, 
                "name": "Créations",
                "item": "https://les-mailles-de-sylvie.vercel.app/#creations"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Galerie", 
                "item": "https://les-mailles-de-sylvie.vercel.app/#galerie"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(businessSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
        </>
    );
};

export default StructuredData;