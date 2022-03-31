import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/Featured/Featured';
import Navigation from '../../Components/Navigation/Navigation';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widget/Widget';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navigation/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
    );
};

export default Home;