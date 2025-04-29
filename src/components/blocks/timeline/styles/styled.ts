import styled from "styled-components";
import { size, sizePlus } from "../../../utils/size";

export const StyledWrapper = styled.section`
margin: 0 0 ${size(20)};
  border-left: solid 1px #e2e5ec;
  border-right: solid 1px #e2e5ec;
  padding: ${size(167)} ${size(40)} ${size(104)};
  overflow: hidden;
  height: fit-content;
  position: relative;
  height: max-content;

  @media (max-width: 1024px) {
    margin: 0 0 ${sizePlus(20)};
    padding: ${sizePlus(58)} 0 ${sizePlus(13)};
    border-left: none;
    border-right: none;
    min-width: ${sizePlus(280)};
    overflow: visible;
    min-height: ${sizePlus(568)};
  }

  .custom-swiper-pagination {
    display: none;

    @media (max-width: 1024px) {
      margin: 0;
      padding: 0;
      display: flex;
      position: absolute;
      width: max-content;
      bottom: ${sizePlus(32)};
      left: 50%;
      transform: translateX(-50%);
      z-index: 4;
      row-gap: ${sizePlus(10)};
    column-gap: 0;
    }
  }

  .swiper-pagination-bullet {
    margin: 0;
    padding: 0;
    width: ${sizePlus(6)};
    height: ${sizePlus(6)};
    z-index: 4;

    background-color: #adb5c6;
    transition: background-color 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    z-index: 4;
    background-color: #42567a;
  }
`;

export const TimelineWrapper = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0;
    min-height: ${sizePlus(300)};
    height: fit-content;


  }
`;

export const StyledTitle = styled.h1`
  margin: 0 0 0 ${size(40)}; //${size(96)}
  padding: 0;
  font-weight: 700;
  font-size: ${size(56)};
  line-height: 120%;
  color: #42567a;
  max-width: ${size(353)};
  position: absolute;

  &::after {
    position: absolute;
    content: "";
    width: ${size(5)};
    height: ${size(120)};
    background-image: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);
    top: 50%;
    left: -23%;
    transform: translateY(-50%);
  }

  @media (max-width: 1024px) {
    position: static;
    margin: 0 0 ${sizePlus(56)};
    font-size: ${sizePlus(20)};
    font-weight: 700;
    line-height: 120%;
    max-width: ${sizePlus(123)};

    &::after {
      display: none;
    }
  }
`;
