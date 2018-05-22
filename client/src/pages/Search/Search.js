import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Snoo from "../../utils/Snoo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActionCreators from "../../actions/postActions";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import Card from "../../components/Card/Card";

class Search extends Component {
  postFilter = posts => {
    return <div>hello</div>;
  };

  state = {
    search: "",
    empty: "There are no posts here"
  };
  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
    console.log(this.state);
  };

  handleSearch = event => {
    event.preventDefault();
    if (this.state.search) {
      Snoo.snooScrape(this.state.search).then(res => {
        const { postActions } = this.props;
        postActions.postsToProps(res);
      });
    }
  };
  render() {
    return (
      <SearchContainer>
        <form>
          <div className="search-form-container">
            <p className="search-text">
              Please Search for a subreddit to return its contents!
            </p>
            <div className="search-form">
              <SearchForm id="search" onChange={this.handleInputChange} />
            </div>
            <button
              className="search-button"
              onSubmit={this.preventDefault}
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </form>

        {this.props.posts.length ? (
          <div className="has-posts">
            {this.props.posts.map(posts => {
              switch (posts.postType) {
                case "link":
                  return <div className="link-post">{posts.postType}</div>;
                case "img":
                  return <div className="img-post">{posts.postType}</div>;
                case "rich-video":
                  return <div className="rich-post">{posts.postType}</div>;
                case "hosted-video":
                  return <div className="hosted-post">{posts.postType}</div>;
                case "undefined":
                  return <div className="undefined-post">{posts.postType}</div>;
                case "self":
                  return <div className="self-post">{posts.postType}</div>;
              }
            })}
          </div>
        ) : (
          <div className="no-posts">
            <p>
              Nothing here! Please enter a subreddit into the search bar to get
              that reddit's posts!
            </p>
          </div>
        )}
      </SearchContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
