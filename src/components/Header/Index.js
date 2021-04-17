import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://scontent.fgel3-1.fna.fbcdn.net/v/t1.6435-1/p160x160/150862954_3825448567520170_7019897375448360413_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=cFXphzyTUdEAX-SBXlv&_nc_ht=scontent.fgel3-1.fna&tp=6&oh=c6a986504545d086007d1f7f479e8ad7&oe=6096A767"/>
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
