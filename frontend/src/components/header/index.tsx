import React from 'react'
import {styled} from 'src/core/styled'

const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.palette.errorLight};
  width: 100%;
  height: 120px;
`

export const Header = () => {
  return <HeaderWrapper />
}
