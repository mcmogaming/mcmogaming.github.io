import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import { ReactComponent as GithubIcon } from "../../images/github.svg"
import { ReactComponent as LinkedinIcon } from "../../images/linkedin.svg"
import EmailIcon from "@mui/icons-material/Email"
import { SvgIcon } from "@mui/material"
import Email from "@mui/icons-material/Email"
import ResumePdf from "../../fullresume.pdf"

const pages = ["Me", "Projects", "Resume"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = (page) => {
    return () => {
      if (page) {
        if (page == "Resume") {
          window.open(ResumePdf)
        }
      }
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mohammad Rahman
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mohammad Rahman
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Github">
              <IconButton
                onClick={() => {
                  window.open("https://github.com/mcmogaming/")
                }}
                sx={{ color: "white", mx: 2, display: "flex", p: 0 }}
              >
                <SvgIcon component={GithubIcon} inheritViewBox></SvgIcon>
                <Typography textAlign="center" sx={{ p: 1 }}>
                  Github
                </Typography>
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                onClick={() => {
                  window.open("https://www.linkedin.com/in/mohammadkr/")
                }}
                sx={{ color: "white", mx: 2, display: "flex", p: 0 }}
              >
                <SvgIcon component={LinkedinIcon} inheritViewBox></SvgIcon>
                <Typography textAlign="center" sx={{ p: 1 }}>
                  Linkedin
                </Typography>
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton
                onClick={() => {
                  window.open("mailto:mohammadkhrahman@gmail.com")
                  navigator.clipboard.writeText(
                    "mailto:mohammadkhrahman@gmail.com"
                  )
                }}
                sx={{ color: "white", mx: 2, display: "flex", p: 0 }}
              >
                <EmailIcon />
                <Typography textAlign="center" sx={{ p: 1 }}>
                  Email
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
