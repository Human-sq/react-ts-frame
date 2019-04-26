import { observer, inject } from "mobx-react";
import * as React from 'react';

interface IndexProps { }
// @inject(['dashbord'])
@observer
class Index extends React.Component<IndexProps, {}> {

    render() {
        return (
        <div>11111</div>
        );
    }
}

export default Index;
