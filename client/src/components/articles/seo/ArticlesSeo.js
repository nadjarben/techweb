import React, {useContext} from 'react';
import { I18nContext } from '../../../i18n';

export default function ArticlesReact() {
    const { translate } = useContext(I18nContext);
    return (
        <div style={{marginTop:'5vh'}}> 
            <h5 className='articles-subtitle'>{translate('articles_seo_title')}</h5>
            <ul className='ul list-themes'>
                <li>
                    {translate('articles_seo_article1')}
                </li>
                <li>
                    {translate('articles_seo_article2')}
                </li>
                <li>
                    {translate('articles_seo_article3')}
                </li>
            </ul>
        </div>
    )
}