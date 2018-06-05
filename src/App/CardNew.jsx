import React from 'react'
import iBriia from '../media/briia.jpg'

const styles = {

  action: {
    borderLeft: '1px solid #EFF2F5',
    color: '#666A73',
    fontSize: '20px',
    height: '40px',
    lineHeight: '38px',
    padding: '0 10px',
    textAlign: 'center',
    textDecoration: 'none',
    width: '40px',
  },
  actions: {
    color: '#666A73',
    letterSpacing: '.5px',
    lineHeight: '38px',
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: 'white',
    letterSpacing: '.5px',
    lineHeight: '22px',
    margin: 0,
    padding: '5px 15px',
  },
  card: {
    display: 'flex',
    flexFlow: 'column',
    fontFamily: "'Roboto Condensed', sans-serif"
  },
  footer: {
    backgroundColor: 'white',
    borderTop: '1px solid #EFF2F5',
    display: 'flex',
    fontSize: 15,
    fontWeight: 400,
    justifyContent: 'space-between',
    lineHeight: '40px',
    lineSpacing: '0.5px',
    maxHeight: '3em',
    minHeight: '2.8em',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  header: {
    textDecoration: 'none',
  },
  tag: {
    color: '#45494E',
    fontSize: 13,
    fontWeight: '400px',
    letterSpacing: '0.5px',
    lineHeight: '40px',
    marginRight: '10px',
    textDecoration: 'none',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
  },
  tags: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  time: {
    color: '#45494E',
    display: 'block',
    fontSize: 13,
    fontWeight: 400,
    height: '2em',
    letterSpacing: '1px',
    lineHeight: '18px',
    overflow: 'hidden',
    padding: '5px 0 0 0',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  title: {
    color: '#282C35',
    fontSize: 16,
    fontWeight: 600,
    height: '2.5em',
    letterSpacing: 0,
    lineHeight: '19px',
    margin: '0 auto',
    maxHeight: '2.5em',
    padding: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  venu: {
    color: '#666A73',
    fontSize: 13,
    height: '2em',
    lineHeight: '18px',
    overflow: 'hidden',
    padding: '5px 0 0 0',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}

const CardNew = () => {
  return (
    <div style={styles.card}>
      <a href='#' style={styles.header}>
        <div style={styles.image}>
          <img src={iBriia} />
        </div>
        <div style={styles.body}>
          <time style={styles.time}>TUE, JUN 12 9:00 AM</time>
          <div style={styles.title}>
            BRIIA Investor Demo Day
          </div>
          <div style={styles.venu}>
            Roundhouse Conference Center, San Ramon
          </div>
        </div>
      </a>
      <div style={styles.footer}>
        <div style={styles.tags}>
          <div style={styles.tag}>
            <a href='#' style={styles.tag}>#Business</a>
          </div>
          <div style={styles.tag}>
            <a href='#' style={styles.tag}>#Appearance</a>
          </div>
        </div>
        <div style={styles.actions}>
          <a href='#' style={styles.action}>ac</a>
          <a href='#' style={styles.action}>ab</a>
        </div>
      </div>
    </div>
  )
}

export default CardNew
