import { Alert, Box } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { AUTH } from "../api/auth";

function EmailSuccessPage() {
  const [searchParams] = useSearchParams();
  const { verifyEmailData, verifyEmailDataRefetch } = AUTH.verifyEmail({
    token: searchParams?.get("token"),
  });

  useEffect(() => {
    verifyEmailDataRefetch();
  }, [searchParams?.get("token")]);

  console.log(searchParams?.get("token"), verifyEmailData);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FaCircleCheck size={84} color="#22bb33" />
      <Alert
        icon={<MdCheckCircleOutline fontSize="inherit" />}
        severity="success"
      >
        Confirmation that your email was successful.
        <Link
          to="/auth/login"
          replace
          style={{ textDecoration: "none", color: "#1e4620" }}
        >
          <strong>&nbsp;Login here.</strong>
        </Link>
      </Alert>
    </Box>
  );
}

export default EmailSuccessPage;
