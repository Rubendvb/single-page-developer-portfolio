import * as S from './styles';
export default function Header() {
  return (
    <S.Header>
      <S.Title>adamkeyes</S.Title>

      <S.SocialMediaContainer>
        <S.SocialMedia>
          <img src="/assets/images/icon-github.svg" alt="" />
          <img src="/assets/images/icon-frontend-mentor.svg" alt="" />
          <img src="/assets/images/icon-linkedin.svg" alt="" />
          <img src="/assets/images/icon-twitter.svg" alt="" />
        </S.SocialMedia>

        <S.ContainerPicture>
          <source media="(min-width: 1024px)" srcSet="/assets/images/image-profile-desktop.webp" />
          <source media="(min-width: 768px)" srcSet="/assets/images/image-profile-tablet.webp" />
          <img src="/assets/images/image-profile-mobile.webp" alt="" />
        </S.ContainerPicture>
      </S.SocialMediaContainer>

      <div>
        Nice to meet you! I'm Adam Keyes. Based in the UK, I'm a front-end developer passionate
        about building accessible web apps that users love. Contact me
      </div>
    </S.Header>
  );
}
