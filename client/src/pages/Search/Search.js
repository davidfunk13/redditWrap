import React, { Component } from "react";
import SearchForm from '../../components/SearchForm/SearchForm'
import Snoo from '../../utils/Snoo'
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
            <SearchForm 
            id='search'
            onChange={this.handleInputChange}
            />
        );
    }
}

export default Search;
