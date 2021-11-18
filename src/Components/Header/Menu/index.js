import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

import Logo from '../../../images/logoporo.png'

export default function Menu() {

  const data = useStaticQuery(graphql`
      query {
        alldata{
          headers{
            menu
            logo{
              url
            }
          }
        }
      }
   `)

  const { menu, logo } = data.alldata.headers[0]
  console.log(data.alldata.headers[0])
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxLogo>
          <img src={Logo} alt="#" />
        </S.BoxLogo>
        {menu.map((item, index) => (
          <S.Paragraph key={index}>
            {item}
          </S.Paragraph>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
