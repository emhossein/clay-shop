import { createStyles } from '@mantine/core'

const styles = createStyles((theme) => ({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
  arowHover: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  grayText: {
    color: theme.colors.gray[5],
  },
}))

export default styles
