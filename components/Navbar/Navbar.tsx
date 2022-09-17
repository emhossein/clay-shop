import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Container,
  createStyles,
  Header,
  Sx,
  Text,
  Title,
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

import {
  ShopLogo,
  Instagram,
  Twitter,
  Facebook,
  Search,
  Cart,
} from '../Icons/Icons'

const useStyles = createStyles((theme) => ({
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
      >
        <Box className={classes.flexRow} sx={{ width: '100%' }}>
          <Box sx={{ width: '161px' }}>
            <Link href="/">
              <Box className={classes.link}>
                <ShopLogo className={classes.hoverIcon} />
                <Title order={3} ml={16}>
                  Clay Shop
                </Title>
              </Box>
            </Link>
          </Box>
          {!shrinkNavbar ? (
            <Box className={classes.flexRow} sx={{ width: '161px' }}>
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
                  '& a': { color: 'black' },
                  '& a:first-child': {
                    textDecoration: pathname === '/' ? 'line-through' : null,
                  },
                  '& a:nth-child(2)': {
                    textDecoration:
                      pathname === '/shop' ? 'line-through' : null,
                  },
                  '& a:last-child': {
                    textDecoration:
                      pathname === '/contact' ? 'line-through' : null,
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
