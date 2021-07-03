const styles = {
  cardWrapper: {
    maxWidth: 1200,
    margin: '30px auto 0',
    padding: '0 16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: 50,
    overflowX: 'hidden',
    textAlign: 'left',
  },
  cardSection: {
    cursor: 'pointer',
    boxShadow: '1px 8px 9px -3px rgba(0,0,0,0.1)',
    transition: '0.2s ease-out',
    '&:hover': {
      boxShadow: '1px 12px 9px -3px rgba(0,0,0,0.1)',
    },
  },
  imageSection: {
    '& img': {
      width: '100%',
      height: 150,
      maxHeight: '100%',
      objectFit: 'cover',
      display: 'block',
    },
  },
  textSection: {
    backgroundColor: 'white',
    padding: '8px 16px 16px',
    '& h3': {
      fontSize: 24,
      margin: '15px 0 ',
    },
    '& p': {
      fontSize: 15,
      color: 'black',
    },
    '& span': {
      fontWeight: 700,
    },
  },
};

export default styles;
