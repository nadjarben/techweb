import React from 'react';
import { Helmet } from 'react-helmet';
import ArticlesPresentation from '../components/articles/ArticlesPresentation';
import '../components/web/Web.css';

export default function Articles() {
    return (
        <div>
            <Helmet>
                <title>Articles sur le développemet web</title>
                <meta name="description" content="Articles de nos développeurs web freelance sur react, node ou toute autre technologie" />
            </Helmet>
            <ArticlesPresentation />
        </div>
    )
}