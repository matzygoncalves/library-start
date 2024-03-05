import palette from "./palette";

const gray10 = {
  colors: {
    background: {
      default: palette.default.gray[10],
      active: `${palette.default.gray[50]}50`,
      hover: `${palette.default.gray[50]}12`,
      selected: `${palette.default.gray[50]}20`,
      selecteHover: `${palette.default.gray[50]}32`,
      brand: palette.default.primary[60],
      inverse: palette.default.gray[80],
      inverseHover: palette.hover.gray[80],
    },
    layer: {
      default: {
        1: palette.default.other.white,
        2: palette.default.gray[10],
        3: palette.default.other.white,
      },
      hover: {
        1: palette.hover.gray[10],
        2: palette.hover.gray[10],
        3: palette.hover.gray[10],
      },
      active: {
        1: palette.default.gray[30],
        2: palette.default.gray[30],
        3: palette.default.gray[30],
      },
      selected: {
        1: palette.default.gray[20],
        2: palette.default.gray[20],
        3: palette.default.gray[20],
        selectedHover: {
          1: palette.hover.gray[20],
          2: palette.hover.gray[20],
          3: palette.hover.gray[20],
        },
        selectedDisable: palette.default.gray[50],
        selectedInverse: palette.default.gray[100],
      },
    },
    border: {
      subtle: {
        0: palette.default.gray[30],
        1: palette.default.gray[20],
        2: palette.default.gray[30],
        3: palette.default.gray[20],
        selected: {
          1: palette.default.gray[30],
          2: palette.default.gray[30],
          3: palette.default.gray[30],
        },
        strong: {
          1: palette.default.gray[50],
          2: palette.default.gray[50],
          3: palette.default.gray[50],
        },
        inverse: palette.default.gray[100],
        interactive: palette.default.primary[60],
        disabled: palette.default.gray[30],
        tile: {
          1: palette.default.gray[40],
          2: palette.default.gray[30],
          3: palette.default.gray[40],
        },
      },
    },

    text: {
      primary: palette.default.gray[100],
      secondary: palette.default.gray[70],
      placeholder: palette.default.gray[40],
      onColor: palette.default.other.white,
      helper: palette.default.gray[60],
      error: palette.default.red[60],
      inverse: palette.default.other.white,
      disabled: `${palette.default.gray[100]}25`,
      onColorDisabled: palette.default.gray[50],
    },
    link: {
      primary: palette.default.blue[60],
      primaryHover: palette.default.blue[70],
      sencondary: palette.default.blue[70],
      inverse: palette.default.blue[40],
      visited: palette.default.purple[60],
      brand: palette.default.primary[60],
    },

    support: {
      error: palette.default.red[60],
      success: palette.default.green[50],
      warning: palette.default.yellow[30],
      info: palette.default.blue[70],
      errorInverse: palette.default.red[50],
      successInverse: palette.default.green[40],
      warningInverse: palette.default.yellow[30],
      infoInverse: palette.default.blue[50],
      caution: {
        major: palette.default.orange[40],
        minor: palette.default.yellow[30],
      },
      undefined: palette.default.purple[60],
    },

    button: {
      primary: {
        default: palette.default.primary[60],
        hover: palette.hover.primary[60],
        active: palette.default.primary[80],
      },
      secondary: {
        default: palette.default.gray[80],
        hover: palette.hover.gray[80],
        active: palette.default.gray[60],
      },
      tertiary: {
        default: palette.default.primary[60],
        hover: palette.hover.primary[60],
        active: palette.default.primary[80],
      },
      danger: {
        primary: {
          default: palette.default.red[60],
          hover: palette.hover.red[60],
          active: palette.default.red[80],
        },
        secondary: {
          default: palette.default.red[60],
          hover: palette.hover.red[60],
          active: palette.default.red[80],
        },
      },
      separetor: palette.default.gray[20],
      disabled: palette.default.gray[30],
    },

    layerAccent: {
      1: {
        default: palette.default.gray[20],
        hover: palette.hover.gray[20],
        active: palette.default.gray[40],
      },
      2: {
        default: palette.default.gray[20],
        hover: palette.hover.gray[20],
        active: palette.default.gray[40],
      },
      3: {
        default: palette.default.gray[20],
        hover: palette.hover.gray[20],
        active: palette.default.gray[40],
      },
    },
    field: {
      1: {
        default: palette.default.other.white,
        hover: palette.hover.gray[10],
      },
      2: {
        default: palette.default.gray[10],
        hover: palette.hover.gray[10],
      },
      3: {
        default: palette.default.other.white,
        hover: palette.hover.gray[10],
      },
    },
    focus: {
      default: palette.default.blue[60],
      inset: palette.default.other.white,
      inverse: palette.default.other.white,
    },
    miscellaneous: {
      interactive: palette.default.primary[60],
      highlight: palette.default.primary[20],
      overlay: `${palette.default.gray[100]}50`,
      skeleton: {
        background: palette.hover.gray[10],
        element: palette.default.gray[30],
      },
      toggleOff: palette.default.gray[50],
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

export default gray10;
