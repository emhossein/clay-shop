import {
  Box,
  Button,
  Container,
  createStyles,
  Text,
  Title,
} from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const useStyles = createStyles((theme) => ({
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
}))

function Hero() {
  const { classes } = useStyles()

  return (
    <Box
      sx={{
        height: '540px',
        width: '100%',
        backgroundColor: 'black',
        backgroundImage: 'url("/assets/banner.png")',
        marginBottom: 40,
      }}
    >
      <Container
        size="lg"
        px={0}
        className={classes.flexCol}
        sx={{ height: '100%', alignItems: 'flex-start' }}
      >
        <Title
          mb={16}
          color="white"
          sx={(theme) =>
            ({
              fontSize: theme.headings.sizes.h1,
              fontWeight: 400,
              width: 370,
            } as any)
          }
        >
          Admire Stylish Dresses &amp; Looks
        </Title>
        <Text mb={27} color="white" sx={{ width: 360 }}>
          If we wanted to build a human-level tool to offer automated outfit
          advice, we needed to understand people&apos;s fashion taste.{' '}
        </Text>
        <Button
          variant="outline"
          sx={(theme) => ({
            borderColor: theme.white,
            color: theme.white,
            borderRadius: theme.radius.md,
            ':hover': {
              backgroundColor: theme.white,
              color: theme.colors.gray[4],
            },
            transition: 'all .2s',
          })}
        >
          Show More
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
