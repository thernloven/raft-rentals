import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import Swal from "sweetalert2";
import { PHOTOS } from "../../api/photos";
import { Upload, UploadFile } from "antd";

function MyUploads() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const {
    uploadPhotosByPhotographerDataMutateAsync,
    uploadPhotosByPhotographerDataLoading,
  } = PHOTOS.uploadPhotosByPhotographer();

  const uploadFiles = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("fileToUpload[]", file as any);
    });

    try {
      await uploadPhotosByPhotographerDataMutateAsync({ formData }).then(() => {
        setFileList([]);
        Swal.fire("Success", "Photos have been uploaded", "success");
      });
    } catch (error: any) {
      console.log();
      if (error?.response?.data?.length >= 1) {
        Swal.fire("Error", error?.response?.data[0]?.message, "error");
      } else {
        console.log(error?.response?.data);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
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

        <Formik onSubmit={uploadFiles} initialValues={{}}>
          {() => (
            <Form>
              <Box>
                <Upload.Dragger
                  multiple
                  accept="image/*"
                  onRemove={(file) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    setFileList(newFileList);
                  }}
                  beforeUpload={(_, files) => {
                    setFileList([...fileList, ...files]);
                    return false;
                  }}
                  listType="picture"
                  // showUploadList={false}
                  defaultFileList={fileList}
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
                      Drop some files here to upload
                    </Typography>
                  </Box>
                </Upload.Dragger>
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
                  loading={uploadPhotosByPhotographerDataLoading}
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
}

export default MyUploads;
