import { Box, Container, createStyles, Title } from '@mantine/core'
import React from 'react'
import ItemCard from '../../UI/ItemCard'

const DUMMY_TITLE = 'Red dress Valentino'
const DUMMY_DESC =
  'A very stylish and sexy dress for special occasions and for social events, impre…'
const DUMMY_PRICE = 1660
const DUMMY_IMAGE = '/assets/Woman.png'

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

function Suggest() {
  const { classes } = useStyle()

  return (
    <Container size="lg" px={0} mb={40}>
      <Box
        className={classes.flexRow}
        sx={{ justifyContent: 'space-between', marginBottom: 32 }}
      >
        <Title order={2}>You may Like This</Title>
        {/* for arrows navigation */}
        <Box>{/* use ThemeIcon for icons background */}</Box>
      </Box>
      <Box
        className={classes.flexRow}
        sx={{
          justifyContent: 'space-between',
          flexFlow: 'nowrap',
          width: '100%',
          overflow: 'hidden',
          gap: 24,
        }}
      >
        <ItemCard
          title={DUMMY_TITLE}
          desc={DUMMY_DESC}
          image={DUMMY_IMAGE}
          price={DUMMY_PRICE}
        />{' '}
        <ItemCard
          title={DUMMY_TITLE}
          desc={DUMMY_DESC}
          image={DUMMY_IMAGE}
          price={DUMMY_PRICE}
        />{' '}
        <ItemCard
          title={DUMMY_TITLE}
          desc={DUMMY_DESC}
          image={DUMMY_IMAGE}
          price={DUMMY_PRICE}
        />
        <ItemCard
          title={DUMMY_TITLE}
          desc={DUMMY_DESC}
          image={DUMMY_IMAGE}
          price={DUMMY_PRICE}
        />
        <ItemCard
          title={DUMMY_TITLE}
          desc={DUMMY_DESC}
          image={DUMMY_IMAGE}
          price={DUMMY_PRICE}
        />
        <ItemCard
          title={DUMMY_TITLE}
          desc={DUMMY_DESC}
          image={DUMMY_IMAGE}
          price={DUMMY_PRICE}
        />
      </Box>
    </Container>
  )
}

export default Suggest
