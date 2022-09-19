import { Box, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { ShopLogo } from '../Icons/Icons'
import useStyles from '../../styles/classes'

interface Props {
  mb?: number
}

function Logo({ mb }: Props) {
  const { classes } = useStyles()

  return (
    <Box sx={{ width: '161px' }} mb={mb}>
      <Link href="/">
        <Box className={classes.link}>
          <ShopLogo className={classes.hoverIcon} />
          <Title order={3} ml={16}>
            Clay Shop
          </Title>
        </Box>
      </Link>
    </Box>
  )
}

export default Logo
