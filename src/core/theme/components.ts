// Styles will always be applied to the root element

const components = {
  MuiContainer: {
    styleOverrides: {
      maxWidthXl: {
        maxWidth: '1780px !important',
      },
    },
  },

  MuiLink: {
    defaultProps: {
      underline: 'none' as 'none',
    },
  },

  MuiButton: {
    styleOverrides: {
      contained: {
        fontSize: 16,
        fontWeight: 700,
      },
      outlined: {
        fontSize: 16,
        fontWeight: 700,
      },
    },
  },

  MuiIconButton: {
    defaultProps: {
      size: 'large' as 'large',
    },
  },

  MuiSvgIcon: {
    defaultProps: {
      fontSize: 'large' as 'large',
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },

  MuiCard: {
    defaultProps: {
      elevation: 10,
    },
  },

  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: 20,
      },
    },
  },
};

export default components;
