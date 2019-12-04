import React, {useContext} from 'react';
import './ArticlesPresentation.css';
import { I18nContext } from '../../i18n';
import ArticlesReact from './react/ArticlesReact';
import ArticlesReactn from './reactn/ArticlesReactn';
import ArticlesNode from './node/ArticlesNode';
import ArticlesSeo from './seo/ArticlesSeo';

export default function ArticlesPresentation() {
    const { translate } = useContext(I18nContext);
    return (
        <div className='container container-articles'>
            <div className='text-center'>
                <h1>{translate('articles_title')}</h1>
            </div>
            <p className='text-center'>{translate('articles_subtitle')}</p>
            <ArticlesReact />
            <ArticlesReactn />
            <ArticlesNode />
            <ArticlesSeo />
        </div>
    )
}