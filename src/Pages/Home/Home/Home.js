import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    UseTitle('Home')
    return (
        <div>
            <h2>Dragon News Home : {allNews.length} </h2>
            {
                allNews.map(news => <NewsSummaryCard 
                    key={news._id}
                    news={news}
                    ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;