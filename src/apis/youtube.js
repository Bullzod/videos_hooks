import axios from 'axios';

const KEY = 'AIzaSyAY8pUy1sEYBh4TlLTgXLCifDpzIRjZrf8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});