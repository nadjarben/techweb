import React, { useState ,useContext } from "react";
import { I18nContext } from "../../i18n";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import en from '../../assets/flag-en.png';
import fr from '../../assets/flag-fr.png';


const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { dispatch, langCode } = useContext(I18nContext);

  const changeFlag = () => {
    console.log('test')
      if(langCode === 'en') {
        return (
          <img src={en} alt="flag" width="25px" />
        )
      }
        if(langCode === 'fr') {
          return (
            <img src={fr} alt="flag" width="25px" />
        )
    }
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color>
        {changeFlag()}
        </DropdownToggle>
      <DropdownMenu flip={false}>
        <DropdownItem>
        <div className='lang' onClick={() => dispatch({type:'setLanguage', payload: 'en'})}><img src={en} width='25px' alt='en' /></div>
        </DropdownItem>
        <DropdownItem>
        <div className='lang' onClick={() => dispatch({type:'setLanguage', payload: 'fr'})}><img src={fr} width='25px' alt='fr' /></div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;