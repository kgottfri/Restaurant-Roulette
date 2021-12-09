
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';

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
        <Button variant="contained">this is a material UI button</Button>
      </>
    );
  }
}

export default hot(App);
