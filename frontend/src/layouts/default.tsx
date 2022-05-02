import React, {FC} from 'react'
import {Page} from '@geist-ui/react'
import styled from 'styled-components'
import {Header} from 'src/components/header'

const PageWrapper = styled.div``

const DefaultLayout: FC = ({children}) => {
  return (
    <PageWrapper>
      <Header />
      <Page.Content>{children}</Page.Content>
    </PageWrapper>
  )
}

export default DefaultLayout
