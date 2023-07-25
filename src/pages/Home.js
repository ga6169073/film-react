import React from 'react'
import Navbar from '../components/Navbar'
import './Home.scss'
import Categories from '../components/Categories'
import List from '../components/List'
const Home = () => {
    return (
        <div className='home'>
            <Navbar />

            <Categories />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home

