import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export default function Person() {
  const data = useStaticQuery(graphql`
  query {
    alldata{
      boxPersonas{
        title
        personas{
          title
          btn
          img{
            url
          }
        }
      }
    }
  }
`)

  const { title, personas } = data.alldata.boxPersonas[0]
  console.log('AAAAA', data.alldata.boxPersonas[0].personas)
  return (
    <S.Container>
      <S.BoxTitle>
        {title}
      </S.BoxTitle>
      <S.Wrapper>
        {personas.map((item, index) => (
          <S.BoxMap Key={index}>
            <img src={item.img.url} alt='#' />
            {item.title}
            <button>{item.btn}</button>
          </S.BoxMap>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
