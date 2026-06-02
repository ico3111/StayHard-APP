import { ButtonVariant } from "@/lib/types";
import { StyledButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? "Carregando..." : children}
    </StyledButton>
  );
};

export default Button;
