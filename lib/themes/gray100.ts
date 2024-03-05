import palette from "./palette";

const gray100 = {
  colors: {
    background: {
      default: palette.default.gray[100],
      active: `${palette.default.gray[50]}40`,
      hover: `${palette.default.gray[50]}16`,
      selected: `${palette.default.gray[50]}24`,
      selecteHover: `${palette.default.gray[50]}32`,
      brand: palette.default.primary[60],
      inverse: palette.default.gray[10],
      inverseHover: palette.hover.gray[10],
    },
    layer: {
      default: {
        1: palette.default.gray[90],
        2: palette.default.gray[80],
        3: palette.default.gray[70],
      },
      hover: {
        1: palette.hover.gray[90],
        2: palette.hover.gray[80],
        3: palette.hover.gray[70],
      },
      active: {
        1: palette.default.gray[70],
        2: palette.default.gray[60],
        3: palette.default.gray[50],
      },
      selected: {
        1: palette.default.gray[80],
        2: palette.default.gray[70],
        3: palette.default.gray[60],
        selectedHover: {
          1: palette.hover.gray[80],
          2: palette.hover.gray[70],
          3: palette.hover.gray[60],
        },
        selectedDisable: palette.default.gray[60],
        selectedInverse: palette.default.gray[10],
      },
    },
    border: {
      subtle: {
        0: palette.default.gray[80],
        1: palette.default.gray[80],
        2: palette.default.gray[70],
        3: palette.default.gray[60],
        selected: {
          1: palette.default.gray[70],
          2: palette.default.gray[60],
          3: palette.default.gray[50],
        },
        strong: {
          1: palette.default.gray[60],
          2: palette.default.gray[50],
          3: palette.default.gray[40],
        },
        inverse: palette.default.gray[10],
        interactive: palette.default.primary[50],
        disabled: `${palette.default.gray[50]}50`,
        tile: {
          1: palette.default.gray[70],
          2: palette.default.gray[60],
          3: palette.default.gray[50],
        },
      },
    },

    text: {
      primary: palette.default.gray[10],
      secondary: palette.default.gray[30],
      placeholder: palette.default.gray[60],
      onColor: palette.default.other.white,
      helper: palette.default.gray[50],
      error: palette.default.red[40],
      inverse: palette.default.gray[100],
      disabled: `${palette.default.gray[10]}25`,
      onColorDisabled: `${palette.default.other.white}25`,
    },
    link: {
      primary: palette.default.blue[40],
      primaryHover: palette.default.blue[30],
      sencondary: palette.default.blue[30],
      inverse: palette.default.blue[60],
      visited: palette.default.purple[40],
      brand: palette.default.primary[40],
    },

    support: {
      error: palette.default.red[50],
      success: palette.default.green[40],
      warning: palette.default.yellow[30],
      info: palette.default.blue[50],
      errorInverse: palette.default.red[60],
      successInverse: palette.default.green[50],
      warningInverse: palette.default.yellow[30],
      infoInverse: palette.default.blue[70],
      caution: {
        major: palette.default.orange[40],
        minor: palette.default.yellow[30],
      },
      undefined: palette.default.purple[50],
    },

    button: {
      primary: {
        default: palette.default.primary[60],
        hover: palette.hover.primary[60],
        active: palette.default.primary[80],
      },
      secondary: {
        default: palette.default.gray[60],
        hover: palette.hover.gray[60],
        active: palette.default.gray[80],
      },
      tertiary: {
        default: palette.default.other.white,
        hover: palette.default.gray[10],
        active: palette.default.gray[30],
      },
      danger: {
        primary: {
          default: palette.default.red[60],
          hover: palette.hover.red[60],
          active: palette.default.red[80],
        },
        secondary: {
          default: palette.default.red[50],
          hover: palette.hover.red[60],
          active: palette.default.red[80],
        },
      },
      separetor: palette.default.gray[100],
      disabled: palette.default.gray[70],
    },

    layerAccent: {
      1: {
        default: palette.default.gray[80],
        hover: palette.hover.gray[80],
        active: palette.default.gray[70],
      },
      2: {
        default: palette.default.gray[70],
        hover: palette.hover.gray[70],
        active: palette.default.gray[50],
      },
      3: {
        default: palette.default.gray[60],
        hover: palette.hover.gray[60],
        active: palette.default.gray[80],
      },
    },
    field: {
      1: {
        default: palette.default.gray[90],
        hover: palette.hover.gray[90],
      },
      2: {
        default: palette.default.gray[80],
        hover: palette.hover.gray[80],
      },
      3: {
        default: palette.default.gray[70],
        hover: palette.hover.gray[70],
      },
    },
    focus: {
      default: palette.default.other.white,
      inset: palette.default.gray[100],
      inverse: palette.default.blue[60],
    },
    miscellaneous: {
      interactive: palette.default.primary[50],
      highlight: palette.default.primary[80],
      overlay: `${palette.default.gray[100]}70`,
      skeleton: {
        background: palette.hover.gray[80],
        element: palette.default.gray[70],
      },
      toggleOff: palette.default.gray[60],
    },
  },

  effects: {
    shadow: {
      black: "0 2px 6px 0 rgba(0,0,0,.3)",
    },

    border: {
      subtle: {
        1: {
          inner: {
            all: ` ${palette.default.gray[20]}`,
            top: ` ${palette.default.gray[20]}`,
            right: ` ${palette.default.gray[20]}`,
            bottom: ` ${palette.default.gray[20]}`,
            left: ` ${palette.default.gray[20]}`,
            topBottom: ` ${palette.default.gray[20]}`,
            leftRight: ` ${palette.default.gray[20]}`,
            topLeftBottom: ` ${palette.default.gray[20]}`,
            topRightBottom: ` ${palette.default.gray[20]}`,
            bottomLeftRight: ` ${palette.default.gray[20]}`,
            topLeftRight: ` ${palette.default.gray[20]}`,
          },
        },
      },
      strong: {
        1: {
          inner: {
            all: ` ${palette.default.gray[50]}`,
            top: ` ${palette.default.gray[50]}`,
            right: ` ${palette.default.gray[50]}`,
            bottom: ` ${palette.default.gray[50]}`,
            left: ` ${palette.default.gray[50]}`,
            topBottom: ` ${palette.default.gray[50]}`,
            leftRight: ` ${palette.default.gray[50]}`,
            topLeftBottom: ` ${palette.default.gray[50]}`,
            topRightBottom: ` ${palette.default.gray[50]}`,
            bottomLeftRight: ` ${palette.default.gray[50]}`,
          },
        },
      },
      focus: {
        inner: {
          all: ` ${palette.default.blue[60]}`,
        },
        outer: {
          all: ` ${palette.default.blue[60]}`,
        },

        inverse: {
          inner: {
            all: ` ${palette.default.other.white}`,
          },
          outer: {
            all: `  ${palette.default.other.white}`,
          },
        },
      },
      selected: {
        inner: {
          all: ` ${palette.default.blue[60]}`,
          top: ` ${palette.default.blue[60]}`,
          right: ` ${palette.default.blue[60]}`,
          bottom: ` ${palette.default.blue[60]}`,
          left: ` ${palette.default.blue[60]}`,
        },
        outer: {
          all: ` ${palette.default.blue[60]}`,
          top: ` ${palette.default.blue[60]}`,
          right: ` ${palette.default.blue[60]}`,
          bottom: ` ${palette.default.blue[60]}`,
          left: ` ${palette.default.blue[60]}`,
        },

        inverse: {
          inner: {
            all: ` ${palette.default.blue[60]}`,
            top: ` ${palette.default.blue[60]}`,
            right: ` ${palette.default.blue[60]}`,
            bottom: ` ${palette.default.blue[60]}`,
            left: ` ${palette.default.blue[60]}`,
          },
          outer: {
            all: ` ${palette.default.blue[60]}`,
            top: ` ${palette.default.blue[60]}`,
            right: ` ${palette.default.blue[60]}`,
            bottom: ` ${palette.default.blue[60]}`,
            left: ` ${palette.default.blue[60]}`,
          },
        },
      },
      error: {
        inner: {
          all: ` ${palette.default.red[60]}`,
        },
        outer: {
          all: ` ${palette.default.red[60]}`,
        },
      },
      disabled: {
        inner: {
          topBottom: ` ${palette.default.gray[30]}`,
          topRightBottom: ` ${palette.default.gray[30]}`,
          topLeftBottom: ` ${palette.default.gray[30]}`,
        },
      },
    },
  },
  spacingBlock: {
    1: "2px",
    2: "4px",
    3: "8px",
    4: "12px",
    5: "16px",
    6: "24px",
    7: "32px",
    8: "40px",
    9: "48px",
    10: "64px",
    11: "80px",
    12: "96px",
    13: "160px",
  },
};

export default gray100;
