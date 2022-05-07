import React, {FC} from 'react'
import {styled, css} from 'src/core/styled'

const MenuIndicator = styled.button`
  width: 24px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: transparent;
  border: none;
  transition: background-color 0.2s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
`

const MenuToggleWrap = styled.div<{isOpen: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 22px;
    background-color: ${({theme}) => theme.palette.foreground};
    transition: transform 0.15s ease;
  }

  &::before {
    ${({isOpen}) =>
      isOpen
        ? css`
            transform: translateY(1px) rotate(45deg);
          `
        : css`
            transform: translateY(-4px) rotate(0deg);
          `};
  }
  &::after {
    ${({isOpen}) =>
      isOpen
        ? css`
            transform: translateY(0) rotate(-45deg);
          `
        : css`
            transform: translateY(4px) rotate(0deg);
          `}
  }
`

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export const MobileMenu: FC<MobileMenuProps> = ({isOpen, onToggle}) => {
  return (
    <MenuIndicator onClick={onToggle}>
      <MenuToggleWrap isOpen={isOpen} />
    </MenuIndicator>
  )
}
