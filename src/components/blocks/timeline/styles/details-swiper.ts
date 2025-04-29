import styled from "styled-components";

export const CustomDetailsSwiperSlide = styled.div`
  transition: opacity 0.3s ease;
  /* margin: 56px 0 0; */

  .swiper-slide.swiper-slide-active {
    opacity: 1;
  }
  .swiper-slide.swiper-slide-next {
    opacity: 0.2;
  }
`;

export const StyledDetailsSwiper = styled.div`
  position: relative;

  h2 {
    display: none;

    @media (max-width: 1024px) {
      display: block;
      font-weight: 700;
      font-size: 14px;
      line-height: 145%;
      letter-spacing: 0;
      position: relative;
      padding: 0 0 40px;
      margin: 0 0 20px;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #c7cdd9;
        bottom: 0;
      }
    }
  }

  .swiper {
    max-width: 1450px;
  }


  .swiper-slide {
    cursor: pointer;
    width: 320px;
    max-width: 320px;
    height: 135px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &:nth-child(2n) {
      max-width: 400px;
    }

    @media (max-width: 1024px) {
      max-width: 166px;
      transition: opacity 0.3s ease;


      &:nth-child(2n) {
        max-width: 166px;
      }
    }
  }

  .swiper-slide.swiper-slide-next {
    @media (max-width: 1024px) {
    opacity: 0.4;}
  }

  h3 {
    font-family: "Bebas Neue", Impact, sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 120%;
    letter-spacing: 0;
    text-transform: uppercase;
    color: #3877ee;
    margin: 0 0 15px;
    padding: 0;

    @media (max-width: 1024px) {
      font-weight: 400;
      font-size: 16px;
    }
  }

  p {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0;

    @media (max-width: 1024px) {
      font-weight: 400;
      font-size: 14px;
      line-height: 145%;
    }
  }
`;

export const StyledNavDetails = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    box-shadow: 0px 0px 15px 0px #3877ee1a;

    @media (max-width: 1024px) {
      width: 25px; //?
      height: 25px; //?
    }
  }

  .swiper-button-prev-details {
    &::after {
      position: absolute;
      content: "";
      border: solid #3877ee;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      /* right: 30%; */
      transform: rotate(135deg);

      @media (max-width: 1024px) {
        border-width: 0 3px 3px 0;
        padding: 2px;
      }
    }
  }

  .swiper-button-next-details {
    &::after {
      position: absolute;
      content: "";
      border: solid #42567a;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      /* right: 30%; */
      transform: rotate(-45deg);
      @media (max-width: 1024px) {
        border-width: 0 3px 3px 0;
        padding: 2px;
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
