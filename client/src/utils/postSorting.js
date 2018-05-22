const postSorting = data => {
  let results = [];
  data.forEach(post => {
    console.log(post);
    switch (post.post_hint) {
      case "image":
        let imgPost = {
          id: post.id,
          postHint: post.post_hint,
          postType: "img",
          title: post.title,
          author: post.author,
          score: post.score,
          upvotes: post.ups,
          downvotes: post.downs,
          subreddit: post.subreddit,
          subredditId: post.subreddit_id,
          subredditPrefixed: post.subreddit_name_prefixed,
          thumbnail: post.thumbnail,
          imgurl: post.url,
          img: post.preview.images[0].source.url,
          previewObj: post.preview,
          secureMedia: post.secure_media,
          nsfw: post.over_18
        };
        results.push(imgPost);
        break;
      case "link":
      function getPostImage(post) {
        console.log(`get post image ${post}`)
      }
        let linkPost = {
          id: post.id,
          postHint: post.post_hint,
          postType: "link",
          title: post.title,
          author: post.author,
          score: post.score,
          upvotes: post.ups,
          downvotes: post.downs,
          subreddit: post.subreddit,
          subredditId: post.subreddit_id,
          subredditPrefixed: post.subreddit_name_prefixed,
          thumbnail: "add custom image here",
          linkurl: post.url,
          previewObj: post.preview,
          previewObjImage: this.getPostImage,
          secureMedia: post.secure_media,
          nsfw: post.over_18
        };
        results.push(linkPost);
        break;
      case "self":
        let selfPost = {
          id: post.id,
          postHint: post.post_hint,
          postType: "self",
          title: post.title,
          author: post.author,
          score: post.score,
          upvotes: post.ups,
          downvotes: post.downs,
          selftext: post.selftext,
          subreddit: post.subreddit,
          subredditId: post.subreddit_id,
          subredditPrefixed: post.subreddit_name_prefixed,
          thumbnail: post.thumbnail,
          url: post.url,
          previewObj: post.preview,
          secureMedia: post.secure_media,
          nsfw: post.over_18
        };
        results.push(selfPost);
        break;
      case undefined || "undefined":
        console.log("HAY UNDEFINED");
        let undefinedPost = {
          id: post.id,
          postHint: post.post_hint,
          postType: undefined || "undefined",
          title: post.title,
          author: post.author,
          score: post.score,
          upvotes: post.ups,
          downvotes: post.downs,
          subreddit: post.subreddit,
          subredditId: post.subreddit_id,
          subredditPrefixed: post.subreddit_name_prefixed,
          thumbnail: post.thumbnail,
          imgurl: post.url,
          img: post.preview.images[0].source.url,
          previewObj: post.preview,
          secureMedia: post.secure_media,
          nsfw: post.over_18
        };
        results.push(undefinedPost);
        break;
      case "hosted:video":
        let hostedVideoPost = {
          id: post.id,
          postHint: post.post_hint,
          postType: "hosted-video",
          title: post.title,
          author: post.author,
          score: post.score,
          domain: post.domain,
          isVideo: post.is_video,
          isSelf: post.is_self,
          isRedditMediaDomain: post.is_reddit_media_domain,
          mediaObj: post.media,
          redditVideoMediaObj: post.media.reddit_video,
          upvotes: post.ups,
          downvotes: post.downs,
          subreddit: post.subreddit,
          subredditId: post.subreddit_id,
          subredditPrefixed: post.subreddit_name_prefixed,
          thumbnail: post.thumbnail,
          url: post.url,
          img: post.preview.images[0].source.url,
          previewObj: post.preview,
          secureMedia: post.secure_media,
          nsfw: post.over_18
        };
        results.push(hostedVideoPost);
        break;
      case "rich:video":
        let richVideoPost = {
          id: post.id,
          postHint: post.post_hint,
          postType: "rich-video",
          title: post.title,
          author: post.author,
          score: post.score,
          domain: post.domain,
          isVideo: post.is_video,
          isSelf: post.is_self,
          isRedditMediaDomain: post.is_reddit_media_domain,
          secureMedia: post.secure_media,
          secureMediaEmbed: post.secure_media_embed,
          mediaObj: post.media,
          mediaObjType: post.media.type,
          mediaObjEmbedInfo: post.media.oembed,
          redditVideoMediaObj: post.media.reddit_video,
          upvotes: post.ups,
          downvotes: post.downs,
          subreddit: post.subreddit,
          subredditId: post.subreddit_id,
          subredditPrefixed: post.subreddit_name_prefixed,
          thumbnail: post.thumbnail,
          url: post.url,
          img: post.preview.images[0].source.url,
          previewObj: post.preview,
          nsfw: post.over_18
        };
        results.push(richVideoPost);
        break;
      default:
        console.log("something went wrong", post.post_hint);
    }
  });
  return results;
};
export default postSorting;
