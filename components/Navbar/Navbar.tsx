import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, createStyles, Header, Sx, Title } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

import {
  ShopLogo,
  Instagram,
  Twitter,
  Facebook,
  Search,
  Cart,
} from '../Icons/Icons'
import { navbarLine } from '../../utils/navbarLine'
import useStyles from '../../styles/classes'
import Logo from '../UI/Logo'

const useStyle = createStyles((theme) => ({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    fontSize: '24px',
    color: theme.black,
    alignItems: 'center',
    ':hover': { cursor: 'pointer' },
  },
  hoverIcon: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}))

function Navbar() {
  const { pathname } = useRouter()
  const { classes } = useStyles()
  const [{ y }, scrollTo] = useWindowScroll()

  const shrinkNavbar = y > 200

  const HEADER_HEIGHT = shrinkNavbar ? 64 : 180

  return (
    <Header height={HEADER_HEIGHT} mb={0} sx={{ position: 'sticky' }}>
      <Container
        size="xl"
        px={0}
        pt={shrinkNavbar ? 16 : 24}
        className={classes.flexCol}
        sx={{ justifyContent: 'space-between' }}
      >
        <Box
          className={classes.flexRow}
          sx={{ width: '100%', justifyContent: 'space-between' }}
        >
          <Logo />
          {!shrinkNavbar ? (
            <Box
              className={classes.flexRow}
              sx={{ width: '161px', justifyContent: 'space-between' }}
            >
              <Instagram className={classes.hoverIcon} />
              <Twitter className={classes.hoverIcon} />
              <Facebook className={classes.hoverIcon} />
            </Box>
          ) : (
            <Box
              className={classes.flexRow}
              sx={
                {
                  width: '500px',
                  position: 'relative',
                  justifyContent: 'space-between',
                  '& a': { color: 'black' },
                  '& a:first-child': {
                    textDecoration: navbarLine('/', pathname),
                  },
                  '& a:nth-child(2)': {
                    textDecoration: navbarLine('/shop', pathname),
                  },
                  '& a:last-child': {
                    textDecoration: navbarLine('/contact', pathname),
                  },
                } as Sx
              }
            >
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/contact">Contact</Link>
            </Box>
          )}
          <Box
            className={classes.flexRow}
            sx={{
              width: '161px',
              justifyContent: 'flex-end',
              '& svg:first-child': {
                marginRight: '24px',
              },
            }}
          >
            <Search className={classes.hoverIcon} />
            <Cart className={classes.hoverIcon} />
          </Box>
        </Box>
        {!shrinkNavbar && (
          <Box
            className={classes.flexRow}
            sx={{ width: '100%', justifyContent: 'center', marginTop: '68px' }}
          >
            <Box
              className={classes.flexRow}
              sx={{
                width: '500px',
                position: 'relative',
                justifyContent: 'space-between',
                '& a': { color: 'black' },
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/contact">Contact</Link>
              <Box
                sx={(theme) => ({
                  height: '27px',
                  width: '3px',
                  backgroundColor: theme.black,
                  position: 'absolute',
                  bottom: '-33px',
                  left:
                    pathname === '/'
                      ? '20px'
                      : pathname === '/shop'
                      ? '245px'
                      : '470px',
                })}
              />
            </Box>
          </Box>
        )}
      </Container>
    </Header>
  )
}

export default Navbar
