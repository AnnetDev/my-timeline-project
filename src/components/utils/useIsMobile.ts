import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 1024): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const updateIsMobile = () => setIsMobile(mediaQuery.matches);

        // Изначальная проверка при монтировании
        updateIsMobile();

        // Добавляем слушатель для mediaQuery
        mediaQuery.addEventListener("change", updateIsMobile);

        // Также отслеживаем resize события, если вдруг mediaQuery не сработает
        const resizeListener = () => updateIsMobile();
        window.addEventListener("resize", resizeListener);

        // Очистка при демонтировании
        return () => {
            mediaQuery.removeEventListener("change", updateIsMobile);
            window.removeEventListener("resize", resizeListener);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;
