import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function UploadButton() {
  return (
    <Button
      component="label"
      variant="outlined"
      color="primary"
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <input hidden type="file"></input>
    </Button>
  );
}

export default UploadButton;
