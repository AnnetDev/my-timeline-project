import styled from "styled-components";

export const StyledWrapper = styled.section`
  // background-color: red;
  border-left: solid 1px #e2e5ec;
  border-right: solid 1px #e2e5ec;
  padding: 170px 80px 104px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #333;
  position: relative;
`;

export const Dot = styled.div<{ x: number; y: number; active: boolean }>`
  position: absolute;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  transform: translate(-50%, -50%);
  width: ${({ active }) => (active ? 16 : 12)}px;
  height: ${({ active }) => (active ? 16 : 12)}px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#0070f3" : "#ccc")};
  cursor: pointer;
`;

export const TimelineWrapper = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
`;

export const SlideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

export const Range = styled.p`
  margin: 5px 0 0;
  font-size: 1rem;
  color: #666;
  display: flex;
  flex-flow: row wrap;
  gap: 120px;
`;

export const StartYear = styled.div`
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -2%;
  text-align: center;
  color: #5d5fef;
`;

export const EndYear = styled.div`
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -2%;
  text-align: center;
  color: #ef5da8;
`;

export const StyledTitle = styled.h1`
  // font-family: PT Sans;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #42567a;
  max-width: 353px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 120px;
    background-image: linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%);
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
  }
`;
