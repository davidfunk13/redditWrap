import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActionCreators from '../../actions/postActions'

class Card extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div className='card-container'>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        posts: state.posts,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActionCreators, dispatch)
    }
}

export default connect()(Card);