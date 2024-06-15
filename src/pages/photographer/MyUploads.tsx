import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import Swal from "sweetalert2";
import { PHOTOS } from "../../api/photos";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { UploadFile, RcFile } from "antd/es/upload/interface";

const { Dragger } = Upload;

const MyUploads: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(false);
  const { uploadPhotosByPhotographerDataMutateAsync } =
    PHOTOS.uploadPhotosByPhotographer();

  const uploadFilesSequentially = async () => {
    setLoading(true);

    try {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i] as RcFile;

        const formData = new FormData();
        formData.append("fileToUpload[]", file);

        await uploadPhotosByPhotographerDataMutateAsync({ formData });

        setFileList((prevFileList) =>
          prevFileList.filter((_, index) => index !== i)
        );

        console.log(`Uploaded file ${i + 1} of ${fileList.length}`);
      }

      Swal.fire("Success", "Photos have been uploaded", "success");
    } catch (error: any) {
      console.error("Error uploading files:", error);

      if (error?.response?.data?.length >= 1) {
        Swal.fire("Error", error?.response?.data[0]?.message, "error");
      } else {
        Swal.fire("Error", "Failed to upload photos", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  const props = {
    name: "file",
    multiple: true,
    beforeUpload: (file: UploadFile) => {
      setFileList((prevFileList) => [...prevFileList, file]);
      return false;
    },
    onRemove: (file: UploadFile) => {
      setFileList((prevFileList) =>
        prevFileList.filter((item) => item.uid !== file.uid)
      );
    },
    onDrop: (e: React.DragEvent<HTMLDivElement>) => {
      console.log("Dropped files", e.dataTransfer.files);
    },
    fileList: fileList,
    customRequest: () => {}, // Prevent default upload behavior
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{ padding: 2, borderRadius: 2, maxWidth: "80%", width: "100%" }}
      >
        <Typography sx={{ color: "#495057", fontSize: 18, mb: 1 }}>
          Upload Photos
        </Typography>
        <Typography sx={{ color: "red", fontSize: 12, mb: 2 }}>
          *To ensure all photos upload successfully, please select the photos
          directly from your camera. If you upload them from another source, the
          correct metadata may not be inserted
        </Typography>

        <Formik onSubmit={uploadFilesSequentially} initialValues={{}}>
          {() => (
            <Form>
              <Box>
                <Dragger
                  listType="picture"
                  accept="image/*"
                  defaultFileList={fileList}
                  {...props}
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  <Box
                    sx={{
                      cursor: "pointer",
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      sx={{ color: "#64748B", fontWeight: "semibold" }}
                    >
                      <InboxOutlined />
                      Drop some files here to upload
                    </Typography>
                  </Box>
                </Dragger>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "10px",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    padding: 0.2,
                    width: 150,
                    background:
                      "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
                  }}
                  onClick={() => setFileList([])} // Clear selected files on cancel
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      cursor: "pointer",
                      background: "white",
                      color: "black",
                      fontSize: 12,
                      borderRadius: 1.5,
                      padding: 1,
                    }}
                  >
                    CANCEL
                  </Typography>
                </Box>
                <LoadingButton
                  type="submit"
                  loading={loading}
                  sx={{
                    borderRadius: 2,
                    padding: 1,
                    width: 250,
                    background:
                      "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
                    color: "white",
                    fontSize: 12,
                  }}
                >
                  Add Photos
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
};

export default MyUploads;
