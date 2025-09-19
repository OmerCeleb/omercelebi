// src/hooks/useScrollToTop.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top when page changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
    }, [location.pathname]); // Runs when pathname changes

    return null;
};

// Alternative: Instant scroll without animation
export const useScrollToTopInstant = () => {
    const location = useLocation();

    useEffect(() => {
        // Instant scroll (no animation)
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
};