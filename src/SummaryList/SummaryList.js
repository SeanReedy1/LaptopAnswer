import React, {Component} from 'react'
import SummaryItems from '../SummaryItems/SummaryItems'
import Total from '../Total/Total'

class SummaryList extends Component{
    render(props){
        return(
            <div>
                <h3>Your Cart</h3>
                <SummaryItems selected={this.props.selected} />
                <Total total={this.props.total} selected={this.props.selected}  />
            </div>
        )
    }
}

export default SummaryList