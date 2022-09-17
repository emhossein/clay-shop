import { Box } from '@mantine/core'
import type { NextPage } from 'next'

import Hero from '../components/Home/Hero'
import Intro from '../components/Home/Intro/Intro'
import Suggest from '../components/Home/Suggest/Suggest'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Intro />
      <Suggest />
    </Box>
  )
}

export default Home
