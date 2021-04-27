import React, { Component } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

import {
  VideoPlayerContainer,
  PlayButton,
  Play,
  Pause,
  VideoError,
} from './video-player-styled';
type CostarVideoPlayerPropTypes = {
  externalReference: string;
  videoUrl: string;
  posterUrl: string;
};

type urlType = {
  src: string;
  type: string;
};

type stateType = {
  playing: boolean;
  played: number;
  videoError: boolean;
};
class CostarVideoPlayer extends Component<ReactPlayerProps> {
  //ref = React.createRef();
  private player = React.createRef<ReactPlayer>();

  private url: urlType[] = [];
  state: stateType;
  constructor(props: CostarVideoPlayerPropTypes) {
    super(props);
    const { videoUrl } = props;
    this.url = [
      {
        src: `${videoUrl}?content=video`,
        type: 'video/webm',
      },
    ];
    this.state = {
      playing: false,
      played: 0,
      videoError: false,
    };
  }

  handleError = () => {
    this.setState({ videoError: true });
  };

  handlePlay = () => {
    this.setState({ playing: true });
  };
  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ playing: false });
  };

  handlePause = () => {
    this.setState({ playing: false });
  };

  render() {
    const { posterUrl } = this.props;
    const { playing, videoError } = this.state;

    return (
      <VideoPlayerContainer id="react-player">
        {videoError && (
          <VideoError>
            <span>Error</span>
          </VideoError>
        )}
        {!videoError && (
          <PlayButton
            onClick={this.handlePlayPause}
            isPlaying={playing && !videoError}
          >
            <Play isPlaying={playing} />
            <Pause isPlaying={playing} />
          </PlayButton>
        )}

        {/* <ReactPlayer
          // ref={this.ref}
          url={this.url}
          id="react-player-video"
          playing={playing}
          width="100%"
          height="100%"
          config={{
            file: {
              forceAudio: true,
              attributes: {
                id: 'videoPlayer',
                poster: `${attachmentUrl}/poster`,
              },
            },
          }}
          controls={true}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onError={this.handleError}
        /> */}

        <ReactPlayer
          ref={this.player}
          className="react-player"
          width="100%"
          height="100%"
          url={this.url}
          playing={playing}
          controls={true}
          config={{
            file: {
              forceAudio: true,
              attributes: {
                id: 'videoPlayer',
                poster: posterUrl,
              },
            },
          }}
          // light={light}
          // loop={loop}
          // playbackRate={playbackRate}
          // volume={volume}
          // muted={muted}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          onEnded={() => console.log('onEnded')}
          onError={e => console.log('onError', e)}
          onProgress={e => console.log('onProgress', e)}
          onDuration={e => console.log('onDuration', e)}
        />
      </VideoPlayerContainer>
    );
  }
}
export default CostarVideoPlayer;
