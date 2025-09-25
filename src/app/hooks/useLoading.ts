'use client';

import { useState, useEffect } from 'react';

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Le loader dure 3 secondes puis disparaît (optimisé pour mobile)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000
    );

        return () => clearTimeout(timer);
    }, []);

    return { isLoading };
};