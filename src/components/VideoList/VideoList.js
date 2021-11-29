import React from 'react';
import PropTypes from 'prop-types';
import './VideoList.css';
import { Box } from '@mui/system';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = () => (
  <Box>
    <VideoItem/>
  </Box>
  );

VideoList.propTypes = {};

VideoList.defaultProps = {};

export default VideoList;
