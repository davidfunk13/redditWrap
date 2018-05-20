import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActionCreators from '../../actions/postActions'

class Card extends Component {
    render() {
        return (
            <div className='card-container'>
                {this.props.posts.title}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        posts: state.posts,
    }
}



export default connect(mapStateToProps)(Card);