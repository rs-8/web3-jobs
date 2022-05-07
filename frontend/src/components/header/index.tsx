import React, {useState, useEffect, useRef, FC} from 'react'
import {Link, useMediaQuery} from '@geist-ui/react'
import {useRouter} from 'next/router'
import {Logo as LogoIcon} from './logo'
import {
  AuthBlock,
  LogoButton,
  ContentCenter,
  ContentRight,
  HeaderWrapper,
  HeaderBlock,
  HeaderRight,
  LogoContainer,
  Logo,
  SignupButton,
} from './index.styles'
import {MobileMenu} from './mobile-menu'
import {MobileMenuContent} from './mobile-menu-content'

interface HeaderProps {
  contentCenter?: React.ReactNode | React.ReactElement | string
}

export const Header: FC<HeaderProps> = ({contentCenter}) => {
  const router = useRouter()
  const upMD = useMediaQuery('md', {match: 'up'})

  const [isHideContent, setHideContent] = useState<boolean>(false)
  const refHeader = useRef(null)

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const header: any = refHeader.current
    const sticky = header.offsetTop

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
        setHideContent(true)
      } else {
        header.classList.remove('sticky')
        setHideContent(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClickLogo = () => {
    router.push('/')
  }

  const handleClickSignUp = () => {
    router.push('/signup')
  }

  return (
    <HeaderWrapper ref={refHeader}>
      <HeaderBlock>
        <LogoContainer>
          <Logo>
            <LogoButton auto effect={false} onClick={handleClickLogo}>
              <LogoIcon />
            </LogoButton>
          </Logo>
          {!upMD && (
            <>
              <MobileMenu
                isOpen={menuOpen}
                onToggle={() => setMenuOpen(!menuOpen)}
              />
              {menuOpen && <MobileMenuContent />}
            </>
          )}
        </LogoContainer>
        {upMD && (
          <ContentCenter>{!isHideContent && contentCenter}</ContentCenter>
        )}
        {upMD && (
          <ContentRight>
            <HeaderRight>
              <span style={{boxSizing: 'border-box'}}>
                <AuthBlock>
                  <Link href='/login'>Login</Link>
                  <span style={{marginLeft: '24px'}}>
                    <SignupButton
                      auto
                      scale={0.7}
                      type='secondary'
                      onClick={handleClickSignUp}>
                      Sign Up
                    </SignupButton>
                  </span>
                </AuthBlock>
              </span>
            </HeaderRight>
          </ContentRight>
        )}
      </HeaderBlock>
    </HeaderWrapper>
  )
}
