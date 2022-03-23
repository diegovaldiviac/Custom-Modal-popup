

const ModalStyle = {

  body: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal: {
    width: '500px',
    background: 'white',
    border: '1px solid #ccc',
    transition: '1.1s ease-out',
    boxShadow: '-2rem 2rem 2rem rgba(black, 0.2)',
    filter: 'blur(0)',
    transform: 'scale(1)',
    opacity: '1',
    visibility: 'visible',
  },

  actions: {
    borderTop: '1px solid #ccc',
    background: '#eee',
    padding: '0.5rem 1rem'
  },

  button: {
    border: '0',
    background: '#78f89f',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    fontSize: '0.8rem',
    lineHeight: '1'
  },

  h2: {
    borderBottom: '1px solid #ccc',
    padding: '1rem',
    margin: '0'
  },

}

export default ModalStyle