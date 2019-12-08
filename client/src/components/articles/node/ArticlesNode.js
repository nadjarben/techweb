import React, {useContext} from 'react';
import { I18nContext } from '../../../i18n';

export default function ArticlesNode() {
    const { translate } = useContext(I18nContext);
    return (
        <div style={{marginTop:'5vh'}}> 
            <h5 className='articles-subtitle'>{translate('articles_node_title')}</h5>
            <ul className='ul list-themes'>
                <li>
                {translate('articles_node_article1')}
                </li>
                <li>
                    {translate('articles_node_article2')}
                </li>
                <li>
                    {translate('articles_node_article3')}
                </li>
                <li>
                    {translate('articles_node_article4')}
                </li>
            </ul>
        </div>
    )
}