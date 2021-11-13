import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import MediaCard from '../components/Card';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Headroom from 'react-headroom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BackgroundHeader from '../images/robot_banner.png';
import LogoHeader from '../images/touchwifi_small.png';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import ComputerIcon from '@material-ui/icons/Computer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Link } from 'gatsby-theme-material-ui';
import { navigate } from "gatsby"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: '50px'
  },
  title: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  iconButton: {
    "& .MuiIconButton-label": { fontSize: '19px' }
  },
  styleAnchor: {
    'text-decoration': 'inherit',
    color: 'inherit',
    cursor: 'auto',
    width: '100%'
  }
}));

export default function MainContainerv2({ children }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onClickItemMenu = (event, destiny) => {
    //console.log(destiny);
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }

    navigate(destiny, {replace: true });
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{
        zIndex: 99999999,
      }}
    >
      <MenuItem>
        <IconButton className={classes.iconButton} color="inherit" href="/" rel="noopener noreferrer">
          <HomeIcon />
        </IconButton>
        <p>Início</p>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
          <LibraryBooksIcon />
        </IconButton>
        <p>Notícias</p>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
          <ComputerIcon />
        </IconButton>
        <p>Tecnologia</p>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
          <EmojiEmotionsIcon />
        </IconButton>
        <p>Entretenimento</p>
      </MenuItem>
      <MenuItem onClick={(event) => onClickItemMenu(event, '/games')}>
        <IconButton className={classes.iconButton} color="inherit" rel="noopener noreferrer">
          <SportsEsportsIcon />
        </IconButton>
        <p>Games</p>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
          <MonetizationOnIcon />
        </IconButton>
        <p>Promoções</p>
      </MenuItem>
      <MenuItem onClick={(event) => onClickItemMenu(event, '/cupons')}>
        <IconButton className={classes.iconButton} color="inherit"  rel="noopener noreferrer">
          <MoneyOffIcon />
        </IconButton>
        {/* <Link to="/cupons" className={classes.style} >Cupons</Link> */}
        <p>Cupons</p>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <div>
      <Headroom
        onPin={() => console.log('pinned')}
        onUnpin={() => console.log('unpinned')}
        wrapperStyle={{ marginBottom: 2 }}
        style={{
          zIndex: 9999999,
          background: 'rgb(66, 168, 236)',
          boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
          display: 'flex'
        }}
      >
        <div className={classes.grow}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton> */}
              <img src={LogoHeader} className={classes.menuButton} />
              <Typography className={classes.title} variant="h6" noWrap>
                iNFO AQUI
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Pesquisar…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton className={classes.iconButton} color="inherit" href="/" rel="noopener noreferrer">
                  <HomeIcon />Início
                </IconButton>
                <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
                  <LibraryBooksIcon />Notícias
                </IconButton>
                <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
                  <ComputerIcon />Tecnologia
                </IconButton>
                <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
                  <EmojiEmotionsIcon />Entretenimento
                </IconButton>
                <IconButton className={classes.iconButton} color="inherit" href="/games" rel="noopener noreferrer">
                  <SportsEsportsIcon />Games
                </IconButton>
                <IconButton className={classes.iconButton} color="inherit" href="/promocao" rel="noopener noreferrer">
                  <MonetizationOnIcon />Promoções
                </IconButton>
                <IconButton className={classes.iconButton} color="inherit" href="/cupons" rel="noopener noreferrer">
                  <MoneyOffIcon />Cupons
                </IconButton>
                {/* <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton> */}
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </div>

        {/* <img src={LogoHeader} style={{ 'position': 'absolute' }}></img>
        <Container style={{ padding: 10 }}>
          <ButtonGroup size="large" color="inherit"
            variant="text"
            style={{
              color: 'white',
            }}
            aria-label="text primary button group">
            <Button href="/">Home</Button>
            <Button href="/promocao">Promoções</Button>
            <Button href="/cupons">Cupons</Button>
            <Button href="/cupons">Cupons</Button>
            <Button href="/cupons">Cupons</Button>
          </ButtonGroup>
        </Container> */}
      </Headroom>
      <Container maxWidth="lg">
        <Box my={4}>
          {children}
        </Box>
      </Container>
      <Copyright />
    </div>
  );
}
