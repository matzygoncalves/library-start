import { ButtonHTMLAttributes, FC } from "react";
import Skeleton from "@mui/material/Skeleton";

import {
  DangerGhostButton2xLarge,
  DangerGhostButtonExpressive,
  DangerGhostButtonExtraLarge,
  DangerGhostButtonLarge,
  DangerGhostButtonMedium,
  DangerGhostButtonSmall,
  DangerPrimaryButton2xLarge,
  DangerPrimaryButtonExpressive,
  DangerPrimaryButtonExtraLarge,
  DangerPrimaryButtonLarge,
  DangerPrimaryButtonMedium,
  DangerPrimaryButtonSmall,
  DangerTertiaryButton2xLarge,
  DangerTertiaryButtonExpressive,
  DangerTertiaryButtonExtraLarge,
  DangerTertiaryButtonLarge,
  DangerTertiaryButtonMedium,
  DangerTertiaryButtonSmall,
  GhostButton2xLarge,
  GhostButtonExpressive,
  GhostButtonExtraLarge,
  GhostButtonLarge,
  GhostButtonMedium,
  GhostButtonSmall,
  PrimaryButton2xLarge,
  PrimaryButtonExpressive,
  PrimaryButtonExtraLarge,
  PrimaryButtonLarge,
  PrimaryButtonMedium,
  PrimaryButtonSmall,
  SecondaryButton2xLarge,
  SecondaryButtonExpressive,
  SecondaryButtonExtraLarge,
  SecondaryButtonLarge,
  SecondaryButtonMedium,
  SecondaryButtonSmall,
  TertiaryButton2xLarge,
  TertiaryButtonExpressive,
  TertiaryButtonExtraLarge,
  TertiaryButtonLarge,
  TertiaryButtonMedium,
  TertiaryButtonSmall,
} from "./styles";
import theme from "../../themes";
import styled from "styled-components";

type LabelProps = {
  disabled: ButtonProps["disabled"];
};

const Div = styled.div<LabelProps>``;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color:
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "dangerPrimary"
    | "dangerTertiary"
    | "dangerGhost";
  variant:
    | "small"
    | "medium"
    | "large"
    | "extraLarge"
    | "2xLarge"
    | "expressive";
  label?: string;
  svgIcon?: React.ReactNode;
  icon?: string;
  isLoading?: boolean;

  disabled?: boolean;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana";
};

const StyledButtonsDictionary = {
  primary_small: PrimaryButtonSmall,
  primary_medium: PrimaryButtonMedium,
  primary_large: PrimaryButtonLarge,
  primary_extraLarge: PrimaryButtonExtraLarge,
  primary_2xLarge: PrimaryButton2xLarge,
  primary_expressive: PrimaryButtonExpressive,
  secondary_small: SecondaryButtonSmall,
  secondary_medium: SecondaryButtonMedium,
  secondary_large: SecondaryButtonLarge,
  secondary_extraLarge: SecondaryButtonExtraLarge,
  secondary_2xLarge: SecondaryButton2xLarge,
  secondary_expressive: SecondaryButtonExpressive,
  tertiary_small: TertiaryButtonSmall,
  tertiary_medium: TertiaryButtonMedium,
  tertiary_large: TertiaryButtonLarge,
  tertiary_extraLarge: TertiaryButtonExtraLarge,
  tertiary_2xLarge: TertiaryButton2xLarge,
  tertiary_expressive: TertiaryButtonExpressive,
  ghost_small: GhostButtonSmall,
  ghost_medium: GhostButtonMedium,
  ghost_large: GhostButtonLarge,
  ghost_extraLarge: GhostButtonExtraLarge,
  ghost_2xLarge: GhostButton2xLarge,
  ghost_expressive: GhostButtonExpressive,
  dangerPrimary_small: DangerPrimaryButtonSmall,
  dangerPrimary_medium: DangerPrimaryButtonMedium,
  dangerPrimary_large: DangerPrimaryButtonLarge,
  dangerPrimary_extraLarge: DangerPrimaryButtonExtraLarge,
  dangerPrimary_2xLarge: DangerPrimaryButton2xLarge,
  dangerPrimary_expressive: DangerPrimaryButtonExpressive,
  dangerTertiary_small: DangerTertiaryButtonSmall,
  dangerTertiary_medium: DangerTertiaryButtonMedium,
  dangerTertiary_large: DangerTertiaryButtonLarge,
  dangerTertiary_extraLarge: DangerTertiaryButtonExtraLarge,
  dangerTertiary_2xLarge: DangerTertiaryButton2xLarge,
  dangerTertiary_expressive: DangerTertiaryButtonExpressive,
  dangerGhost_small: DangerGhostButtonSmall,
  dangerGhost_medium: DangerGhostButtonMedium,
  dangerGhost_large: DangerGhostButtonLarge,
  dangerGhost_extraLarge: DangerGhostButtonExtraLarge,
  dangerGhost_2xLarge: DangerGhostButton2xLarge,
  dangerGhost_expressive: DangerGhostButtonExpressive,
} as any;

export const Button: FC<ButtonProps> = ({
  disabled,
  isLoading,
  icon,
  variant,
  svgIcon,
  color,
  label,
  ...buttonProps
}) => {
  localStorage.setItem("@app:activeTheme", "gray100");
  const activeTheme = localStorage.getItem("@app:activeTheme");
  console.log(activeTheme);

  const StyledButton = StyledButtonsDictionary[`${color}_${variant}`];

  return (
    <>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height:
              variant === "small"
                ? theme.spacingBlock[7]
                : variant === "medium"
                ? theme.spacingBlock[8]
                : variant === "large"
                ? theme.spacingBlock[9]
                : variant === "extraLarge"
                ? theme.spacingBlock[10]
                : variant === "2xLarge"
                ? theme.spacingBlock[11]
                : theme.spacingBlock[9],
          }}
        >
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"100%"}
            sx={{
              bgcolor: " theme.colors.miscellaneous.skeleton.background",
              borderRadius: "8px",
            }}
          />
          <p> {label}</p>
        </div>
      ) : (
        <div>
          <StyledButton
            disableRipple
            fullWidth
            disabled={disabled}
            {...buttonProps}
          >
            <Div disabled={disabled}>
              {" "}
              <p>{label}</p>
            </Div>

            {svgIcon && !icon && svgIcon}
            {!svgIcon && icon && <img src={icon} />}
          </StyledButton>
        </div>
      )}
    </>
  );
};
