import styled from "styled-components";
import { size } from "../../../utils/size";

export const StyledWrapper = styled.section`
  border-left: solid 1px #e2e5ec;
  border-right: solid 1px #e2e5ec;
  padding: ${size(170)} ${size(40)} ${size(104)};
  overflow: hidden;

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
  margin: 0 0 ${size(96)} ${size(40)};
  padding: 0;
  font-weight: 700;
  font-size: ${size(56)};
  line-height: 120%;
  letter-spacing: 0%;
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
    left: ${size(-80)};
    transform: translateY(-50%);
  }

  @media (max-width: 1024px) {
    position: static;
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
