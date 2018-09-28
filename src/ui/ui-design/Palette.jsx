import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Square from './Square'
import Display4 from 'ui/ui-elements/typography/Display4'
import Title from 'ui/ui-elements/typography/Title'

// eslint-disable-next-line
import { green } from 'logger'

export const Palette = ({ theme }) => {
  green('theme', theme)
  return (
    <div>
      <Display4>Palette</Display4>
      <Title>Primary</Title>
      <Square
        bgColor={theme.palette.primary.light}
        // color={theme.palette.primary.contrastText}
      >
        light
      </Square>
      <Square
        bgColor={theme.palette.primary.main}
        // color={theme.palette.primary.contrastText}
      >
        main
      </Square>
      <Square
        bgColor={theme.palette.primary.dark}
        // color={theme.palette.primary.contrastText}
      >
        dark
      </Square>
    </div>
  )
}

const styles = {}

export default withStyles(styles, { withTheme: true })(Palette)