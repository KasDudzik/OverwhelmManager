import { Grid, Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import classes from "./MyHeader.module.css";

function MyHeader() {
  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={3}
      p={8.75}
      justifyContent="center"
      className={classes.headerContainer}
    >
      <Grid item xs={12}>
        <Typography align="center" fontWeight={500} variant="h2">
          Overwhelm Manager
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" fontWeight={400} variant="h6">
          MANAGE YOUR PLAY
        </Typography>
      </Grid>
    </Grid>
  );
}

export default MyHeader;
