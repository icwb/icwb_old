const id = 'page or user id goes here';  
const access_token = 'for page if posting to a page, for user if posting to a user\'s feed';

const postImageOptions = {  
  method: 'POST',
  uri: `https://graph.facebook.com/v2.8/${id}/photos`,
  qs: {
    access_token: access_token,
    caption: 'Caption goes here',
    url: 'Image url goes here'
  }
};
request(postImageOptions);