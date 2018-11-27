const styles = theme => ({
  pageWrapper: {
    margin: '0 auto',
    padding: '20px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  paper: {
    color: 'white',
    backgroundColor: theme.palette.primary.main
  },
  form: {
    display: 'grid',
    gridRowGap: '1.2em',
    marginTop: '.75em',
  },
  submitButton: {
    justifySelf: 'start',
    marginTop: '1.3em',
  },
  cancelButton: {
    marginTop: '1.3em',
    marginLeft: '.7em'
  }
})

export default styles
