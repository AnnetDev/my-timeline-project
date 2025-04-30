import styled from "styled-components";
import { size, sizePlus } from "../components/utils/size";


export const Container = styled.div`
  width: ${size(1920)};
  margin: 0 auto;
  padding: 0 ${size(160)} 0 ${size(320)};
  
  @media (max-width: 1024px) {
    padding: 0 ${sizePlus(20)};
    min-width: ${sizePlus(320)};
    max-width: 100%;
  }
`;
