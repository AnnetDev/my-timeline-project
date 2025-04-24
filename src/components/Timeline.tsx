import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";

import {
    TimelineWrapper,
    SlideBox,
    Title,
    Range,
    StartYear,
    EndYear,
    StyledWrapper,
    StyledTitle,
    CustomPaginationWrapper
} from "./styled";
import { Container } from "../styles/container";
import { slidesData, MainSlide, DetailSlide } from "../mocks/mockData";

const AnimatedNumber: React.FC<{ num: number }> = ({ num }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        gsap.to({ val: display }, {
            val: num,
            duration: 0.5,
            ease: "power1.out",
            onUpdate() {
                setDisplay(Math.round((this.targets()[0] as any).val));
            },
        });
    }, [num]);
    return <span>{display}</span>;
};

const Timeline: React.FC = () => {
    const swiper = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [startYear, setStartYear] = useState(slidesData[0].startYear);
    const [endYear, setEndYear] = useState(slidesData[0].endYear);
    const [detailKey, setDetailKey] = useState(0);

    const detailRef = useRef<HTMLDivElement>(null);

    const handleSlideChange = (swiperInstance: any) => {
        const newIndex = swiperInstance.activeIndex;

        if (detailRef.current) {
            gsap.to(detailRef.current, {
                opacity: 0,
                duration: 0.9,
                onComplete: () => {
                    setActiveIndex(newIndex);
                    setStartYear(slidesData[newIndex].startYear);
                    setEndYear(slidesData[newIndex].endYear);
                    setDetailKey(prev => prev + 1);
                }
            });
        }
    };

    useEffect(() => {
        if (detailRef.current) {
            gsap.fromTo(detailRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        }
    }, [detailKey]);

    const currentDetails = slidesData[activeIndex].details;

    return (
        <Container>
            <StyledWrapper>
                <StyledTitle>Исторические даты</StyledTitle>
                <TimelineWrapper>
                    <CustomPaginationWrapper>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            onSwiper={(s) => (swiper.current = s)}
                            slidesPerView={1}
                            spaceBetween={20}
                            navigation
                            pagination={{
                                clickable: true,
                                bulletClass: 'custom-swiper-bullet',
                                bulletActiveClass: 'custom-swiper-bullet-active'
                            }}
                            onSlideChange={handleSlideChange}
                        >
                            {slidesData.map((slide: MainSlide, index: number) => (
                                <SwiperSlide key={index}>
                                    <SlideBox>
                                        <Title>{slide.title}</Title>
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
                    </CustomPaginationWrapper>

                    <div ref={detailRef} key={detailKey}>
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            slidesPerView={3}
                            spaceBetween={10}
                        >
                            {currentDetails.map((detail: DetailSlide, index: number) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <h3>{detail.year}</h3>
                                        <p>{detail.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </TimelineWrapper>
            </StyledWrapper>
        </Container>
    );
};

export default Timeline;
