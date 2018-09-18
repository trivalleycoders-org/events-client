import React from 'react'
import Body1 from 'ui/ui-elements/typography/Body1'
import Body2 from 'ui/ui-elements/typography/Body2'
import Display1 from 'ui/ui-elements/typography/Display1'
import Display2 from 'ui/ui-elements/typography/Display2'
import Display3 from 'ui/ui-elements/typography/Display3'
import Display4 from 'ui/ui-elements/typography/Display4'
import Headline from 'ui/ui-elements/typography/Headline'
import Caption from 'ui/ui-elements/typography/Caption'
import Subheading from 'ui/ui-elements/typography/Subheading'
import Title from 'ui/ui-elements/typography/Title'
import { withStyles } from '@material-ui/core'

const Typography = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <Body1 color='blue'>Body 1</Body1>
      <Body2>Body 2</Body2>
      <Display1>Display 1</Display1>
      <Display2>Display 2</Display2>
      <Display3>Display 3</Display3>
      <Display4>Display 4</Display4>
      <Headline>Headline</Headline>
      <Caption>Caption</Caption>
      <Subheading>Subheading</Subheading>
      <Title>Title</Title>

    </div>
  )
}

const styles = {
  wrapper: {
    marginTop: '80px'
  }
}

export default withStyles(styles)(Typography)