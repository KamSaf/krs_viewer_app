import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ChangeEvent, useState } from "react";
import FileUploadModal from "@components/FileUploadModal";
import axiosInstance from "@axiosInstance/instance";
import { AxiosError } from "axios";

export default function UploadButton() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
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
    const formData = new FormData();
    formData.append("file", file);
    try {
      const data = await axiosInstance.post("/api/reports/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
    } catch (err) {
      const error = err as AxiosError;
      let message = `Unexpected error: ${error.code}`;
      if (error.response) {
        message = error.response.data as string;
      } else if (error.code == "ERR_NETWORK") {
        message = "Cannot communicate with server";
      }
      setModalMessage(message);
    }
  }

  return (
    <>
      <FileUploadModal
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
