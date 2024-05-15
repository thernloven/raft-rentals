import { Box, Card, Grid, Typography } from "@mui/material";
import { Input, Select } from "antd";

function ProfileSettings() {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          padding: 3,
        }}
      >
        <Typography
          variant="h4"
          fontSize={22}
          marginBottom={2}
          fontWeight={600}
        >
          Basic Info
        </Typography>
        <Box component="form">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField label="First name" placeholder="Michael" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField label="Last name" placeholder="Jackson" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="I'm"
                placeholder="Male"
                // options={selectData.gender}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Birth Date"
                placeholder="February"
                // options={selectData.birthDate}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputField
                label="Email"
                placeholder="example@email.com"
                inputProps={{ type: "email" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Confirmation email"
                placeholder="example@email.com"
                inputProps={{ type: "email" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField label="Your location" placeholder="Sydney, A" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Phone number"
                placeholder="+40 735 631 620"
                inputProps={{ type: "number" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField label="Language" placeholder="English" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                {/* <VuiTagInput
                  tags={skills}
                  placeholder=" "
                  onChange={(newSkill) => setSkills(newSkill)}
                  removeOnBackspace
                /> */}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box
              sx={{
                borderRadius: 2,
                padding: 0.2,
                marginTop: 1,
                width: 250,
                background:
                  "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
              }}
            >
              <Typography
                textAlign={"center"}
                sx={{
                  cursor: "pointer",

                  color: "white",
                  fontSize: 12,
                  borderRadius: 1.5,
                  padding: 1,
                }}
              >
                Update Profile
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          padding: 3,
          mt: 3,
        }}
      >
        <Typography
          variant="h4"
          fontSize={22}
          marginBottom={2}
          fontWeight={600}
        >
          Change Password
        </Typography>
        <Grid container component="form" spacing={2}>
          <Grid item sm={12}>
            <InputField
              label="Current Password"
              placeholder="Current Password"
            />
          </Grid>
          <Grid item sm={12}>
            <InputField label="New Password" placeholder="New Password" />
          </Grid>
          <Grid item sm={12}>
            <InputField
              label="Confirm New Password"
              placeholder="Confirm New Password"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h4" fontSize={22} fontWeight={600}>
            Password requirements
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color={"#A0AEC0"}
            fontSize={12}
          >
            Please follow this guide for a strong password:
          </Typography>
          <Box component="ul">
            {[
              "One special characters",
              "Min 6 characters",
              "One number (2 are recommended)",
              "Change it often",
            ].map((item, index) => (
              <Typography
                fontWeight={400}
                color={"#A0AEC0"}
                key={index}
                component="li"
                fontSize={12}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box
              sx={{
                borderRadius: 2,
                padding: 0.2,
                marginTop: 1,
                width: 250,
                background:
                  "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
              }}
            >
              <Typography
                textAlign={"center"}
                sx={{
                  cursor: "pointer",

                  color: "white",
                  fontSize: 12,
                  borderRadius: 1.5,
                  padding: 1,
                }}
              >
                Add to Cart
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

const InputField = ({ label, placeholder }: any) => {
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
      <Input placeholder={placeholder} />
    </Box>
  );
};

const SelectField = ({ label, placeholder }: any) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          color: "#2D3748",
          mb: 1,
        }}
      >
        {label}
      </Typography>
      <Select style={{ width: "100%", margin: 0 }} placeholder={placeholder} />
    </Box>
  );
};
export default ProfileSettings;
