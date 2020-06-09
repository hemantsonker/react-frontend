import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './components/navbar'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleList from './pages/ArticleList'
import NotFoundPage from './pages/pageNotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <div id="page-body">
        <Switch>
        <Route path='/' exact>
         <HomePage></HomePage>
        </Route>

        <Route path='/about'>
         <AboutUsPage></AboutUsPage>
        </Route>

        <Route path='/articleList'>
         <ArticleList></ArticleList>
        </Route>

        <Route path='/article/:name'>
         <ArticlePage></ArticlePage>
        </Route>

        <Route>
         <NotFoundPage />
        </Route>
         
        
        </Switch>
         
       
        </div>
      
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
