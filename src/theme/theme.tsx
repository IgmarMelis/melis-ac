/* Copyright @ 2023 Melis A/C */
import { ThemeType } from 'grommet';

// generated with grommet theme designer
// https://theme-designer.grommet.io/list
export const grayScaleTheme: ThemeType = {
  global: {
    colors: {
      brand: {
        dark: '#e0e0e0',
        light: '#1f1f1f'
      },
      background: {
        dark: '#111111',
        light: '#E1E1E1'
      },
      'background-back': {
        dark: '#111111',
        light: '#EEEEEE'
      },
      'background-front': {
        dark: '#222222',
        light: '#E1E1E1'
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111'
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333'
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000'
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444'
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666'
      },
      border: {
        dark: '#444444',
        light: '#CCCCCC'
      },
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': 'text-strong',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
      focus: {
        light: '#A0A0A0',
        dark: '#5f5f5f'
      }
    },
    font: {
      family: 'Helvetica'
    },
    active: {
      background: 'active-background',
      color: 'active-text'
    },
    hover: {
      background: 'active-background',
      color: 'active-text'
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text'
    },
    control: {
      border: {
        radius: '4px'
      }
    },
    drop: {
      border: {
        radius: '4px'
      }
    }
  },
  chart: {},
  diagram: {
    line: {}
  },
  meter: {},
  tip: {
    content: {
      background: {
        color: 'background'
      },
      elevation: 'none',
      round: false
    }
  },
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF'
    }
  },
  button: {
    border: {
      radius: '4px'
    }
  },
  checkBox: {
    check: {
      radius: '4px'
    },
    toggle: {
      radius: '4px'
    }
  },
  radioButton: {
    check: {
      radius: '4px'
    }
  },
  anchor: {
    color: 'brand'
  },
  formField: {
    border: {
      color: 'border',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical'
        }
      },
      position: 'inner',
      side: 'bottom'
    },
    content: {
      pad: 'small'
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: 'medium'
      }
    },
    error: {
      color: 'status-critical',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small'
      }
    },
    help: {
      color: 'dark-3',
      margin: {
        start: 'small'
      }
    },
    info: {
      color: 'text-xweak',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small'
      }
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small'
      }
    },
    margin: {
      bottom: 'small'
    },
    round: '4px'
  }
};
