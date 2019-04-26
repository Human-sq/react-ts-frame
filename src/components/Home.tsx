import { observer,inject } from "mobx-react";
import * as React from 'react';

interface HomeProps { }

@observer
class Home extends React.Component<HomeProps, {}> {

  render() {
    return (
      <div>
        <p>Home</p>
      </div>
    );
  }
}

export default Home;
