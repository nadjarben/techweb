import React, {useContext} from 'react';
import { I18nContext } from '../../../i18n';

export default function ArticlesReactn() {
    const { translate } = useContext(I18nContext);
    return (
        <div style={{marginTop:'5vh'}}> 
            <h5 className='articles-subtitle'>React Native</h5>
            <ul className='ul list-themes'>
                <li>
                    {translate('articles_reactn_article1')}
                </li>
                <li>
                    {translate('articles_reactn_article2')}
                </li>
                <li>
                    {translate('articles_reactn_article3')}
                </li>
            </ul>
        </div>
    )
}