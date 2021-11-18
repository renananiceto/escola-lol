import React, { useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";

import Menu from '../Components/Header/Menu';
import Baner from "../Components/Header/Baner";
import Person from "../Components/Person";
import Play from '../Components/Play'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    }
`

const IndexPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 600,
    });
  }, [])

  return (
    <main>
      <GlobalStyle />
      <Menu />
      <Baner />
      <Person />
      <Play />
    </main>
  )
}

export default IndexPage
