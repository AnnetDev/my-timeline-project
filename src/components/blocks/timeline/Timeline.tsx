import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { size, sizePlus, sizeNumber } from "../../utils/size";
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

const targetAngle = -60;

const Timeline: React.FC = () => {
    const swiper = useRef<any>(null);
    const initialIndex = slidesData.length - 1;

    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [startYear, setStartYear] = useState(slidesData[initialIndex].startYear);
    const [endYear, setEndYear] = useState(slidesData[initialIndex].endYear);
    const [detailKey, setDetailKey] = useState(0); // не обязательно менять
    const currentDetails = slidesData[activeIndex].details;
    const detailRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    const bulletsRef = useRef<HTMLDivElement>(null);
    const numItems = slidesData.length;
    const step = 360 / numItems;

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
            duration: 0.7,
            ease: "power2.out",
            onUpdate: () => {
                el.style.setProperty("--rotation", `${state.rotation.toFixed(2)}deg`);
            },
        });
    };




    useEffect(() => {
        rotateTo(activeIndex);
    }, [activeIndex]);

    const handleBulletClick = (index: number) => {
        if (swiper.current) {
            swiper.current.slideTo(index);
        }
        setActiveIndex(index);
    };

    const handleSlideChange = (swiperInstance: any) => {
        const newIndex = swiperInstance.activeIndex;

        if (detailRef.current) {
            gsap.to(detailRef.current, {
                opacity: 0,
                ...(isMobile && { y: -20 }),
                duration: isMobile ? 0.4 : 0.9,
                ease: "power2.out",
                onComplete: () => {
                    setActiveIndex(newIndex);
                    setStartYear(slidesData[newIndex].startYear);
                    setEndYear(slidesData[newIndex].endYear);
                    setDetailKey((prev) => prev + 1);
                },
            });
        }
    };

    useEffect(() => {
        if (detailRef.current) {
            gsap.fromTo(
                detailRef.current,
                { opacity: 0, ...(isMobile && { y: 20 }) },
                {
                    opacity: 1,
                    ...(isMobile && { y: 0 }),
                    duration: isMobile ? 0.4 : 0.3,
                    ease: "power2.out",
                }
            );
        }
    }, [detailKey, isMobile]);

    return (
        <Container>
            <StyledWrapper>
                <StyledTitle>Исторические даты</StyledTitle>
                <StyledNavMain className="custom-swiper-nav">
                    <button className="swiper-button-prev-main"></button>
                    <button className="swiper-button-next-main"></button>
                </StyledNavMain>
                {isMobile && <div className="custom-swiper-pagination" />}

                <TimelineWrapper>

                    <StyledTimelineSwiper>
                        <SlideCounterWrapper>
                            <SlideCounter>
                                <CurrentSlide>{String(activeIndex + 1).padStart(2, "0")}</CurrentSlide>
                                <Separator>/</Separator>
                                <TotalSlides>{String(slidesData.length).padStart(2, "0")}</TotalSlides>
                            </SlideCounter>
                        </SlideCounterWrapper>

                        <Swiper
                            style={{ position: "relative", width: "100%", height: "100%" }}
                            modules={[Navigation, Pagination]}
                            onSwiper={(s) => (swiper.current = s)}
                            slidesPerView={1}
                            allowTouchMove={false}
                            speed={0}


                            // initialSlide={5}
                            navigation={
                                {
                                    nextEl: '.swiper-button-next-main',
                                    prevEl: '.swiper-button-prev-main',
                                }
                            }
                            pagination={isMobile
                                ? {
                                    el: ".custom-swiper-pagination", // ВАЖНО: указали внешний контейнер
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
                            navigation={{
                                nextEl: ".swiper-button-next-details",
                                prevEl: ".swiper-button-prev-details",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 25,
                                    centeredSlides: false,
                                    loop: false,
                                    // slidesOffsetBefore: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 80,

                                },
                            }}

                        >
                            {currentDetails.map((detail: DetailSlide, index: number) => (
                                <SwiperSlide key={index}>
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

