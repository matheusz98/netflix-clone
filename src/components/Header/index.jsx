import { useState, useEffect } from "react";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderLink,
  LogoImg,
  HeaderUser,
  HeaderProfile,
  ProfileImg,
} from "./style";

const Header = ({ black }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  return (
    <HeaderContainer scrollNav={scrollNav}>
      <HeaderLogo>
        <HeaderLink>
          <LogoImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </HeaderLink>
      </HeaderLogo>
      <HeaderUser>
        <HeaderProfile>
          <ProfileImg
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User"
          />
        </HeaderProfile>
      </HeaderUser>
    </HeaderContainer>
  );
};

export default Header;
