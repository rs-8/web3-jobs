import React, {FC} from 'react'
import {Button} from '@geist-ui/react'
import {
  MobileMenuButtonItem,
  MobileMenuButtons,
  MobileMenuContentWrapper,
} from './index.styles'

export const MobileMenuContent: FC = () => {
  return (
    <MobileMenuContentWrapper>
      <MobileMenuButtons>
        <MobileMenuButtonItem>
          <Button width='100%'>Login</Button>
        </MobileMenuButtonItem>
        <MobileMenuButtonItem>
          <Button width='100%' type='success'>
            Sign up
          </Button>
        </MobileMenuButtonItem>
      </MobileMenuButtons>
    </MobileMenuContentWrapper>
  )
}
