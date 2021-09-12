import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

class ItemList extends React.Component {
    showList() {
        return this.props.data.map((item) => {
            return (
                <div key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>E-mail: {item.email}</p>
                    <p>Website: {item.website}</p>
                    <p>Company Name: {item.company.name}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <ul className='item-list'>
                {this.showList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(ItemList)