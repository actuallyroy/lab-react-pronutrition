import React, { Component } from 'react';
import "https://unpkg.com/phosphor-icons"
class Entry extends Component {
    render() {
        return (
            <>
                <span className="entry"> 
                    {this.props.quan} x {this.props.fName} = {this.props.quan * this.props.baseCal}
                    <i className="ph-x-circle-fill"></i>
                </span>
            </>
        );
    }

}

export default Entry;