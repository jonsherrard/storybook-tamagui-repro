import React from "react";
import { Button as TamaButton } from "tamagui";

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onPress?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, onPress }: ButtonProps) => {
  return (
    <TamaButton onPress={onPress} bc={`$${backgroundColor}`}>
      {label}
    </TamaButton>
  );
};
