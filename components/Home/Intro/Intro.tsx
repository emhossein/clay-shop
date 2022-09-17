import { Box, Container, createStyles } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import { Arrow } from '../../Icons/Icons'
import SliderBullet from '../../UI/SliderBullet'
import IntroCard from './IntroCard'

const useStyle = createStyles((theme) => ({
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arowHover: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}))

function Intro() {
  const { classes } = useStyle()

  return (
    <Container
      size="lg"
      px={0}
      className={classes.flexCol}
      sx={{ width: '100%' }}
    >
      <Box
        className={classes.flexRow}
        sx={{
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 40,
        }}
      >
        <Box
          sx={(theme) => ({
            width: 558,
            height: 440,
            position: 'relative',
            borderRadius: theme.radius.lg,
          })}
        >
          <Image src="/assets/photo.png" layout="fill" objectFit="cover" />
        </Box>
        <Box
          sx={(theme) => ({
            width: 558,
            height: 440,
          })}
        >
          <Box
            className={classes.flexRow}
            sx={{ justifyContent: 'space-between', marginBottom: 22 }}
          >
            <IntroCard image="/assets/chris-henry-4gD0nUsMTsE-unsplash.png" />
            <IntroCard image="/assets/chris-henry-4gD0nUsMTsE-unsplash.png" />
          </Box>
          <Box
            className={classes.flexRow}
            sx={{ justifyContent: 'space-between', marginBottom: 22 }}
          >
            <IntroCard image="/assets/chris-henry-4gD0nUsMTsE-unsplash.png" />
            <IntroCard image="/assets/chris-henry-4gD0nUsMTsE-unsplash.png" />
          </Box>
        </Box>
      </Box>
      <Box
        className={classes.flexRow}
        sx={(theme) => ({
          position: 'relative',
          marginBottom: 40,
          width: '100%',
          height: 316,
          borderRadius: theme.radius.lg,
          backgroundColor: theme.white,
          padding: '40px 24px 40px 60px',
        })}
      >
        <Box
          className={classes.arowHover}
          sx={(theme) => ({
            position: 'absolute',
            left: 40,
            '& svg': {
              rotate: '90deg',
            },
          })}
        >
          <Arrow />
        </Box>
        <Box
          className={classes.arowHover}
          sx={(theme) => ({
            position: 'absolute',
            right: 40,
            '& svg': {
              rotate: '-90deg',
            },
          })}
        >
          <Arrow />
        </Box>
        <Box
          className={classes.flexRow}
          sx={(theme) => ({
            position: 'absolute',
            justifyContent: 'space-between',
            bottom: 20,
            width: 76,
            height: 16,
          })}
        >
          <SliderBullet active />
          <SliderBullet />
          <SliderBullet />
          <SliderBullet />
        </Box>
      </Box>
    </Container>
  )
}

export default Intro
