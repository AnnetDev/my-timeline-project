import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { size } from "../../utils/size";
import { TimelineWrapper, StyledWrapper, StyledTitle } from "./styles/styled";
import { Container } from "../../../styles/container";
import { slidesData, MainSlide, DetailSlide } from "../../../mocks/mockData";
import useIsMobile from "../../utils/useIsMobile";

import {
    SlideBox,
    Range,
    StartYear,
    EndYear,
    StyledTimelineSwiper,
    StyledNavMain,
    CircularPaginationWrapper,
    Bullet,
    StyledCircleWrapper,
    SlideCounter,
    CurrentSlide,
    Separator,
    TotalSlides,
    SlideCounterWrapper
} from "./styles/timeline-swiper";

import {
    StyledDetailsSwiper,
    CustomDetailsSwiperSlide,
    StyledNavDetails,
} from "./styles/details-swiper";



const AnimatedNumber: React.FC<{ num: number }> = ({ num }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        gsap.to(
            { val: display },
            {
                val: num,
                duration: 0.5,
                ease: "power1.out",
                onUpdate() {
                    setDisplay(Math.round((this.targets()[0] as any).val));
                },
            }
        );
    }, [num]);
    return <div>{display}</div>;
};

const Timeline: React.FC = () => {
    const isMobile = useIsMobile();
    const swiper = useRef<any>(null);
    const initialIndex = slidesData.length - 1;
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [startYear, setStartYear] = useState(slidesData[initialIndex].startYear);
    const [endYear, setEndYear] = useState(slidesData[initialIndex].endYear);
    const [detailKey, setDetailKey] = useState(0);
    const currentDetails = slidesData[activeIndex].details;
    const detailRef = useRef<HTMLDivElement>(null);
    const bulletsRef = useRef<HTMLDivElement>(null);
    const numItems = slidesData.length;
    const step = 360 / numItems;
    const targetAngle = -60;
    const bulletSize = 6;
    const baseRadius = 264;
    const radius = baseRadius + bulletSize / 2;

    const rotateTo = (index: number) => {
        const el = bulletsRef.current;
        if (!el) return;

        const newRotation = targetAngle - index * step;
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
        const handleResize = () => {
            rotateTo(activeIndex);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeIndex]);

    const handleBulletClick = (index: number) => {
        if (swiper.current) {
            swiper.current.slideTo(index);
        }
        setActiveIndex(index);
    };

    const handleSlideChange = (swiperInstance: any) => {
        const newIndex = swiperInstance.activeIndex;
        const titleEl = swiperInstance.slides[newIndex].querySelector('h2');

        gsap.to('.swiper-slide h2', { opacity: 0, duration: 0.2, ease: 'power1.out' });

        setTimeout(() => {
            setActiveIndex(newIndex);
            setStartYear(slidesData[newIndex].startYear);
            setEndYear(slidesData[newIndex].endYear);
            setDetailKey(k => k + 1);
            if (titleEl) {
                gsap.fromTo(
                    titleEl,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.6, ease: "power1.out", delay: 0.1 }
                );
            }
        }, isMobile ? 200 : 300);
    };

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

    return (
        <Container>
            <StyledWrapper>
                <StyledTitle>Исторические даты</StyledTitle>
                <StyledNavMain className="custom-swiper-nav">
                    <button className="swiper-button-prev-main" ref={prevRef}></button>
                    <button className="swiper-button-next-main" ref={nextRef}></button>
                </StyledNavMain>

                {isMobile && <div className="custom-swiper-pagination" />}

                {isMobile && <SlideCounterWrapper>
                    <SlideCounter>
                        <CurrentSlide>{String(activeIndex + 1).padStart(2, "0")}</CurrentSlide>
                        <Separator>/</Separator>
                        <TotalSlides>{String(slidesData.length).padStart(2, "0")}</TotalSlides>
                    </SlideCounter>
                </SlideCounterWrapper>}
                <TimelineWrapper>

                    <StyledTimelineSwiper>
                        <Swiper
                            initialSlide={initialIndex}
                            onSwiper={(swiperInstance) => {
                                swiper.current = swiperInstance;
                                setActiveIndex(swiperInstance.activeIndex);
                                if (
                                    swiperInstance.params.navigation &&
                                    typeof swiperInstance.params.navigation !== "boolean"
                                ) {
                                    swiperInstance.params.navigation.prevEl = prevRef.current;
                                    swiperInstance.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                            allowTouchMove={false}
                            speed={0}
                            onBeforeInit={(swiperInstance) => {
                                swiper.current = swiperInstance;
                                if (swiperInstance.params.navigation && typeof swiperInstance.params.navigation !== "boolean") {
                                    swiperInstance.params.navigation.prevEl = prevRef.current;
                                    swiperInstance.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            pagination={isMobile
                                ? {
                                    el: ".custom-swiper-pagination",
                                    clickable: true,
                                }
                                : false}
                            onSlideChange={handleSlideChange}
                        >
                            {slidesData.map((slide: MainSlide, index: number) => (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <h2>{slide.title}</h2>
                                    <SlideBox>
                                        <Range>
                                            <StartYear>
                                                <AnimatedNumber num={startYear} />
                                            </StartYear>
                                            <EndYear>
                                                <AnimatedNumber num={endYear} />
                                            </EndYear>
                                        </Range>
                                    </SlideBox>
                                </SwiperSlide>
                            ))}
                            {!isMobile && <SlideCounterWrapper>
                                <SlideCounter>
                                    <CurrentSlide>{String(activeIndex + 1).padStart(2, "0")}</CurrentSlide>
                                    <Separator>/</Separator>
                                    <TotalSlides>{String(slidesData.length).padStart(2, "0")}</TotalSlides>
                                </SlideCounter>
                            </SlideCounterWrapper>}
                        </Swiper>
                        {!isMobile && (
                            <StyledCircleWrapper>
                                <CircularPaginationWrapper
                                    ref={bulletsRef}
                                    style={{
                                        width: size(radius * 2),
                                        height: size(530),
                                    }}
                                >
                                    {slidesData.map((_, i) => {
                                        const angle = i * step;
                                        const isActive = i === activeIndex;
                                        return (
                                            <Bullet
                                                key={i}
                                                $active={isActive}
                                                data-active={isActive ? "true" : "false"}
                                                onClick={() => handleBulletClick(i)}
                                                style={{
                                                    transform: `
                                                        translate(-50%, -50%)
                                                        rotate(${angle}deg)
                                                        translate(${size(radius)})
                                                        rotate(${-angle}deg)
                                                    `,
                                                } as React.CSSProperties}
                                            >
                                                <div className="bullet-number">{i + 1}</div>
                                            </Bullet>
                                        );
                                    })}
                                </CircularPaginationWrapper>
                            </StyledCircleWrapper>
                        )}
                    </StyledTimelineSwiper>

                    <StyledDetailsSwiper ref={detailRef} key={detailKey}>
                        <h2>{slidesData[activeIndex].title}</h2>
                        <Swiper
                            modules={[Navigation]}
                            loop={false}
                            navigation={{
                                prevEl: ".swiper-button-prev-details",
                                nextEl: ".swiper-button-next-details",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 25,
                                    centeredSlides: false,
                                    slidesOffsetAfter: 140,
                                },
                                480: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 35,
                                    centeredSlides: false,
                                    slidesOffsetAfter: 250,
                                },
                                768: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 45,
                                    centeredSlides: false,
                                    slidesOffsetAfter: 400,
                                },
                                1024: {
                                    slidesPerView: 'auto',
                                    slidesOffsetAfter: 30,

                                },
                            }}
                        >
                            {currentDetails.map((detail, idx) => (
                                <SwiperSlide key={idx}>
                                    <CustomDetailsSwiperSlide>
                                        <h3>{detail.year}</h3>
                                        <p>{detail.description}</p>
                                    </CustomDetailsSwiperSlide>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <StyledNavDetails className="details-swiper-nav">
                            <button className="swiper-button-prev-details"></button>
                            <button className="swiper-button-next-details"></button>
                        </StyledNavDetails>
                    </StyledDetailsSwiper>
                </TimelineWrapper>
            </StyledWrapper>
        </Container>
    );
};

export default Timeline;

