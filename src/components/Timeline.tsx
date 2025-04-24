import React, { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import {
    Circle,
    Dot,
    TimelineWrapper,
    SlideBox,
    Title,
    Range,
    StartYear,
    EndYear,
    StyledWrapper,
    StyledTitle
} from "./styled";
import { Container } from "../styles/container";

import { slidesData, MainSlide } from "../mocks/mockData";


const AnimatedNumber: React.FC<{ num: number }> = ({ num }) => {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        gsap.to({ val: display }, {
            val: num,
            duration: 0.5,
            ease: "power1.out",
            onUpdate() {
                setDisplay(Math.round((this.targets()[0] as any).val));
            }
        });
    }, [num]);

    return <span>{display}</span>;
};

const Timeline: React.FC = () => {
    const swiper = useRef<any>(null);
    const [startYear, setStartYear] = useState(slidesData[0].startYear);
    const [endYear, setEndYear] = useState(slidesData[0].endYear);

    return (
        <Container>
            <StyledWrapper>
                <StyledTitle>Исторические даты</StyledTitle>
                <TimelineWrapper>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        onSwiper={(s) => {
                            swiper.current = s;
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={(swiper) => {
                            const activeIndex = swiper.activeIndex;
                            setStartYear(slidesData[activeIndex].startYear);
                            setEndYear(slidesData[activeIndex].endYear);
                        }}
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
                </TimelineWrapper>
            </StyledWrapper>
        </Container>
    );
};


export default Timeline;
