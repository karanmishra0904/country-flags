const styles = {
  searchContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1200,
    margin: '30px auto 0',
  },
  celebSearchField: {
    width: 272,
  },
  textField: {
    padding: '8px 16px',
    // height: 28,
    width: 200,
    fontSize: 14,
    background: 'white',

    '&::placeholder': {
      color: '#ccc',
    },

    '&::before': {
      content: 'none',
    },
    '&::after': {
      content: 'none',
    },
  },
  selectDiv: {
    textAlign: 'left',
    background: 'none',

    '&:focus': {
      background: 'none',
    },
  },
};

export default styles;
