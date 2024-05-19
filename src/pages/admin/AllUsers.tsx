import {
  Box,
  Card,
  Divider,
  Grid,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { FiEdit } from "react-icons/fi";
import { ADMIN } from "../../api/admin";
import moment from "moment";
import { Modal, Select, Spin } from "antd";
import { memo, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import Swal from "sweetalert2";
import { InputField } from "../ProfileSettings";
import LoadingButton from "@mui/lab/LoadingButton";

function AllUsers() {
  const [role, setRole] = useState("");
  const { allUsersData, allUsersDataLoading, allUsersDataRefetch } =
    ADMIN.getAllUsers({ role });
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        padding: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h4" fontSize={22} fontWeight={600}>
            All Users
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color={"#A0AEC0"}
            fontSize={12}
          >
            A lightweight, extendable, dependency-free javascript HTML table
            plugin.
          </Typography>
        </Box>
        <Box>
          <Select
            placeholder="Select Role"
            style={{ width: "200px" }}
            onChange={(e) => {
              console.log(e);
              setRole(e);
            }}
            options={[
              { value: "", label: "All Users" },
              { value: "admin", label: "Admin" },
              { value: "photographer", label: "Photographer" },
              { value: "customer", label: "Customer" },
              { value: "non-customer", label: "Non Customer" },
              { value: "deleted", label: "Deleted" },
            ]}
          />
        </Box>
      </Box>
      {allUsersDataLoading ? (
        <Spin />
      ) : (
        <Box sx={{ mt: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {[
                    "ID",
                    "NAME",
                    "EMAIL",
                    "ROLE",
                    "REGISTER DATE",
                    "ACTION",
                  ].map((item, key) => (
                    <TableCell
                      sx={{
                        color: "#8392AB",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                      align="left"
                      key={key}
                    >
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {allUsersData?.data?.map((row: any, key: any) => (
                  <TableRow
                    key={key}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      sx={{ color: "#8392AB" }}
                      align="left"
                      scope="row"
                    >
                      {row.user_id}.
                    </TableCell>
                    <TableCell
                      sx={{ color: "#8392AB" }}
                      align="left"
                      scope="row"
                    >
                      {row.firstname} {row.lastname}
                    </TableCell>

                    <TableCell
                      sx={{ color: "#8392AB" }}
                      align="left"
                      scope="row"
                    >
                      {row.email}
                    </TableCell>

                    <TableCell
                      sx={{ color: "#8392AB", textTransform: "capitalize" }}
                      align="left"
                      scope="row"
                    >
                      {row.user_role}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#8392AB" }}
                      align="left"
                      scope="row"
                    >
                      {moment(row.created_at).format("LL")}
                    </TableCell>
                    <TableCell sx={{ color: "#8392AB" }} align="left">
                      <EditModal
                        allUsersDataRefetch={allUsersDataRefetch}
                        userId={row.user_id}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#8392AB", fontWeight: 400 }}>
              Showing 1 to 10 of 12 entries
            </Typography>
            <Pagination count={3} variant="outlined" color="secondary" />
          </Box>
        </Box>
      )}
    </Card>
  );
}

const EditModal = memo(({ userId, allUsersDataRefetch }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userData, userDataMutateAsync } = ADMIN.getUserDetails({ userId });
  const { editAdminUserDataMutateAsync } = ADMIN.editAdminUser();
  useEffect(() => {
    if (open) {
      userDataMutateAsync();
    }
  }, [open]);

  console.log(userData, "userData");

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          fontSize: 22,
        }}
      >
        <FiEdit
          color="#FF5757"
          style={{
            cursor: "pointer",
          }}
        />
      </Box>
      <Modal width={600} footer={null} open={open} onCancel={handleClose}>
        <Box>
          <Typography
            variant="h4"
            fontSize={22}
            marginBottom={2}
            fontWeight={600}
          >
            User Information
          </Typography>
          <Formik
            onSubmit={async (values) => {
              editAdminUserDataMutateAsync({ bodyData: { ...values } })
                .then(() => {
                  userDataMutateAsync();
                  handleClose();
                  allUsersDataRefetch();
                  Swal.fire("Profile", "Profile has been updated", "success");
                })
                .catch(() => {
                  Swal.fire("Warning", "Something Went Wrong.", "warning");
                });
            }}
            enableReinitialize
            initialValues={userData?.data[0]}
          >
            {({ getFieldProps, values, setFieldValue }) => (
              <Form>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <SelectField
                        setFieldValue={setFieldValue}
                        label="User Role"
                        value={values?.user_role}
                        placeholder="Enter Role"
                        options={[
                          { value: "admin", label: "Admin" },
                          { value: "photographer", label: "Photographer" },
                          { value: "customer", label: "Customer" },
                          { value: "non-customer", label: "Non Customer" },
                          { value: "deleted", label: "Deleted" },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        {...getFieldProps("firstname")}
                        label="First name"
                        placeholder="Michael"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        {...getFieldProps("lastname")}
                        label="Last name"
                        placeholder="Jackson"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <InputField
                        {...getFieldProps("address")}
                        label="Address"
                        placeholder="Eg:India"
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <InputField
                        {...getFieldProps("country")}
                        label="Country"
                        placeholder="Eg:India"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        {...getFieldProps("state")}
                        label="Your State"
                        placeholder="Sydney, A"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputField
                        {...getFieldProps("city")}
                        label="City"
                        placeholder="Eg:India"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <InputField
                        label="Zip Code"
                        placeholder="123123"
                        {...getFieldProps("zip")}
                        inputProps={{ type: "number" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <InputField
                        label="Email"
                        {...getFieldProps("email")}
                        placeholder="example@email.com"
                        inputProps={{ type: "email" }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <InputField
                        {...getFieldProps("password")}
                        label="New Password"
                        placeholder="Enter password"
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
                    <Box
                      component={LoadingButton}
                      type="submit"
                      // loading={userProfileUpdateLoading}
                      sx={{
                        borderRadius: 2,
                        padding: 1,
                        marginTop: 1,
                        width: 250,
                        border: 0,
                        background:
                          "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
                        cursor: "pointer",
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      Update Profile
                    </Box>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
});
export default AllUsers;

const SelectField = ({
  label,
  placeholder,
  options,
  value,
  setFieldValue,
}: any) => {
  return (
    <Box>
      <Typography
        fontWeight="600"
        variant="h5"
        sx={{
          mb: 1,
          color: "#2D3748",
        }}
      >
        {label}
      </Typography>

      <Select
        // {...rest}
        onChange={(e) => setFieldValue("user_role", e)}
        value={value}
        placeholder={placeholder}
        options={options}
        style={{ width: "100%" }}
      />

      {/* <Select {...rest} placeholder={placeholder} options={options} /> */}
    </Box>
  );
};
