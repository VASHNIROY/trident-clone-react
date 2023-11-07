import styled from "styled-components";

export const HomeCommonButton = styled.button`
  width: 150px;
  border-radius: 10px;
  height: 45px;
  margin-top: 5%;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  background-color: #2b72ee;
  color: white;

  &:hover {
    background-color: #14397a;
  }
`;

export const HomeSmallSideBlueHeadings = styled.p`
  color: #3572ee;
  font-weight: bold;
`;

export const HomeMainBoldHeadings = styled.h1`
  font-weight: 700;
  @media screen and (max-width: 700px) {
    font-size: 28px;
    text-align: center;
    padding: 30px;
  }
  @media screen and (min-width: 701px) {
    font-size: 50px;
  }
`;
