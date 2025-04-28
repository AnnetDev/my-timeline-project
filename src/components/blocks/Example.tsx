import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";

const CircleWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding: 0;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

const BulletsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  top: 0;
  left: 0;
`;

const Bullet = styled.button<{ active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? "#5d5fef" : "#ccc")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  &:hover {
    background: #5d5fef;
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;



const CirclePaginationSwiper = () => {
    const swiperRef = useRef<any>(null);
    const bulletsRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [1, 2, 3, 4, 5, 6, 7];
    const numSlides = slides.length;
    const step = 360 / numSlides;
    const bulletSize = 20;
    const radius = 140 + bulletSize / 2; // Добавляем половину размера буллета
        const targetAngle = -90; // Положение активного буллета

    const rotateTo = (index: number) => {
        const newRotation = targetAngle - index * step;
        if (bulletsRef.current) {
            gsap.to(bulletsRef.current, {
                rotation: newRotation,
                duration: 0.7,
                ease: "power2.out",
            });
        }
    };

    useEffect(() => {
        rotateTo(activeIndex);
    }, [activeIndex]);

    const handleBulletClick = (index: number) => {
        swiperRef.current?.slideTo(index);
    };

    return (
        <div>
            <CircleWrapper>
                <BulletsWrapper ref={bulletsRef}>
                    {slides.map((_, i) => {
                        const angle = (i * step * Math.PI) / 180;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <Bullet
                                key={i}
                                active={i === activeIndex}
                                style={{
                                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                                }}
                                onClick={() => handleBulletClick(i)}
                            />

                        );
                    })}
                </BulletsWrapper>
            </CircleWrapper>

            <SwiperWrapper>
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    slidesPerView={1}
                    navigation
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div style={{ padding: "100px", textAlign: "center" }}>
                                Slide {slide}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperWrapper>
        </div>
    );
};

export default CirclePaginationSwiper;
