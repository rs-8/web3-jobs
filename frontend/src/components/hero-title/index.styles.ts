import { styled } from 'src/core/styled'
import { Keyframes, keyframes } from 'styled-components'

export const HeroTitleH1 = styled.h1`
  font-size: 8rem;
  text-align: center;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.06em;
  margin: 0 0 var(--geist-space-16x);

  @media (min-width: 1200px) {
    font-size: 10rem;
  }
`

const animationMap: Record<number, Keyframes> = {
  1: keyframes`
    0%, 16.667%, 100% {
      opacity: 1;
    }
    33.333%, 83.333% {
      opacity: 0;
    }
  `,
  2: keyframes`
    0%, 100% {
      opacity: 0;
    }
    33.333%, 50% {
      opacity: 1;
    }
    16.667%, 66.667% {
      opacity: 0;
    }
  `,
  3: keyframes`
    0%, 50%, 100% {
      opacity: 0;
    }
    66.667%, 83.333% {
      opacity: 1;
    }
  `,
}

const contentAnimationMap: Record<number, Keyframes> = {
  1: keyframes`
    0%, 16.667%, 100% {
      opacity: 0;
    }
    33.333%, 83.333% {
      opacity: 1;
    }
  `,
  2: keyframes`
    0%, 100% {
      opacity: 1;
    }
    33.333%, 50% {
      opacity: 0;
    }
    16.667%, 66.667% {
      opacity: 1;
    }
  `,
  3: keyframes`
    0%, 50%, 100% {
      opacity: 1;
    }
    66.667%, 83.333% {
      opacity: 0;
    }
  `,
}

export const TextWrapper = styled.span`
  position: relative;
  display: block;
  user-select: none;
`

export const Content = styled.span<{ selectId: number }>`
  position: absolute;
  display: block;
  width: 100%;
  text-align: center;
  color: black;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: var(--padding);
  padding-right: var(--padding);
  animation: ${({ selectId }) => contentAnimationMap[selectId]} 8s infinite;
`

export const Text = styled.span<{ selectId: number }>`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: var(--padding);
  padding-right: var(--padding);
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  z-index: 1;
  animation: ${({ selectId }) => animationMap[selectId]} 8s infinite;
`
