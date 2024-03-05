import { Button, styled } from "@mui/material";

import { ButtonProps } from "./index";
import theme from "../../themes";

const paddingDict: { [key: string]: string } = {
  small: `7px ${theme.spacingBlock[5]}`,
  medium: `11px ${theme.spacingBlock[5]}`,
  large: `15px ${theme.spacingBlock[5]}`,
  extraLarge: `${theme.spacingBlock[6]} ${theme.spacingBlock[5]} 40px ${theme.spacingBlock[5]}`,
  _2xLarge: `${theme.spacingBlock[6]} ${theme.spacingBlock[5]} 60px ${theme.spacingBlock[5]}`,
  expressive: `13px ${theme.spacingBlock[5]}`,
};

const maxHeightDict: { [key: string]: string } = {
  small: theme.spacingBlock[7],
  medium: theme.spacingBlock[8],
  large: theme.spacingBlock[9],
  extraLarge: theme.spacingBlock[10],
  _2xLarge: theme.spacingBlock[11],
  expressive: theme.spacingBlock[9],
};

export const BaseButton = styled(Button)<ButtonProps>(({ disabled }) => ({
  fontSize: "12px",
  color: disabled
    ? theme.colors.text.onColorDisabled
    : theme.colors.text.onColor,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px" /* 128.571% */,
  letterspacing: " 0.16px",
  borderRadius: "8px",

  width: "100%",
  border: "none",
  ".label-with-icon": {
    paddingRight: `${theme.spacingBlock[7]}`,
  },

  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    border: "none",
  },
  "&:active": {
    boxShadow: "none",
    border: "none",
  },
  "&:focus": {
    boxShadow: "none",
    border: "none",
  },

  ":disabled": {},
}));

export const PrimaryButton = styled(BaseButton)<ButtonProps>(() => ({
  backgroundColor: theme.colors.button.primary.default,

  ":hover": {
    backgroundColor: theme.colors.button.primary.hover,
  },
  ":active": {
    backgroundColor: theme.colors.button.primary.active,
  },

  ":disabled": {
    backgroundColor: theme.colors.text.onColorDisabled,
  },
}));

export const PrimaryButtonSmall = styled(PrimaryButton)<ButtonProps>(() => ({
  padding: paddingDict["small"],
  maxHeight: maxHeightDict["small"],
}));

export const PrimaryButtonMedium = styled(PrimaryButton)<ButtonProps>(() => ({
  padding: paddingDict["medium"],
  maxHeight: maxHeightDict["medium"],
}));

export const PrimaryButtonLarge = styled(PrimaryButton)<ButtonProps>(() => ({
  padding: paddingDict["large"],
  maxHeight: maxHeightDict["large"],
}));

export const PrimaryButtonExtraLarge = styled(PrimaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["extraLarge"],
    maxHeight: maxHeightDict["extraLarge"],
  })
);

export const PrimaryButton2xLarge = styled(PrimaryButton)<ButtonProps>(() => ({
  padding: paddingDict["_2xLarge"],
  maxHeight: maxHeightDict["_2xLarge"],
}));

export const PrimaryButtonExpressive = styled(PrimaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["expressive"],
    maxHeight: maxHeightDict["expressive"],
  })
);

export const SecondaryButton = styled(BaseButton)<ButtonProps>(() => ({
  backgroundColor: theme.colors.button.secondary.default,

  ":hover": {
    backgroundColor: theme.colors.button.secondary.hover,
  },
  ":active": {
    backgroundColor: theme.colors.button.secondary.active,
  },

  ":disabled": {
    backgroundColor: theme.colors.text.onColorDisabled,
  },
}));

export const SecondaryButtonSmall = styled(SecondaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["small"],
    maxHeight: maxHeightDict["small"],
  })
);

export const SecondaryButtonMedium = styled(SecondaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["medium"],
    maxHeight: maxHeightDict["medium"],
  })
);

export const SecondaryButtonLarge = styled(SecondaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["large"],
    maxHeight: maxHeightDict["large"],
  })
);

export const SecondaryButtonExtraLarge = styled(SecondaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["extraLarge"],
    maxHeight: maxHeightDict["extraLarge"],
  })
);

export const SecondaryButton2xLarge = styled(SecondaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["_2xLarge"],
    maxHeight: maxHeightDict["_2xLarge"],
  })
);

export const SecondaryButtonExpressive = styled(SecondaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["expressive"],
    maxHeight: maxHeightDict["expressive"],
  })
);

export const TertiaryButton = styled(BaseButton)<ButtonProps>(
  ({ disabled }) => ({
    border: `1px solid ${theme.colors.button.tertiary.default}`,
    color: disabled
      ? theme.colors.button.disabled
      : theme.colors.button.tertiary.default,
    backgroundColor: "transparent",

    ":hover": {
      border: `1px solid transparent`,
      backgroundColor: theme.colors.button.tertiary.hover,
      color: disabled
        ? theme.colors.button.disabled
        : theme.colors.text.onColor,
    },
    ":active": {
      border: `1px solid transparent`,
      backgroundColor: theme.colors.button.tertiary.active,
      color: disabled
        ? theme.colors.button.disabled
        : theme.colors.text.onColor,
    },
    ":focus-within": {
      border: `1px solid ${theme.colors.button.tertiary.default}`,
    },

    ":disabled": {
      color: theme.colors.button.disabled,
      border: `1px solid ${theme.colors.button.disabled}`,
      backgroundColor: "transparent",
    },
  })
);

export const TertiaryButtonSmall = styled(TertiaryButton)<ButtonProps>(() => ({
  padding: paddingDict["small"],
  maxHeight: maxHeightDict["small"],
}));

export const TertiaryButtonMedium = styled(TertiaryButton)<ButtonProps>(() => ({
  padding: paddingDict["medium"],
  maxHeight: maxHeightDict["medium"],
}));

export const TertiaryButtonLarge = styled(TertiaryButton)<ButtonProps>(() => ({
  padding: paddingDict["large"],
  maxHeight: maxHeightDict["large"],
}));

export const TertiaryButtonExtraLarge = styled(TertiaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["extraLarge"],
    maxHeight: maxHeightDict["extraLarge"],
  })
);

export const TertiaryButton2xLarge = styled(TertiaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["_2xLarge"],
    maxHeight: maxHeightDict["_2xLarge"],
  })
);

export const TertiaryButtonExpressive = styled(TertiaryButton)<ButtonProps>(
  () => ({
    padding: paddingDict["expressive"],
    maxHeight: maxHeightDict["expressive"],
  })
);

export const GhostButton = styled(BaseButton)<ButtonProps>(({ disabled }) => ({
  color: disabled ? theme.colors.button.disabled : theme.colors.link.brand,
  backgroundColor: "transparent",

  ":hover": {
    backgroundColor: theme.colors.background.hover,
  },
  ":active": {
    backgroundColor: theme.colors.background.active,
  },

  ":disabled": {
    backgroundColor: "transparent",
  },
}));

export const GhostButtonSmall = styled(GhostButton)<ButtonProps>(() => ({
  padding: paddingDict["small"],
  maxHeight: maxHeightDict["small"],
}));

export const GhostButtonMedium = styled(GhostButton)<ButtonProps>(() => ({
  padding: paddingDict["medium"],
  maxHeight: maxHeightDict["medium"],
}));

export const GhostButtonLarge = styled(GhostButton)<ButtonProps>(() => ({
  padding: paddingDict["large"],
  maxHeight: maxHeightDict["large"],
}));

export const GhostButtonExtraLarge = styled(GhostButton)<ButtonProps>(() => ({
  padding: paddingDict["extraLarge"],
  maxHeight: maxHeightDict["extraLarge"],
}));

export const GhostButton2xLarge = styled(GhostButton)<ButtonProps>(() => ({
  padding: paddingDict["_2xLarge"],
  maxHeight: maxHeightDict["_2xLarge"],
}));

export const GhostButtonExpressive = styled(GhostButton)<ButtonProps>(() => ({
  padding: paddingDict["expressive"],
  maxHeight: maxHeightDict["expressive"],
}));

export const DangerPrimaryButton = styled(BaseButton)<ButtonProps>(() => ({
  backgroundColor: theme.colors.button.danger.primary.default,

  ":hover": {
    backgroundColor: theme.colors.button.danger.primary.hover,
  },
  ":active": {
    backgroundColor: theme.colors.button.danger.primary.active,
  },

  ":disabled": {
    backgroundColor: theme.colors.text.onColorDisabled,
  },
}));

export const DangerPrimaryButtonSmall = styled(
  DangerPrimaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["small"],
  maxHeight: maxHeightDict["small"],
}));

export const DangerPrimaryButtonMedium = styled(
  DangerPrimaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["medium"],
  maxHeight: maxHeightDict["medium"],
}));

export const DangerPrimaryButtonLarge = styled(
  DangerPrimaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["large"],
  maxHeight: maxHeightDict["large"],
}));

export const DangerPrimaryButtonExtraLarge = styled(
  DangerPrimaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["extraLarge"],
  maxHeight: maxHeightDict["extraLarge"],
}));

export const DangerPrimaryButton2xLarge = styled(
  DangerPrimaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["_2xLarge"],
  maxHeight: maxHeightDict["_2xLarge"],
}));

export const DangerPrimaryButtonExpressive = styled(
  DangerPrimaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["expressive"],
  maxHeight: maxHeightDict["expressive"],
}));

export const DangerTertiaryButton = styled(BaseButton)<ButtonProps>(
  ({ disabled }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.colors.button.danger.secondary.default}`,
    color: disabled
      ? theme.colors.button.disabled
      : theme.colors.button.danger.secondary.default,

    ":hover": {
      border: `1px solid transparent`,
      backgroundColor: theme.colors.button.danger.primary.hover,
      color: disabled
        ? theme.colors.button.disabled
        : theme.colors.text.onColor,
    },
    ":active": {
      border: `1px solid transparent`,
      backgroundColor: theme.colors.button.danger.primary.active,
      color: disabled
        ? theme.colors.button.disabled
        : theme.colors.text.onColor,
    },
    ":focus-within": {
      border: `1px solid ${theme.colors.button.danger.secondary.default}`,
    },

    ":disabled": {
      color: theme.colors.button.disabled,
      border: `1px solid ${theme.colors.button.disabled}`,
      backgroundColor: "transparent",
    },
  })
);

export const DangerTertiaryButtonSmall = styled(
  DangerTertiaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["small"],
  maxHeight: maxHeightDict["small"],
}));

export const DangerTertiaryButtonMedium = styled(
  DangerTertiaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["medium"],
  maxHeight: maxHeightDict["medium"],
}));

export const DangerTertiaryButtonLarge = styled(
  DangerTertiaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["large"],
  maxHeight: maxHeightDict["large"],
}));

export const DangerTertiaryButtonExtraLarge = styled(
  DangerTertiaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["extraLarge"],
  maxHeight: maxHeightDict["extraLarge"],
}));

export const DangerTertiaryButton2xLarge = styled(
  DangerTertiaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["_2xLarge"],
  maxHeight: maxHeightDict["_2xLarge"],
}));

export const DangerTertiaryButtonExpressive = styled(
  DangerTertiaryButton
)<ButtonProps>(() => ({
  padding: paddingDict["expressive"],
  maxHeight: maxHeightDict["expressive"],
}));

export const DangerGhostButton = styled(BaseButton)<ButtonProps>(
  ({ disabled }) => ({
    color: disabled
      ? theme.colors.button.disabled
      : theme.colors.button.danger.primary.default,
    backgroundColor: "transparent",

    ":hover": {
      backgroundColor: theme.colors.button.danger.primary.hover,
      color: theme.colors.background.default,
    },
    ":active": {
      backgroundColor: theme.colors.button.danger.primary.active,
      color: theme.colors.background.default,
    },

    ":disabled": {
      backgroundColor: "transparent",
    },
  })
);

export const DangerGhostButtonSmall = styled(DangerGhostButton)<ButtonProps>(
  () => ({
    padding: paddingDict["small"],
    maxHeight: maxHeightDict["small"],
  })
);

export const DangerGhostButtonMedium = styled(DangerGhostButton)<ButtonProps>(
  () => ({
    padding: paddingDict["medium"],
    maxHeight: maxHeightDict["medium"],
  })
);

export const DangerGhostButtonLarge = styled(DangerGhostButton)<ButtonProps>(
  () => ({
    padding: paddingDict["large"],
    maxHeight: maxHeightDict["large"],
  })
);

export const DangerGhostButtonExtraLarge = styled(
  DangerGhostButton
)<ButtonProps>(() => ({
  padding: paddingDict["extraLarge"],
  maxHeight: maxHeightDict["extraLarge"],
}));

export const DangerGhostButton2xLarge = styled(DangerGhostButton)<ButtonProps>(
  () => ({
    padding: paddingDict["_2xLarge"],
    maxHeight: maxHeightDict["_2xLarge"],
  })
);

export const DangerGhostButtonExpressive = styled(
  DangerGhostButton
)<ButtonProps>(() => ({
  padding: paddingDict["expressive"],
  maxHeight: maxHeightDict["expressive"],
}));
