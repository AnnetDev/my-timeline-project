import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 1024): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const updateIsMobile = () => setIsMobile(mediaQuery.matches);
        updateIsMobile();

        mediaQuery.addEventListener("change", updateIsMobile);

        const resizeListener = () => updateIsMobile();
        window.addEventListener("resize", resizeListener);

        return () => {
            mediaQuery.removeEventListener("change", updateIsMobile);
            window.removeEventListener("resize", resizeListener);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;
