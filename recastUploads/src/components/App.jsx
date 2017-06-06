class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      nowPlaying: exampleVideoData[0]
    };
  }

  componentDidMount(){
    this.getYoutubeVideos('cute cat video')
  }

  getYoutubeVideos(query){
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    }
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        nowPlaying: videos[0]
      });
    });
  }

  playThis(video){
    this.setState({
      nowPlaying: video
    });
  }

  render() {
    return (
      <div>
        <Nav searchInput={this.getYoutubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer
            video={this.state.nowPlaying}
          />
        </div>
        <div className="col-md-5">
          <VideoList
            videos={this.state.allVideos}
            playThis={this.playThis.bind(this)}
          />
        </div>
      </div>
    );
  };
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
