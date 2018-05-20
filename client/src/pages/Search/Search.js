import React, { Component } from "react";
import SearchForm from '../../components/SearchForm/SearchForm'
import Snoo from '../../utils/Snoo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as postActionCreators from '../../actions/postActions';
import SearchContainer from '../../components/SearchContainer/SearchContainer'
import Card from "../../components/Card/Card";

class Search extends Component {
    state = {
        search: '',
    }
    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
        console.log(this.state)
    };

    handleSearch = event => {
        event.preventDefault();
        if (this.state.search) {
            Snoo.snooScrape(this.state.search).then(res => {
                const { postActions } = this.props;
                postActions.postsToProps(res)
            })
        }
    };
    render() {
        return (
            <SearchContainer>
                <div className='search-form-container'>
                    <p className='search-text'>Please Search for a subreddit to return its contents!</p>
                    <div className='search-form'>
                        <SearchForm
                            id='search'
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button className='search-button' onClick={this.handleSearch}>Search</button>
                </div>

                {this.props.posts.length ? (
                    <div className='has-posts'>
                        {this.props.posts.map(posts => (
                            <Card/>
))}
                    </div>
                ) : (
                        <div className='no-posts'>not</div>
                    )}
            </SearchContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActionCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
