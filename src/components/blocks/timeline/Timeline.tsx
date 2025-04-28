import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";

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
} from "./styles/timeline-swiper";

import {
    StyledDetailsSwiper,
    CustomDetailsSwiperSlide,
    StyledNavDetails,
} from "./styles/details-swiper";

import { TimelineWrapper, StyledWrapper, StyledTitle } from "./styled";
import { Container } from "../../../styles/container";
import { slidesData, MainSlide, DetailSlide } from "../../../mocks/mockData";
import useIsMobile from "../../hooks/useIsMobile";

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
    return <span>{display}</span>;
};

const targetAngle = -60; // Active bullet position (degrees, top-right)

const Timeline: React.FC = () => {
    const swiper = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [startYear, setStartYear] = useState(slidesData[0].startYear);
    const [endYear, setEndYear] = useState(slidesData[0].endYear);
    const [detailKey, setDetailKey] = useState(0);
    const currentDetails = slidesData[activeIndex].details;
    const detailRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    const bulletsRef = useRef<HTMLDivElement>(null);
    const numItems = slidesData.length;
    const step = 360 / numItems;

    const bulletSize = 6; // ведь у тебя в <Bullet> width/height = 32px
    const baseRadius = 268; // тот визуальный радиус, который ты хочешь видеть
    const radius = baseRadius + bulletSize / 2;

    const rotateTo = (index: number) => {
        const newRotation = targetAngle - index * step;
        if (bulletsRef.current) {
            gsap.to(bulletsRef.current, {
                rotation: newRotation,
                duration: 0.7,
                // ease: '',
            });
        }
    };

    // Sync swiper and bullets
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
                <TimelineWrapper>
                    <StyledTimelineSwiper>
                        <Swiper
                            style={{ position: "relative", width: "100%", height: "100%" }}
                            modules={[Navigation]}
                            onSwiper={(s) => (swiper.current = s)}
                            slidesPerView={1}
                            initialSlide={6}
                            // spaceBetween={20}
                            navigation={{
                                prevEl: ".swiper-button-prev-main",
                                nextEl: ".swiper-button-next-main",
                            }}
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
                    </StyledTimelineSwiper>
                    <StyledCircleWrapper>
                        <CircularPaginationWrapper
                            ref={bulletsRef}
                            style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
                        >
                            {slidesData.map((_, i) => {
                                const angle = i * step;
                                const isActive = i === activeIndex;
                                return (
                                    <Bullet
                                        key={i}
                                        active={isActive}
                                        data-active={isActive ? "true" : "false"}
                                        onClick={() => handleBulletClick(i)}
                                        style={{
                                            transform: `
                                            translate(-50%, -50%)
                                            rotate(${angle}deg)
                                            translate(${radius}px)
                                            rotate(${-angle}deg)
                                            `,
                                        }}
                                    >
                                        <div className="bullet-number">{i + 1}</div>
                                        {/* <div className="bullet-inner">
                                            {(isActive || undefined) && (
                                                <span className="bullet-number">{i + 1}</span>
                                            )}
                                        </div> */}
                                    </Bullet>
                                );
                            })}
                        </CircularPaginationWrapper>
                    </StyledCircleWrapper>
                    <StyledNavMain className="custom-swiper-nav">
                        <button className="swiper-button-prev-main"></button>
                        <button className="swiper-button-next-main"></button>
                    </StyledNavMain>

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
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 80,
                                },
                            }}
                            spaceBetween={10}
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
