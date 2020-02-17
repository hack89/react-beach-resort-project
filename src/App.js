import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'

const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms/" exact component={Rooms}/>
            <Route path="/rooms/:slug" exact component={SingleRoom}/>
            <Route component={Error} />
        </Switch>
        </>
    )
}

export default App
