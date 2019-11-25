import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';

export default function Question() {
    const { translate } = useContext(I18nContext);
    return (
        <div className='container contact'>
            <h1 style={{fontWeight:'bold'}}>{translate('form_contact')}</h1>
            <h5>{translate('form_questions')}</h5>
            <h5>{translate('form_fulfil')}</h5>
        </div>
    )
}