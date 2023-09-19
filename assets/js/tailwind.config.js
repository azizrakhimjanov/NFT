tailwind.config = {
    theme: {
      container: {
        padding: {
          DEFAULT: '10px',
          sm:'1rem'
        },
      },
      extend: {
        screens: {
          'xs':'475px',
        },
        fontFamily: {
          body: ['work sans'],
          mono: ['space-mono'],
        }
      }
    }
  }