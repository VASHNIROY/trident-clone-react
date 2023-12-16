import { styled } from "styled-components";

export const HomeHeroSectionReadmorebtns = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 80%;
  border-radius: 8px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  position: relative;

  @media screen and (min-width: 480px) {
    top: 0;
    bottom: 0;
    width: 30%;
  }
  @media screen and (min-width: 1015px) {
    top: 0;
    bottom: 0;
    width: 30%;
  }
`;
