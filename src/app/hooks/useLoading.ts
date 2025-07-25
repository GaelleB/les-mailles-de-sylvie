'use client';

import { useState, useEffect } from 'react';

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Le loader dure 5 secondes puis disparaît
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000
    );

        return () => clearTimeout(timer);
    }, []);

    return { isLoading };
};