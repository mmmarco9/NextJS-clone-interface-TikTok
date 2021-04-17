import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from "./styles";

import User from "../User";

function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas </FollowingHeader>
        <User
          user={{
            name: "Will Smith",
            username: "WillSmith",
            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_720x720.jpeg?x-expires=1618311600&x-signature=x3TmgpKXvBss9E2EyzPKyWlj1tY%3D",
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>© 2021 TikTok</Links>
      </InfoContainer>
    </Container>
  );
}

export default Sidebar;
