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
};

export default components;
