import React, {useContext} from 'react';
import { I18nContext } from '../../../i18n';

export default function ReactNative() {
    const { translate } = useContext(I18nContext);

    return (
        <h2 style={{fontWeight: 'bold'}}>{translate('home_serv_seo_display_title')}</h2>
    )
}