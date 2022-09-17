import { Box, Button, createStyles, Text, Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  desc: string
  image: string
  price: number
}

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
}))

function ItemCard(props: Props) {
  const { classes } = useStyle()

  return (
    <Box
      className={classes.flexCol}
      sx={(theme) =>
        ({
          flexShrink: 1,
          minWidth: 364,
          height: 560,
          borderRadius: theme.radius.lg,
          backgroundColor: theme.white,
          overflow: 'hidden',
        } as any)
      }
    >
      <Box
        sx={(theme) => ({
          width: '100%',
          height: 280,
          borderRadius: theme.radius.lg,
          position: 'relative',
          marginBottom: 24,
          marginTop: -28,
        })}
      >
        <Image src={props.image} layout="fill" objectFit="cover" />
      </Box>
      <Title order={2} sx={{ width: 300, marginBottom: 12 }}>
        {props.title}
      </Title>
      <Text sx={{ width: 300, marginBottom: 29 }}>{props.desc}</Text>
      <Box
        className={classes.flexRow}
        sx={{ width: 300, justifyContent: 'space-between' }}
      >
        <Box
          className={classes.flexRow}
          sx={{
            alignItems: 'flex-end',
          }}
        >
          <Title order={3} mr={8}>
            $
          </Title>
          <Title order={2}>{props.price}</Title>
        </Box>
        <Button
          variant="outline"
          sx={(theme) => ({
            width: 160,
            height: 52,
            borderRadius: theme.radius.md,
            fontSize: theme.fontSizes.xl,
            color: theme.colors.pink[0],
            borderColor: theme.colors.pink[0],
            transition: 'all .2s',
            ':hover': {
              backgroundColor: theme.colors.pink[0],
              color: theme.white,
            },
          })}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  )
}

export default ItemCard
