import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.variants.heading.m}
  `}

  letter-spacing: -0.033rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 2.56rem;
`;

export const ContainerPicture = styled.picture`
  width: 17.4rem;
  margin-top: -40%;
  margin-bottom: -24%;
`;
