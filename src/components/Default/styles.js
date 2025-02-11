import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  svg {
    width: 100px;
    height: 100px;
    color: black;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Info = styled.span`
  font-size: 20px;
  text-align: center;
  max-width: 500px;
  font-family: inter;
`;

export const Logo =styled.img`
  width: 200px;
`