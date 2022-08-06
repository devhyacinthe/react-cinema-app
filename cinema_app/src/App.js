import {Routes, Route, BrowserRouter} from 'react-router-dom'
import PopularMovies from './pages/PopularMovies'
import NowPlayingMovies from './pages/NowPlayingMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import UpcomingMovies from './pages/UpcomingMovies'
import PopularTv from './pages/PopularTv'
import TodayTv from './pages/TodayTv'
import OnAirTv from './pages/OnAirTv'
import TopRatedTv from './pages/TopRatedTv'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element= {<PopularMovies/>}/>
        <Route path='/movies/now-playing' element= {<NowPlayingMovies/>}/>
        <Route path='/movies/upcoming' element={<UpcomingMovies/>}/>
        <Route path='/movies/top-rated' element={<TopRatedMovies/>}/>
        <Route path='/tv' element= {<PopularTv/>}/>
        <Route path="/tv/now-playing" element= {<TodayTv/>}/>
        <Route path='/tv/upcoming' element={<OnAirTv/>}/>
        <Route path='/tv/top-rated' element={<TopRatedTv/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

