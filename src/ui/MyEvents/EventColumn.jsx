import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Checkbox,
  withWidth,
} from '@material-ui/core'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Body2 from 'ui/ui-elements/typography/Body2'
import Title from 'ui/ui-elements/typography/Title'

const Event = ({ classes, event, isSelected, width }) => {
  return (
    <Paper className={classes.wrapper}>

      {
        width === 'xs'
          ? (
              <div id='smallCheckTitle' className={classes.smallCheckTitle}>
                <div className={classes.checkBoxWrap}>
                  <Checkbox checked={isSelected} />
                </div>
                <div className={classes.titleWrap}>
                  <Title align='center'>
                    {event.title}
                  </Title>
                </div>

              </div>
            )
          : (
              <React.Fragment>
                <Checkbox checked={isSelected} />
                <Body2>
                  {event.title}
                </Body2>
              </React.Fragment>
            )
      }

      <ResponsiveImage src={event.imageUrl} alt='some' className={classes.image}/>
    </Paper>
  )
}

const styles = theme => ({
  titleWrap: {
    width: '100%',
  },
  smallCheckTitle: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    alignContent: 'center',
    [theme.breakpoints.only('md')]: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
    },
  },
  image: {
    [theme.breakpoints.only('xs')]: {
      // backgroundColor: red[500],
    },
  }

})

export default compose(
  withWidth(),
  withStyles(styles)
)(Event)

/*
<div className={classes.cityState}>
                    {n.cityName}, {n.stateCode}
                  </div>
*/
/*
<div>{format(n.startDateTime, dateFormat)}</div>
                  <div>{format(n.startDateTime, timeFormat)}</div>
*/
/*
<div>{format(n.endDateTime, dateFormat)}</div>
                  <div>{format(n.endDateTime, timeFormat)}</div>
*/

// {n.price || 'Free'}