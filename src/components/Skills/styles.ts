import styled, { css } from 'styled-components';

export const ContainerSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.6rem;
  gap: 2.4rem;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.6rem;

  h3 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.bold};
    line-height: 4rem;
    letter-spacing: -0.1rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: ${({ theme }) => theme.font.regular};
    color: ${({ theme }) => theme.colors.gray};
  }
`;
