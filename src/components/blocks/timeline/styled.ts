import styled from "styled-components";

export const StyledWrapper = styled.section`
  border-left: solid 1px #e2e5ec;
  border-right: solid 1px #e2e5ec;
  padding: 170px 40px 104px;
  /* min-width: 1440px;
  width: 100%; */

  @media (max-width: 1024px) {
    padding: 59px 0 13px;
    border-left: none;
    border-right: none;
    min-width: 320px;
  }
`;

export const TimelineWrapper = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0;
  }
`;


export const StyledTitle = styled.h1`
  margin: 0 0 96px 40px;
  padding: 0;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #42567a;
  max-width: 353px;
  position: absolute;

  &::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 120px;
    background-image: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
  }

  @media (max-width: 1024px) {
    margin: 0 0 56px;
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
    max-width: 123px;
    &::after {
      display: none;
    }
  }
`;





