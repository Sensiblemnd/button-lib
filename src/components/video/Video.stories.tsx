import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import CostarVideoPlayer from './costar-video-player';

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'Component/CostarVideoPlayer',
  component: CostarVideoPlayer,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;
/**
 *
 * @param args
 * @returns
 */
export const Default = () => (
  <Container>
    <CostarVideoPlayer
      externalReference={'3o8b7m'}
      videoUrl={'http://cf.cdn.vid.ly/3o8b7m/webm.webm'}
      posterUrl={'http://cf.cdn.vid.ly/3o8b7m/poster.jpg'}
    />
  </Container>
);

Default.args = {
  text: 'Save Game',
};
