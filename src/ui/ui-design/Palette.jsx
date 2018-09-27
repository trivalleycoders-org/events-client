import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Square from './Square'

export const Palette = ({ theme }) => {
  return (
    <div>
      <Square
        bgColor={theme.palette.primary.dark}
        color={theme.palette.primary.contrastText}
      >
        dark
      </Square>
    </div>
  )
}

const styles = {}

export default withStyles(styles, { withTheme: true })(Palette)