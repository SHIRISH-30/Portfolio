import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  width: 120px;
  height: 80px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  font-size: 35px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #da4ea2;
    text-decoration: underline;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 28px;
  height: 30px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.webp" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>
              <Link href="https://github.com/SHIRISH-30" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://drive.google.com/file/d/11rq00_rsdqB6f0y25kodhX_JnARKRzfH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search3.png" />
          <Button>HIRE NOW</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
