import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

type ViewButtonProps = {
  url: string;
  disabled: boolean;
};

const StyledButton = styled(Button)({
  margin: 10,
});

function ViewButton({ url, disabled }: ViewButtonProps) {
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

export default ViewButton;
