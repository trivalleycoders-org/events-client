const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  dateGroup: {
    display: 'flex',
  },
  dummyImage: {
    backgroundColor: 'gray',
    height: '230px',
    width: '460px',
  },
  categoryArea: {
    padding: '20px 0 20px 0'
  },
  dateArea: {
    padding: '20px 0 20px 0'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconArea: {
    padding: '20px 0 20px 0'
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: 'red[800]',
    },
  },
  imageArea: {
    border: '1px solid white'
  },
  organizationArea: {
    padding: '20px 0 20px 0'
  },

  pastEvent: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.contrastText,
  },
  priceArea: {
    padding: '20px 0 20px 0'
  },
  tagArea: {
    padding: '20px 0 20px 0'
  },
  timeField: {
    paddingRight: '15px'
  },
  titleArea: {
    padding: '20px 0 20px 0'
  },
  uploadArea: {
    padding: '20px 0 20px 0'
  },
  uploadControls: {
    height: '100px',
  },
  venueArea: {
    padding: '20px 0 20px 0'
  },
})

export default styles
