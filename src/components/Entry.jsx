import React, { Component } from 'react';
import {XCircle} from 'phosphor-react/dist/icons/XCircle';
class Entry extends Component {
    render() {
        return (
            <>
                <span className="entry"> 
                    {this.props.quan} x {this.props.fName} = {this.props.quan * this.props.baseCal}
                    <XCircle className='ph-x-circle-fill' size={25} color='f00' weight='fill'/>
                </span>
            </>
        );
    }

}

export default Entry;