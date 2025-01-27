import { Box } from '@mui/system';
import Searchbar from './components/Searchbar/Searchbar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';
import youtube from './api/youtube';
import { useState } from 'react';
import Provider from './aplication/Provider';

function App() {
  const [videos,setVideos] = useState([]); 

  const handleSubmit = async (term) => {
    console.log('app',term) 
    const response = await youtube.get('/search',{
      params:{
        q: term
      } 
    });
    setVideos(response.data.items);
    console.log(videos);
  }; 

  return (
     <Provider>
      <Box sx={{
        mt:5,
        ml: 5,
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
      }}>
        <Box sx={{
          width: 1200
        }}> 
          <Searchbar handleFormSubmit={handleSubmit}/>
        </Box>
        <Box sx={{
          display: 'flex',
        }}>
          <Box sx={{
            width: 700,
            mt: 5,
            ml: 5,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <VideoDetail/>
          </Box>
          <Box sx={{
            mt: 5,
            ml: 10,
          }}>
            <VideoList videos={videos}/>
          </Box>
        </Box>
      </Box>
    </Provider> 
  );
}

export default App;
