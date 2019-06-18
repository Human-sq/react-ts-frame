import { observer,inject } from "mobx-react";
import * as React from 'react';

interface HomeProps { }

@observer
class Home extends React.Component<HomeProps, {}> {

  onChange = (x: number, y: number): number => {
    return x + y;
  }

  render() {
    return (
      <div>
        <p>Home</p>
        <button onClick={() => this.onChange(1, 2)}>click</button>
      </div>
    );
  }
}

export default Home;
