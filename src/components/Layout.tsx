import { observer, inject } from "mobx-react";
import * as React from 'react';
import { number } from "prop-types";

interface IndexProps { }
// @inject(['dashbord'])
@observer
class Index extends React.Component<IndexProps, {}> {

    state = {
        value: 0
    }

    onChange = (x: number, y: number): void => {
        this.setState({
            value: x + y 
        })
        console.log('value', x + y);
    }

    render() {
        return (
            <div>
                <p>home</p>
                <button onClick={() => this.onChange(1, 2)}>click</button>
            </div>
        );
    }
}

export default Index;
