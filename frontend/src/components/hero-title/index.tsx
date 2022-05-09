import React, { FC, useMemo } from 'react'
import { HeroTitleH1, TextWrapper, Text, Content } from './index.styles'

export const HeroTitle: FC = () => {
  const data = useMemo(
    () => [
      {
        '--content': 'Find your',
        '--padding': '0.05em',
        '--start-color': '#007CF0',
        '--end-color': '#00DFD8',
      },
      {
        '--content': 'Web3',
        '--padding': '0.05em',
        '--start-color': '#7928CA',
        '--end-color': '#FF0080',
      },
      {
        '--content': 'Job',
        '--padding': '0.05em',
        '--start-color': '#FF4D4D',
        '--end-color': '#F9CB28',
      },
    ],
    [],
  )

  return (
    <HeroTitleH1>
      {data.map((value, index) => (
        <TextWrapper style={value as React.CSSProperties} key={index}>
          <Content selectId={index + 1}>{value['--content']}</Content>
          <Text selectId={index + 1}>{value['--content']}</Text>
        </TextWrapper>
      ))}
    </HeroTitleH1>
  )
}
