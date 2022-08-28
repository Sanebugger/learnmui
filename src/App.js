import {  Container, createTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import './App.css'
import FeaturedPost from './components/FeaturedPost';


function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
   <>
   <ThemeProvider theme={darkTheme}>
   <Container>
     <Header/>
     <FeaturedPost/>
   </Container>
   </ThemeProvider>
   </>
  );
}

export default App;
