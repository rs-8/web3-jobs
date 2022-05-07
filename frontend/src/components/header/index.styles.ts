import { Button } from '@geist-ui/react'
import { styled } from 'src/core/styled'

export const HeaderWrapper = styled.div`
  --header-height: 64px;

  background-color: #fff;
  min-height: var(--header-height);
  width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    backdrop-filter: saturate(180%) blur(5px);
    transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
    background-color: hsla(0, 0%, 100%, 0.8);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
`

export const HeaderBlock = styled.header`
  --full: 1048px;

  display: flex;
  flex-direction: row;
  align-items: center;
  width: var(--full);
  margin: auto;
  padding-left: 24px;
  padding-right: 24px;
`

export const LogoContainer = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const LogoButton = styled(Button)`
  &&& {
    border: none;
    padding: 0;

    .text {
      display: flex;
    }
  }
`

export const ContentCenter = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  background-color: transparent;
`

export const ContentRight = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderRight = styled.div`
  margin-left: auto;
`

export const AuthBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

export const SignupButton = styled(Button)`
  &&& {
    font-size: 14px;
  }
`
