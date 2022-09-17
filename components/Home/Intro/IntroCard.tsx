import { Box } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

interface Props {
  image: string
}

function IntroCard({ image }: Props) {
  return (
    <Box
      sx={(theme) => ({
        width: 267,
        height: 208,
        borderRadius: theme.radius.lg,
        position: 'relative',
      })}
    >
      <Image src={image} layout="fill" objectFit="cover" />
    </Box>
  )
}

export default IntroCard
