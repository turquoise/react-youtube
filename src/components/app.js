import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyAGgiFB6OWVv3TsrdrdWrdKnwOJxfpG0nQ';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
      //console.log(data);
      this.setState({ videos: data});
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
