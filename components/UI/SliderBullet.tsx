import { Box } from '@mantine/core'
import React from 'react'

interface Props {
  active?: boolean
}

function SliderBullet({ active }: Props) {
  return (
    <>
      {active ? (
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[5],
            border: '2px solid #fff',
            padding: 8,
            width: 8,
            height: 8,
            position: 'relative',
            borderRadius: '50%',
            '::before': {
              background: theme.black,
              border: '4px solid #fff',
              content: '""',
              borderRadius: '50%',
              display: 'block',
              position: 'absolute',
              top: '1px',
              left: '1px',
              right: '1px',
              bottom: '1px',
              pointerEvents: 'none',
            },
          })}
        />
      ) : (
        <Box
          sx={(theme) => ({
            width: 8,
            height: 8,
            backgroundColor: theme.black,
            borderRadius: '50%',
          })}
        />
      )}
    </>
  )
}

export default SliderBullet
