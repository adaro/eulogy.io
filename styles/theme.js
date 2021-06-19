import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export const colors = {
	darkblue: '#418fde',
	brightblue: '#3591fc',
	lightblue: '#e6f5ff',
  pastelblue: '#aab3c0',
	darkgrey: '#40444b',
	bluegrey: '#3f444c',
  grey: '#9097a3',
  darkblack: '#1c1e20',
	red: '#fa625d',
	black: '#1c1e20',
  white: '#FFF',
  tan: '#F6F1EB',
  lightgrey: '#f0f0f0',
  palegrey: '#51565e',
  green: '#5bb568'

}

const BREAKPOINTS = {
    xs: 0,
    sm: 375,
    phone: 540,
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
};

const breakpointsMui = createBreakpoints({
    values: {...BREAKPOINTS},
    keys: Object.keys(BREAKPOINTS),
  });

const theme = createMuiTheme({
  breakpoints: breakpointsMui,
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  shadows: Array(25).fill('none'),
  palette: {
    primary: {
      main: colors.darkblue,
    },
    secondary: {
      main: colors.red,
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    }
  },

  overrides: {

    MuiButton: {
      root: {
        whiteSpace: 'nowrap',
        transition: 'unset',

      '&:hover': {
        'backgroundColor': 'inherit'
        },

      }
    },

    MuiCard: {
      root: {
        boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.15)',
        borderRadius:10
      }
    },

    MuiDrawer: {
      paper: {
        backgroundColor: colors.darkblack,
        color:colors.white,

        '& .Mui-selected': {
          color:colors.brightblue + ' !important',
          backgroundColor: 'white !important',

         '&:after': {
            zoom: .5,
            textAlign: 'right',
            flex: 'auto',
            content: 'url("https://storage.mikucloud.com/check.svg")'
          }
        }
      },
    },

    MuiSlider: {
      root: {
        width:'99%'
      }
    },


    MuiList: {
      root: {

        '& .Mui-selected': {
          color:colors.brightblue + ' !important',
          backgroundColor: 'white !important',

         '&:after': {
            zoom: .5,
            textAlign: 'right',
            flex: 'auto',
            content: 'url("https://storage.mikucloud.com/check.svg")'
          }
        }
      },
    },

    MuiListSubheader: {
      sticky: {
        top: 70
      }
    },

    MuiPopover: {
      paper: {
        top:'65px !important',
      },
      root: {
        backgroundColor: 'white',
        '& .MuiList-root': {
          backgroundColor: 'white !important',
          color: colors.bluegrey
        }
      },
    },

    MuiLink: {
      root: {
        color: colors.brightblue,
        fontWeight: '500'
      }
    },

    MuiInput: {
      input: {
        width: '500px',
        "&::placeholder": {
          color: colors.bluegrey + ' !important'
        },
      },
      underline: {
        '&:after': {
          borderBottom:`2px solid ${colors.brightblue}`
        }
      }
    },

    MuiFormHelperText: {
      root: {
        marginLeft: 12,
        "&$error": {
          color: colors.red
        }
      }
    },

    MuiDialog: {
      paper: {
        borderRadius:24,
      }
    },

  }
});


// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

export default theme;