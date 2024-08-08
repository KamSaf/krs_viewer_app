import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ChangeEvent, useState } from "react";
import InvalidFileModal from "@components/InvalidFileModal";
import axiosInstance from "@axiosInstance/instance";

export default function UploadButton() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;
    if (file == null) {
      setModalMessage("No file uploaded");
      return;
    }
    if (!file.name.endsWith(".xml")) {
      setModalMessage(
        "Invalid file extension. Please upload file in .xml format."
      );
      return;
    }
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    axiosInstance
      .post("/api/reports/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setModalMessage(res.data);
      });
  }

  return (
    <>
      <InvalidFileModal
        modalMessage={modalMessage}
        setModalMessage={setModalMessage}
      />
      <Button
        component="label"
        variant="outlined"
        color="primary"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <input hidden type="file" accept=".xml" onChange={handleUpload}></input>
      </Button>
    </>
  );
}
