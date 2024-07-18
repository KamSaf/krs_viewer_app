import { useNavigate } from "react-router-dom";
import StyledButton from "./style";

type ViewButtonProps = {
  url: string;
  disabled: boolean;
};

export default function ViewButton({ url, disabled }: ViewButtonProps) {
  const navigate = useNavigate();
  return (
    <StyledButton
      onClick={() => navigate(url)}
      variant="contained"
      disabled={disabled}
    >
      View
    </StyledButton>
  );
}
