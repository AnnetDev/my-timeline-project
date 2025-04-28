import styled from "styled-components";

export const StyledTimelineSwiper = styled.div`
  padding: 38px 0 41px;
  width: 100%;
  display: flex;

  .swiper {
    min-width: 1400px;
  }

  .swiper-wrapper {
  }

  .swiper-slide {
    height: 100%;
    min-height: 609px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    position: absolute;
    top: 10%;
    left: 70%;
  }
`;

export const SlideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 973px;
  height: 160px;
  border-radius: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  position: absolute;
  right: 35%;
  top: 10%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Range = styled.div`
  margin: 5px 0 0;
  min-width: 973px;
  display: flex;
  flex-flow: row wrap;
  gap: 120px;

  @media (max-width: 1024px) {
    gap: 33px;
  }
`;

export const StartYear = styled.div`
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -2%;
  text-align: center;
  color: #5d5fef;

  @media (max-width: 1024px) {
    font-size: 56px;
    line-height: 100%;
  }
`;

export const EndYear = styled.div`
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -2%;
  text-align: center;
  color: #ef5da8;
  @media (max-width: 1024px) {
    font-size: 56px;
    line-height: 100%;
  }
`;

export const StyledNavMain = styled.div`
  margin: 0 0 56px;
  display: flex;
  gap: 8px;

  .swiper-button-prev-main,
  .swiper-button-next-main {
    margin: 0;
    padding: 0;
    border: solid 1px #9ba5ba;
    background-color: transparent;
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;

    @media (max-width: 1024px) {
      width: 25px;
      height: 25px;
    }
  }

  .swiper-button-prev-main {
    &::after {
      position: absolute;
      content: "";
      border: solid #42567a;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(135deg);

      @media (max-width: 1024px) {
        border-width: 0 3px 3px 0;
        padding: 2px;
      }
    }
  }

  .swiper-button-next-main {
    &::after {
      position: absolute;
      content: "";
      border: solid #42567a;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(-45deg);
      @media (max-width: 1024px) {
        border-width: 0 3px 3px 0;
        padding: 2px;
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
  transform-origin: center center;
  transition: transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  /* .bullet-inner {
    width: 8px;
    height: 8px;
    background-color: gray;
    border-radius: 50%;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bullet-number {
    opacity: 0;
    font-size: 10px;
    color: white;
    transition: opacity 0.3s;
  } */
`;

export const Bullet = styled.button<{ active: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #42567a;
  border: solid 1px transparent;
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
  }

  &:hover {
    border: solid 1px #9299a8;
    width: 56px;
    height: 56px;
    background-color: #f4f5f9;
  }

  &:hover .bullet-number,
  &[data-active="true"] .bullet-number {
    opacity: 1;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0%;
  }

  &[data-active="true"] {
    border: solid 1px #9299a8;
    width: 56px;
    height: 56px;
    background-color: #f4f5f9;
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  content: "";
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 3;
`;
