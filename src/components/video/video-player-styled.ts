import styled from 'styled-components';

type VideoPropsTypes = {
  played?: number;
  isPlaying?: boolean;
};
const VideoError = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  font-size: 20px;
  z-index: 5;
  display: grid;
  align-content: center;
  & span {
    color: var(--white);
    font-weight: 700;
  }
`;
const VideoPlayerTrack = styled('div')<VideoPropsTypes>`
  position: relative;
  &:after {
    content: '';
    background-color: red;
    height: 10px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(-50%);
    width: ${props =>
      props.played && props.played > 0 ? `${props.played * 100}%` : '0'};
    background-color: red;
  }
`;

const ControlContainer = styled('div')`
  /*Style the range Imputs*/
  [type='range'] {
    z-index: 2;
    position: relative;
    -webkit-appearance: none;
    background: transparent;
    margin: 12px 0;
    width: 100%;
    transition: all 0.2s ease;
  }
  [type='range']::-moz-focus-outer {
    border: 0;
  }
  [type='range']:focus {
    outline: 0;
  }
  [type='range']:focus::-webkit-slider-runnable-track {
  }
  [type='range']::-webkit-slider-runnable-track {
    cursor: default;
  }
  [type='range']::-webkit-slider-thumb {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);
    background: #607d8b;
    border: 2px solid #eceff1;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: default;
    height: 24px;
    width: 24px;
    -webkit-appearance: none;
    position: relative;
    top: 20px;
    transform: translateY(-50%);

    transition: all 0.2s ease;
    will-change: scroll-position;
  }
  [type='range']::-moz-range-track {
    cursor: default;
    transition: all 0.2s ease;
  }
  [type='range']::-moz-range-thumb {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);
    background: #607d8b;
    border: 2px solid #eceff1;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: default;
    height: 24px;
    width: 24px;
  }
  [type='range']:disabled::-webkit-slider-thumb,
  [type='range']:disabled::-moz-range-thumb,
  [type='range']:disabled::-ms-thumb,
  [type='range']:disabled::-webkit-slider-runnable-track,
  [type='range']:disabled::-ms-fill-lower,
  [type='range']:disabled::-ms-fill-upper {
    cursor: not-allowed;
  }
`;
const VideoPlayerContainer = styled('div')`
  position: relative;
`;
const PlayButton = styled('div')<VideoPropsTypes>`
  border-radius: 5px;
  opacity: ${props => (props.isPlaying ? 0 : 1)};
  background-color: rgba(0, 0, 0, 0.5);
  cursor: ${props => (props.isPlaying ? 'default' : 'pointer')};
  position: absolute;
  z-index: 100;
  width: 95px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const Play = styled('span')<VideoPropsTypes>`
  opacity: ${props => (props.isPlaying ? 0 : 1)};
  &:before {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    content: '';
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-left: 25px solid rgba(255, 255, 255, 0.9);
    transition: all 0.5s ease;
  }

  &:hover:before {
    border-left-color: rgba(0, 0, 0, 0.9);
  }
`;
const Pause = styled('span')<VideoPropsTypes>`
  opacity: ${props => (props.isPlaying ? 1 : 0)};
  transition: all 0.5s ease;
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 10px;
    height: 60%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.9);
    border-style: double;
    border-width: 0px 0 0px 32px;
  }
  &:hover:after {
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.9);
  }
`;

export {
  PlayButton,
  ControlContainer,
  VideoPlayerContainer,
  VideoPlayerTrack,
  Play,
  Pause,
  VideoError,
};
