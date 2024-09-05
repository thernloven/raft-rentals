import { Box, Typography } from "@mui/material";
import { IoIosEye } from "react-icons/io";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { HiFolderDownload } from "react-icons/hi";

function ImageCard({
  image,
  buttonTitle,
  loading,
  onClick,
  onImageClick,
  isDelete = false,
  isDownload = false,
  isButton = true,
}: any) {
  const [hover, setHover] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          height: 120,
          position: "relative",
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{ height: "100%", width: "100%" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            style={{
              position: "relative",
              background: "white",
              objectFit: "cover",
            }}
            onClick={onImageClick}
            width={"100%"}
            height={"100%"}
            src={image}
          />
        </div>
        {hover && (
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              display: "flex",
              background: "#00000050",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isDownload && (
              <a href={image} download target="_blank">
                <HiFolderDownload
                  style={{
                    fontSize: "24px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  // onClick={() => {
                  //   handleDownload(image);
                  // }}
                />
              </a>
            )}
            <IoIosEye
              onClick={onImageClick}
              style={{ fontSize: "24px", color: "white", cursor: "pointer" }}
            />
          </div>
        )}
        {/* <Image
          width={200}
          height={200}
          // style={{ display: "none" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          preview={{
            visible,
            scaleStep: 12,
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            onVisibleChange: (value) => {
              setVisible(value);
            },
          }}
        /> */}

        {/* <Image
          style={{
            display: "none", // Ensure the image component is rendered
          }}
          preview={{
            visible,
            src: image,
            onVisibleChange: (visible) => setVisible(visible),
          }}
          // onClick={onImageClick}
          width={"100%"}
          height={"100%"}
          src={image}
        /> */}
      </Box>

      {isButton && (
        <Box
          component={LoadingButton}
          loading={loading}
          disabled={loading}
          onClick={onClick}
          sx={{
            borderRadius: 2,
            padding: 0.2,
            marginTop: 1,
            width: "100%",
            background: !isDelete
              ? "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)"
              : "linear-gradient(-122deg, #EB001B 20%, #EB001B 80%)",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              ":active": {
                // background: "none",
                color: "#ffffff !important",
              },
              background: "white",
              width: "100%",
              cursor: "pointer",
              ":hover": {
                background: "none",
                color: "white",
              },
              fontSize: 12,
              borderRadius: 1.5,
              padding: 1,
            }}
          >
            {buttonTitle}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ImageCard;
