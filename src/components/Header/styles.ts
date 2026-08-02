import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 0 1.6rem;
  `}

  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const ContainerBackground = styled.div`
  position: absolute;
  content: '';
  z-index: -1;
  background-image: url('/assets/images/pattern-rings.svg');
  transform: translate(-50%, 97%);
  background-repeat: no-repeat;
  width: 530px;
  height: 129px;

  &::after {
    position: absolute;
    content: '';
    z-index: -1;
    background-image: url('/assets/images/pattern-circle.svg');
    transform: translate(125%, 100%);
    background-repeat: no-repeat;
    width: 530px;
    height: 129px;
  }
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    ${theme.variants.heading.m}
  `}

  letter-spacing: -0.033rem;
  margin-bottom: 2rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  img {
    width: 2rem;
  }
`;

export const ContainerPicture = styled.picture`
  width: 17.4rem;
  margin-top: -40%;
`;

export const ContainerBio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding-bottom: 8rem;

  h1 {
    ${({ theme }) => css`
      color: ${theme.colors.white};
    `}

    font-size: 4rem;
    letter-spacing: -0.114rem;
    margin-bottom: 2rem;
    text-align: center;
    line-height: 4rem;
    margin-bottom: 2.4rem;
  }

  p {
    ${({ theme }) => css`
      color: ${theme.colors.gray};
      font-weight: ${theme.font.regular};
    `}

    font-size: 1.6rem;
    text-align: center;
    line-height: 2.6rem;
    margin-bottom: 2.4rem;
  }

  a {
    ${({ theme }) => css`
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      border-bottom: 2px solid ${theme.colors.green};
    `}

    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: 0.229rem;
    position: relative;
    text-transform: uppercase;
    padding-bottom: 1rem;
  }
`;
