// src/components/common/ScrollToTop/ScrollToTop.tsx
import React from 'react';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const ScrollToTop: React.FC = () => {
    useScrollToTop(); // Hook automatically handles scroll to top on route change
    return null; // This component renders nothing
};

export default ScrollToTop;