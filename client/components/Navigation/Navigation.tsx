import { useState, MouseEvent, FC, ReactElement } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileHomeLink, DesktopMenuContainer, DesktopMenuLink, DesktopLink, MobileMenu, MobileMenuContainer, DesktopHomeLink, MobileLink } from './Styles';

const pages = ['about', 'users'];

const renderDesktopNav = ({ handleCloseNavMenu }) => (
  <>
    <DesktopHomeLink href='/'>
      HOME
    </DesktopHomeLink>

    <DesktopMenuContainer>
      {pages.map((page) => (
        <DesktopLink href={page} key={page}>
          <DesktopMenuLink
            onClick={handleCloseNavMenu}
          >
            {page}
          </DesktopMenuLink>
        </DesktopLink>
      ))}
    </DesktopMenuContainer>
  </>
)

const renderMobileNav = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) => (
  <>
    <MobileMenuContainer>
      <IconButton
        size='large'
        onClick={handleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>

      <MobileMenu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MobileLink href={page} key={page}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          </MobileLink>
        ))}
      </MobileMenu>
    </MobileMenuContainer>

    <MobileHomeLink href='/'>
      HOME
    </MobileHomeLink>
  </>
)

const Navigation: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>

          {(renderDesktopNav({
            handleCloseNavMenu
          }))}

          {(renderMobileNav({
            handleOpenNavMenu,
            anchorElNav,
            handleCloseNavMenu,
          }))}

        </Toolbar>
      </Container>
    </AppBar >
  );
}

export default Navigation;
