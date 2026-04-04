import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TimelineWrapper, StyledWrapper, StyledTitle } from "./styles/styled";
import { Container } from "../../../styles/container";
import { slidesData } from "../../../mocks/mockData";
import { useTimeline } from "./hooks/useTimeline";
import AnimatedNumber from "./components/AnimatedNumber";
import CircularPagination from "./components/CircularPagination";
import DetailsSwiper from "./components/DetailsSwiper";
import {
    SlideBox,
    Range,
    StartYear,
    EndYear,
    StyledTimelineSwiper,
    StyledNavMain,
    SlideCounter,
    CurrentSlide,
    Separator,
    TotalSlides,
    SlideCounterWrapper,
} from "./styles/timeline-swiper";

const Timeline: React.FC = () => {
    const {
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
        step,
        radius,
        initialIndex,
    } = useTimeline();

    return (
        <Container>
            <StyledWrapper>
                <StyledTitle>Historical dates</StyledTitle>
                <StyledNavMain className="custom-swiper-nav">
                    <button className="swiper-button-prev-main" ref={prevRef}></button>
                    <button className="swiper-button-next-main" ref={nextRef}></button>
                </StyledNavMain>

                {isMobile && <div className="custom-swiper-pagination" />}
                {isMobile && (
                    <SlideCounterWrapper>
                        <SlideCounter>
                            <CurrentSlide>{String(activeIndex + 1).padStart(2, "0")}</CurrentSlide>
                            <Separator>/</Separator>
                            <TotalSlides>{String(slidesData.length).padStart(2, "0")}</TotalSlides>
                        </SlideCounter>
                    </SlideCounterWrapper>
                )}

                <TimelineWrapper>
                    <StyledTimelineSwiper>
                        <Swiper
                            initialSlide={initialIndex}
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                            allowTouchMove={false}
                            speed={0}
                            onSwiper={(swiperInstance) => {
                                swiperRef.current = swiperInstance;
                                if (
                                    swiperInstance.params.navigation &&
                                    typeof swiperInstance.params.navigation !== "boolean"
                                ) {
                                    swiperInstance.params.navigation.prevEl = prevRef.current;
                                    swiperInstance.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            onBeforeInit={(swiperInstance) => {
                                swiperRef.current = swiperInstance;
                                if (
                                    swiperInstance.params.navigation &&
                                    typeof swiperInstance.params.navigation !== "boolean"
                                ) {
                                    swiperInstance.params.navigation.prevEl = prevRef.current;
                                    swiperInstance.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                            pagination={
                                isMobile ? { el: ".custom-swiper-pagination", clickable: true } : false
                            }
                            onSlideChange={handleSlideChange}
                        >
                            {slidesData.map((slide, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{ position: "relative", width: "100%", height: "100%" }}
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
                            {!isMobile && (
                                <SlideCounterWrapper>
                                    <SlideCounter>
                                        <CurrentSlide>{String(activeIndex + 1).padStart(2, "0")}</CurrentSlide>
                                        <Separator>/</Separator>
                                        <TotalSlides>{String(slidesData.length).padStart(2, "0")}</TotalSlides>
                                    </SlideCounter>
                                </SlideCounterWrapper>
                            )}
                        </Swiper>
                        {!isMobile && (
                            <CircularPagination
                                bulletsRef={bulletsRef}
                                activeIndex={activeIndex}
                                step={step}
                                radius={radius}
                                onBulletClick={handleBulletClick}
                            />
                        )}
                    </StyledTimelineSwiper>

                    <DetailsSwiper
                        activeIndex={activeIndex}
                        detailKey={detailKey}
                        detailRef={detailRef}
                    />
                </TimelineWrapper>
            </StyledWrapper>
        </Container>
    );
};

export default Timeline;
