import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { slidesData } from "../../../../mocks/mockData";
import useIsMobile from "../../../utils/useIsMobile";

const INITIAL_INDEX = slidesData.length - 1;
const NUM_ITEMS = slidesData.length;
const STEP = 360 / NUM_ITEMS;
const TARGET_ANGLE = -60;
const BULLET_SIZE = 6;
const BASE_RADIUS = 264;
const RADIUS = BASE_RADIUS + BULLET_SIZE / 2;

export const useTimeline = () => {
    const isMobile = useIsMobile();
    const swiperRef = useRef<any>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const bulletsRef = useRef<HTMLDivElement>(null);
    const detailRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);
    const [startYear, setStartYear] = useState(slidesData[INITIAL_INDEX].startYear);
    const [endYear, setEndYear] = useState(slidesData[INITIAL_INDEX].endYear);
    const [detailKey, setDetailKey] = useState(0);

    const rotateTo = (index: number) => {
        const el = bulletsRef.current;
        if (!el) return;
        const newRotation = TARGET_ANGLE - index * STEP;
        const state = { rotation: parseFloat(el.style.getPropertyValue("--rotation")) || 0 };
        gsap.to(state, {
            rotation: newRotation,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => {
                el.style.setProperty("--rotation", `${state.rotation.toFixed(2)}deg`);
            },
        });
    };

    useEffect(() => {
        rotateTo(activeIndex);
    }, [activeIndex]);

    useEffect(() => {
        const handleResize = () => rotateTo(activeIndex);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeIndex]);

    useEffect(() => {
        gsap.fromTo(
            detailRef.current,
            { opacity: 0, ...(isMobile && { y: 20 }) },
            {
                opacity: 1,
                ...(isMobile && { y: 0 }),
                duration: isMobile ? 0.7 : 0.9,
                ease: "power2.out",
            }
        );
    }, [detailKey, isMobile]);

    const handleBulletClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
        setActiveIndex(index);
    };

    const handleSlideChange = (swiperInstance: any) => {
        const newIndex = swiperInstance.activeIndex;
        const titleEl = swiperInstance.slides[newIndex].querySelector("h2");

        gsap.to(".swiper-slide h2", { opacity: 0, duration: 0.2, ease: "power1.out" });

        setTimeout(() => {
            setActiveIndex(newIndex);
            setStartYear(slidesData[newIndex].startYear);
            setEndYear(slidesData[newIndex].endYear);
            setDetailKey((k) => k + 1);
            if (titleEl) {
                gsap.fromTo(titleEl, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.out", delay: 0.1 });
            }
        }, isMobile ? 200 : 300);
    };

    return {
        isMobile,
        swiperRef,
        prevRef,
        nextRef,
        bulletsRef,
        detailRef,
        activeIndex,
        startYear,
        endYear,
        detailKey,
        handleBulletClick,
        handleSlideChange,
        step: STEP,
        radius: RADIUS,
        initialIndex: INITIAL_INDEX,
    };
};
