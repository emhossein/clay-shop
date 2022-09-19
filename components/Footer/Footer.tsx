import {
  Box,
  Container,
  createStyles,
  Divider,
  Sx,
  Text,
  Title,
} from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { navbarLine } from '../../utils/navbarLine'
import useStyles from '../../styles/classes'
import Logo from '../UI/Logo'
import { Facebook, Instagram, Twitter } from '../Icons/Icons'

function Footer() {
  const { pathname } = useRouter()
  const { classes } = useStyles()

  return (
    <Box sx={(theme) => ({ backgroundColor: theme.white })}>
      <Box
        className={classes.flexRow}
        sx={{
          height: 80,
          width: '100%',
        }}
      >
        <Box
          className={classes.flexRow}
          sx={
            {
              width: 500,
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
      </Box>
      <Divider />
      <Container size="lg" px={0}>
        <Box
          className={classes.flexRow}
          sx={(theme) => ({
            paddingTop: '40px',
            marginBottom: 42,
            justifyContent: 'start',
          })}
        >
          <Box mr={121}>
            <Logo mb={24} />
            <Text size="lg" className={classes.grayText} sx={{ width: 267 }}>
              Fashion is a popular aesthetic expression at a particular time,
              place and in a specific context, especially in clothing, footwear,
              lifestyle, accessories, makeup.
            </Text>
          </Box>
          <Box mr={110}>
            <Title order={3} mb={24}>
              Hot Links
            </Title>
            <Text size="lg" className={classes.grayText}>
              <Link href="/">Home</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="/shop">Shop</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="/contact">Contact</Link>
            </Text>
          </Box>
          <Box mr={152}>
            <Title order={3} mb={24}>
              More Info
            </Title>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">How it works</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">About us</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">Decline rules</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">Terms &amp; Conditions</Link>
            </Text>
          </Box>
          <Box>
            <Title order={3} mb={24}>
              Customer Care
            </Title>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">FAQ</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">Terms of use</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">Privacy Policy</Link>
            </Text>
            <Text size="lg" className={classes.grayText}>
              <Link href="#">Discount system</Link>
            </Text>
          </Box>
        </Box>
      </Container>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[1],
        })}
      >
        <Container size="lg" px={0}>
          <Box
            className={classes.flexRow}
            sx={(theme) => ({
              justifyContent: 'space-between',
              height: 72,
            })}
          >
            <Text size="lg" className={classes.grayText}>
              © Clay Shop all rights reserved
            </Text>
            <Box
              className={classes.flexRow}
              sx={{ width: '161px', justifyContent: 'space-between' }}
            >
              <Instagram className={classes.hoverIcon} />
              <Twitter className={classes.hoverIcon} />
              <Facebook className={classes.hoverIcon} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
