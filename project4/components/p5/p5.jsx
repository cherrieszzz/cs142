import React from 'react';
import States from '../states/States'
import Example from '../example/Example'
import Header from '../header/header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class p5 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Router>
                    <div>
                        <Link to='/states'>states</Link>
                        {' '}
                        <Link to='/example'>example</Link>
                    </div>
                    <Route path="/states" component={States} />
                    <Route path="/example" component={Example} />
                </Router>
            </>

        );
    }
}

export default p5;