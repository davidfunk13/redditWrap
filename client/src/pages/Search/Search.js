import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Snoo from "../../utils/Snoo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActionCreators from "../../actions/postActions";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { HostedVideoCard, RichVideoCard, SelfCard, ImageCard, LinkCard, UndefinedCard } from '../../components/Cards/'


class Search extends Component {
  state = {
    search: "",
    empty: "There are no posts here"
  };
  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
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
                  return <LinkCard
                    key={posts.id}
                    type={posts.postType}
                    title={posts.title}
                    linkImg={posts.previewObjImage}
                  />;
                case "img":
                  return <ImageCard
                    key={posts.id}
                    type={posts.postType}
                    img={posts.img}
                    title={posts.title}
                  />;
                case "rich-video":
                  return <RichVideoCard
                    key={posts.id}
                    type={posts.postType}
                    title={posts.title}
                  />;
                case "hosted-video":
                  return <HostedVideoCard
                    key={posts.id}
                    type={posts.postType}
                    title={posts.title}
                  />;
                case "undefined":
                  return <UndefinedCard
                    key={posts.id}
                    type={posts.postType}
                    title={posts.title}
                  />;
                case "self":
                  return <SelfCard
                    key={posts.id}
                    type={posts.postType}
                    title={posts.title}
                  />;
                default:
                  return <p>Something went wrong</p>
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
