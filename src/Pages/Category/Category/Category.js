import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';


const Category = () => {
    const categoryNews = useLoaderData();
    UseTitle('Category')
    return (
        <div>
            <h2>This is category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;