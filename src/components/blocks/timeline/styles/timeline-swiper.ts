import styled from "styled-components";
import { size, sizePlus } from "../../../utils/size";

export const StyledTimelineSwiper = styled.div`
  padding: 0 0 ${size(41)};
  margin: 0 0  ${size(25)};
  width: 100%;
  display: flex;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: ${size(1)};
    height: 100vw;
    background-color: #e2e5ec;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: ${size(1)};
    background-color: #e2e5ec;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1024px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    padding: 0;
    margin: 0 0 ${sizePlus(23)};
    position: relative;
  }

  .swiper-wrapper {
    width: 100%;
    overflow-x: visible;
  }

  .swiper {
    max-width: ${size(1360)};
    position: relative;
    @media (max-width: 1024px) {
      min-width: ${sizePlus(280)};
    }
  }

  .swiper-slide {
    height: 100%;
    min-height: ${size(609)};
    width: ${size(609)};
    max-width: ${size(1360)};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      min-height: ${sizePlus(75)};
      align-items: flex-start;
    }
  }

  h2 {
    margin: 0;
    padding: 0;
    position: absolute;
    top: ${size(60)};
    left: 63%;
    font-weight: 700;
    font-size: ${size(20)};
    line-height: ${size(30)};
    @media (max-width: 1024px) {
      display: none;
    }
  }

`;

export const SlideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: ${size(973)};
  height: ${size(160)};
  /* border-radius: ${size(8)}; */

  @media (max-width: 1024px) {
    justify-content: flex-start;
    min-width: ${size(280)};
    min-height: 100%;
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin: 0;
  position: absolute;
  right: ${size(35)};
  top: ${size(10)};
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Range = styled.div`
  margin: 0;
  min-width: ${size(973)};
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 1024px) {
    margin: ${size(10)} 0 10px ${size(-8)}; //mb
    min-width: ${sizePlus(273)};
    max-width: ${sizePlus(279)};
    justify-content: space-between;
  }
`;

export const StartYear = styled.div`
  font-weight: 700;
  font-size: ${size(200)};
  line-height: ${size(160)};
  letter-spacing: -0.02em;
  text-align: center;
  color: #5d5fef;
  margin: 0 ${size(85)} 0 ${size(-25)};

  @media (max-width: 1024px) {
    font-size: ${sizePlus(56)};
    line-height: 100%;
    margin: 0;
  }
`;

export const EndYear = styled.div`
  font-weight: 700;
  font-size: ${size(200)};
  line-height: ${size(160)};
  letter-spacing: -0.02em;
  text-align: center;
  color: #ef5da8;

  @media (max-width: 1024px) {
    font-size: ${sizePlus(56)};
    line-height: 100%;
  }
`;

export const StyledNavMain = styled.div`
  margin: 0;
  display: flex;
  gap: ${size(19)};
  position: absolute;
  z-index: 3;
  top: ${size(735)};
  left: ${size(80)};


  @media (max-width: 1024px) {
    margin: 0;
    gap: ${size(13)};
    top: unset;
    left: unset;
    bottom: ${size(23)};
  }

  .swiper-button-prev-main,
  .swiper-button-next-main {
    margin: 0;
    padding: 0;
    border: solid ${size(1)} #9ba5ba;
    background-color: transparent;
    display: flex;
    width: ${size(50)};
    height: ${size(50)};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease, background-color 0.3s ease;

    @media (max-width: 1024px) {
      width: ${sizePlus(25)};
      height: ${sizePlus(25)};
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  .swiper-button-prev-main {
    &::after {
      position: absolute;
      content: "";
      border: solid #42567a;
      border-width: 0 ${size(2)} ${size(2)} 0;
      display: inline-block;
      padding: ${size(5)};
      transform: rotate(135deg);
      @media (max-width: 1024px) {
        border-width: 0 ${sizePlus(3)} ${sizePlus(3)} 0;
        padding: ${sizePlus(2)};
      }
    }
  }

  .swiper-button-next-main {
    &::after {
      position: absolute;
      content: "";
      border: solid #42567a;
      border-width: 0 ${size(2)} ${size(2)} 0;
      display: inline-block;
      padding: ${size(5)};
      transform: rotate(-45deg);
      @media (max-width: 1024px) {
        border-width: 0 ${sizePlus(3)} ${sizePlus(3)} 0;
        padding: ${sizePlus(2)};
      }
    }
  }

  .swiper-button-prev-main.swiper-button-disabled,
  .swiper-button-next-main.swiper-button-disabled {
    opacity: 0.5;
  }
`;

export const CircularPaginationWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  /* transform-origin: center center; */
  transition: transform 0.3s ease;
  z-index: 3;
  --rotation: 0deg;                       /* начальная ротация */
  transform: rotate(var(--rotation));
  transform: rotate(var(--rotation, 0deg));

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${size(1)} solid #ccc;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const Bullet = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  width: ${size(6)};
  height: ${size(6)};
  border-radius: 50%;
  background-color: #42567a;
  border: solid ${size(1)} transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    width 0.3s ease,
    height 0.3s ease,
    border 0.3s ease;
  transform-origin: center center;
  z-index: 3;

  .bullet-number {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
               rotate(calc(-1 * var(--rotation)));
    /* убираем любые transition на transform, чтобы не было «дребезга» */
    transition: opacity 0.3s ease;
  }

  &:hover {
    border: solid ${size(1)} #9299a8;
    width: ${size(56)};
    height: ${size(56)};
    background-color: #f4f5f9;
  }

  &:hover .bullet-number,
  &[data-active="true"] .bullet-number {
    opacity: 1;
    font-weight: 400;
    font-size: ${size(20)};
    line-height: ${size(30)};
    letter-spacing: 0;
  }

  &[data-active="true"] {
    border: solid ${size(1)} #9299a8;
    width: ${size(56)};
    height: ${size(56)};
    background-color: #f4f5f9;
    transform: translate(-50%, -50%)
               rotate(calc(1 * var(--rotation)));

  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  content: "";
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
`;



export const SlideCounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${size(16)};
  position: absolute;
  bottom: 14%;
  left: ${size(40)};

  @media (max-width: 1024px) {
    margin-bottom: 0;
    left: unset;
    bottom: unset;
    top: ${sizePlus(344)};
  }
`;

export const SlideCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  font-size: ${size(14)};
  line-height: 100%;
  letter-spacing: 0;
  color: #42567a;
`;

export const CurrentSlide = styled.span`
  /* color: #007aff;  */
  @media (max-width: 1024px) {
    font-size: ${sizePlus(14)};
    line-height: 100%;
  }
`;

export const Separator = styled.span`
  /* color: #999; */
  @media (max-width: 1024px) {
    font-size: ${sizePlus(14)};
    line-height: 100%;
  }
`;

export const TotalSlides = styled.span`
  /* color: #ccc; */
  @media (max-width: 1024px) {
    font-size: ${sizePlus(14)};
    line-height: 100%;
  }
`;
