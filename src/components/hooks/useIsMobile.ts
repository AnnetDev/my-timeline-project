import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 1024): boolean => {
    const query = `(max-width: ${breakpoint}px)`;
    const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setIsMobile(media.matches);

        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return isMobile;
};

export default useIsMobile;
