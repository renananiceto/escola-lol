import styled from "styled-components";


export const Container = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-shadow: 1px 11px 11px 5px rgba(0,0,0,0.23); 
  box-shadow: 1px 11px 11px 5px rgba(0,0,0,0.23);
`
export const Wrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 107px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Paragraph = styled.div`
  display: flex;
  cursor: pointer;
  color: black;
  transition: 0.3s;
  :hover{
    opacity: 0.7;
  }
`

export const BoxLogo = styled.div`
width: 50px;
img{
  width: 100%;
  cursor: pointer;
}
`

