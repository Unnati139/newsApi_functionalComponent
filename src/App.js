import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 const App = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 15;
  const [progress, setProgress] = useState(0)
    return (
      <>
      <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <NavBar/>
        
        <Routes>
            <Route  exact path="/" element={<News setProgress={setProgress}  apiKey={apiKey}    key="general" pageSize={pageSize}  category="general"/>}/>
            <Route  exact path="/business" element={<News setProgress={setProgress}  apiKey={apiKey}   key="business" pageSize={pageSize}  category="business"/>}/> 
            <Route  exact path="/entertainment"  element={<News setProgress={setProgress}  apiKey={apiKey}    key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
            <Route  exact path="/general" element={<News setProgress={setProgress}  apiKey={apiKey}    key="general" pageSize={pageSize}  category="general"/>}/>
            <Route  exact path="/health"  element={<News setProgress={setProgress}  apiKey={apiKey}   key="health" pageSize={pageSize}  category="health"/>}/>
            <Route  exact path="/science" element={<News setProgress={setProgress}  apiKey={apiKey}    key="science" pageSize={pageSize}  category="science"/>}/>
            <Route  exact path="/sports"  element={<News setProgress={setProgress}  apiKey={apiKey}   key="sports" pageSize={pageSize}  category="sports"/>}/>
            <Route  exact path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey}   key="technology"  pageSize={pageSize}  category="technology"/>}/>
        </Routes>
      </Router>
    </>
    )
  }
export default App;