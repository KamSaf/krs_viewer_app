import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalBox, ModalContent, ModalContentBox } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "@state/store";
import { Box, Button, createTheme, PaletteMode } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function InvalidFileModal({
  modalMessage,
  setModalMessage,
}: {
  modalMessage: string | null;
  setModalMessage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const mode = useSelector((state: RootState) => state.config.theme);
  const theme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });
  return (
    <Modal
      open={modalMessage ? true : false}
      onClose={() => setModalMessage(null)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox theme={theme}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          File upload failed!
        </Typography>
        <Divider />
        <Box>
          <ModalContent id="modal-modal-description">
            {modalMessage}
          </ModalContent>
        </Box>
        <ModalContentBox>
          <Button
            variant="outlined"
            onClick={() => {
              setModalMessage(null);
            }}
          >
            Close
          </Button>
        </ModalContentBox>
      </ModalBox>
    </Modal>
  );
}
