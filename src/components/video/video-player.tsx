import React, { useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

import {
  VideoPlayerContainer,
  PlayButton,
  Play,
  Pause,
  VideoError,
} from './video-player-styled';

interface VideoPlayerPropTypes {
  externalReference: string;
  videoUrl: string;
  posterUrl: string;
  playerRef?: ReactPlayerProps;
  loop?: boolean;
  playbackRate?: number;
  volume?: number;
  muted?: boolean;
}

type urlType = {
  src: string;
  type: string;
};

const VideoPlayer = ({
  videoUrl,
  posterUrl,
  loop = false,
  playbackRate = 1.0,
  volume = 1.0,
  muted = false,
}: VideoPlayerPropTypes) => {
  let playerRef = React.createRef<ReactPlayer>();
  const [isPlaying, setPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const url: urlType[] = [
    {
      src: `${videoUrl}?content=video`,
      type: 'video/webm',
    },
  ];

  const handleError = () => {
    setVideoError(true);
  };

  const handlePlay = () => {
    setPlaying(true);
  };
  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  // const handleStop = () => {
  //   setPlaying(false);
  // };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <VideoPlayerContainer id="react-player">
      {videoError && (
        <VideoError>
          <span>Error</span>
        </VideoError>
      )}
      {!videoError && (
        <PlayButton
          onClick={handlePlayPause}
          isPlaying={isPlaying && !videoError}
        >
          <Play isPlaying={isPlaying} />
          <Pause isPlaying={isPlaying} />
        </PlayButton>
      )}

      <ReactPlayer
        ref={playerRef}
        className="react-player"
        width="100%"
        height="100%"
        url={url}
        playing={isPlaying}
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
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onPlay={handlePlay}
        onPause={handlePause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={e => console.log('onSeek', e)}
        onEnded={() => console.log('onEnded')}
        onError={handleError}
        onProgress={e => console.log('onProgress', e)}
        onDuration={e => console.log('onDuration', e)}
      />
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
