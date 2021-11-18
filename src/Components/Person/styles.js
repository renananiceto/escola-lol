import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 flex-direction: column;
`

export const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`


export const BoxMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;

  button{
    border: none;
    background-color: orange ;
  }

  img{
    width: 100%;
  }
`


export const BoxTitle = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  font-size: 30px;
`