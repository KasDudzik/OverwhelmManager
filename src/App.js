import { Grid } from "@mui/material";
import "./App.css";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MyHeader></MyHeader>
      </Grid>
    </Grid>
  );
}

export default App;
