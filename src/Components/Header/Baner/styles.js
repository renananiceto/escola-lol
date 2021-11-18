import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.back});
  background-repeat: no-repeat;
  background-size: cover;
`
export const Wrapper = styled.div`


`