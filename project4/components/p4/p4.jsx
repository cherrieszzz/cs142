import React from 'react';
import Header from '../header/header' 
import Example from '../example/Example'
import States from '../states/States';

class p4 extends React.Component {
   constructor(prpos) {
    super(prpos)

    this.state = {
        flag : true,
    }
   }

    handleClick = () => {
        this.setState({
            flag : !this.state.flag
        })
        console.log(this.state.flag)
    }

    render() { 
        return (    
            <>
            <Header />
            <button onClick={this.handleClick}>点击切换视图</button>
            {
                this.state.flag  ? <Example /> : <States />
            }
            </>
        );
    }
}
 
export default p4;