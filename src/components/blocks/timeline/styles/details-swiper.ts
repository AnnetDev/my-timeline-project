import styled from "styled-components";
import { size, sizePlus } from "../../../utils/size";

export const CustomDetailsSwiperSlide = styled.div`
  transition: opacity 0.3s ease;
`;

export const StyledDetailsSwiper = styled.div`
  position: relative;
  margin: 0 0 0;

  @media (max-width: 1024px) {
    margin: 0 0 ${sizePlus(87)};
  }

  h2 {
    display: none;

    @media (max-width: 1024px) {
      display: block;
      font-weight: 700;
      font-size: ${sizePlus(12)};
      line-height: 145%;
      position: relative;
      padding: 0 0 ${sizePlus(17)};
      margin: 0 0 ${sizePlus(19)};

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: ${sizePlus(1)};
        background-color: #c7cdd9;
        bottom: 0;
      }
    }
  }

  .swiper-wrapper {
    max-width: ${size(1360)};

    @media (max-width: 1024px) {
      max-width: unset;
      width: 100%;
    }
  }

  .swiper {
    max-width: ${size(1282)};

    @media (max-width: 1024px) {
      max-width: unset;
      padding: 0 0 20px;
      margin: 0 ${sizePlus(-20)} 0 0;
      mask-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0.8) 50%,
        rgba(0, 0, 0, 0.4) 70%
      );
    }
  }

  .swiper-slide {
    cursor: pointer;
    width: ${size(320)};
    max-width: ${size(320)};
    min-height: ${size(135)};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    margin-right: ${size(80)};

    &:nth-child(2n) {
      max-width: ${size(400)};
      min-width: ${size(400)};
    }

    @media (max-width: 1024px) {
      width: ${sizePlus(166)};
      max-width: ${sizePlus(166)};
      min-width: ${sizePlus(166)};
      transition: opacity 0.3s ease;
      min-height: ${size(114)};
      margin-right: unset;

      &:nth-child(2n) {
        all: unset;
        width: ${sizePlus(166)};
        max-width: ${sizePlus(166)};
        min-width: ${sizePlus(166)};
        min-height: ${size(114)};
        cursor: pointer;
        margin-right: unset;
      }

      &:nth-child(2) {
        all: unset;
        width: ${sizePlus(240)};
        max-width: ${sizePlus(240)};
        min-width: ${sizePlus(240)};
        min-height: ${size(114)};
        cursor: pointer;
        margin-right: unset;
      }
    }
  }

  h3 {
    font-family: "Bebas Neue", Impact, sans-serif;
    font-weight: 400;
    font-size: ${size(25)};
    line-height: 120%;
    letter-spacing: 0;
    text-transform: uppercase;
    color: #3877ee;
    margin: 0 0 ${size(13)};
    padding: 0;

    @media (max-width: 1024px) {
      font-weight: 400;
      font-size: ${sizePlus(16)};
      margin: 0 0 13px;
    }
  }

  p {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: ${size(20)};
    line-height: ${size(30)};
    letter-spacing: 0;

    @media (max-width: 1024px) {
      font-weight: 400;
      font-size: ${sizePlus(14)};
      line-height: 145%;
    }
  }
`;

export const StyledNavDetails = styled.div`
  position: absolute;
  top: 24%;
  display: flex;
  width: 100%;
  justify-content: space-between;

  .swiper-button-prev-details,
  .swiper-button-next-details {
    margin: 0;
    padding: 0;
    border: none;
    background-color: #ffffff;
    display: flex;
    width: ${size(40)};
    height: ${size(40)};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    box-shadow: 0px 0px ${size(15)} 0px #3877ee1a;

    @media (max-width: 1024px) {
      width: ${sizePlus(25)};
      height: ${sizePlus(25)};
    }
  }

  .swiper-button-prev-details {
    margin: 0 0 0 ${size(-25)};

    &::after {
      position: absolute;
      content: "";
      border: solid #3877ee;
      border-width: 0 ${size(2)} ${size(2)} 0;
      display: inline-block;
      padding: ${size(4)};
      transform: rotate(135deg);

      @media (max-width: 1024px) {
        border-width: 0 ${sizePlus(3)} ${sizePlus(3)} 0;
        padding: ${sizePlus(2)};
      }
    }
  }

  .swiper-button-next-details {
    &::after {
      position: absolute;
      content: "";
      border: solid #42567a;
      border-width: 0 ${size(2)} ${size(2)} 0;
      display: inline-block;
      padding: ${size(4)};
      transform: rotate(-45deg);

      @media (max-width: 1024px) {
        border-width: 0 ${sizePlus(3)} ${sizePlus(3)} 0;
        padding: ${sizePlus(2)};
      }
    }
  }

  .swiper-button-prev-details.swiper-button-disabled,
  .swiper-button-next-details.swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
