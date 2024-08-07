import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const ModalContent = styled(Typography)({
  marginTop: 12,
  minHeight: 64,
});

export const ModalContentBox = styled(Box)({
  marginTop: 8,
  textAlign: "right",
});

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  minHeight: 100,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 4,
  padding: 16,
}));
