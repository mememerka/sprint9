import Container from '@mui/material/Container'
import { Box } from '@mui/system';
import Searchbar from './components/Searchbar/Searchbar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';
import youtube from './api/youtube';
import { useState } from 'react';

function App() {
  const [videos,setVideos] = useState('');

  const handleSubmit = async () => {
    const data = await youtube.get('/search',{
      params:{
        q: searchTerm
      } 
    });
    console.log(data);
  };

  return (
    <Container maxWidth="xs">
      <Box>
        <Searchbar/>
      </Box>
      <Box>
        <VideoDetail/>
      </Box>
      <Box>
        <VideoList/>
      </Box>
    </Container>
  );
}

export default App;
