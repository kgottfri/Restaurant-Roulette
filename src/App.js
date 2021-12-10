
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Welcome to Restaurant Roulette
        </h1>
        <h2>
          aapple
        </h2>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained">this is a material UI button</Button>
          <Button variant="contained">this is a material UI button</Button>
          <Button variant="contained">this is a material UI button</Button>
        </Stack>
      </>
    );
  }
}

export default hot(App);
