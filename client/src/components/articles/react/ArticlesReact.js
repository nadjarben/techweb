import React, {useContext} from 'react';
import { I18nContext } from '../../../i18n';

export default function LearnReactHooks() {
    const { translate } = useContext(I18nContext);
    return (
        <div style={{marginTop:'5vh'}}> 
            <h5 className='articles-subtitle'>{translate('articles_react_title')}</h5>
            <ul className='ul list-themes'>
                <li>
                    {translate('articles_react_article1')}
                </li>
                <li>
                    {translate('articles_react_article2')}
                </li>
                <li>
                    {translate('articles_react_article3')}
                </li>
                <li>
                    {translate('articles_react_article4')}
                </li>
                <li>
                    {translate('articles_react_article5')}
                </li>
            </ul>
        </div>
    )
}