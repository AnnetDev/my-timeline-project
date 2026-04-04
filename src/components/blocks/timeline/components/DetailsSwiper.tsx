import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { StyledDetailsSwiper, CustomDetailsSwiperSlide, StyledNavDetails } from "../styles/details-swiper";
import { slidesData } from "../../../../mocks/mockData";

interface Props {
    activeIndex: number;
    detailKey: number;
    detailRef: React.RefObject<HTMLDivElement | null>;
}

const DetailsSwiper: React.FC<Props> = ({ activeIndex, detailKey, detailRef }) => {
    const currentDetails = slidesData[activeIndex].details;

    return (
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
                    0: { slidesPerView: "auto", spaceBetween: 25, centeredSlides: false, slidesOffsetAfter: 140 },
                    480: { slidesPerView: "auto", spaceBetween: 35, centeredSlides: false, slidesOffsetAfter: 250 },
                    768: { slidesPerView: "auto", spaceBetween: 45, centeredSlides: false, slidesOffsetAfter: 400 },
                    1024: { slidesPerView: "auto", slidesOffsetAfter: 30 },
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
    );
};

export default DetailsSwiper;
