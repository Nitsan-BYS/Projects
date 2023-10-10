import React, { useState } from 'react';
import styles from './NavBar.module.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [selectedKey, setSelectedKey] = useState('home');

   const isBrowsePage = location.pathname === '/browse';

   const handleNavItemSelect = (eventKey) => {
      setSelectedKey(eventKey);
   };

   const getItemStyle = (eventKey) => {
      return {
         fontWeight: selectedKey === eventKey ? 'bold' : 'normal',
      };
   };

   return (
      <SideNav
         onSelect={(selected) => {
            navigate('/' + selected);
         }}
         defaultExpanded={true}
         className={styles.navBackground}
      >
         <SideNav.Nav defaultSelected='home' className={styles.navBackground}>
            <NavItem
               active={false}
               disabled={true}
               className={styles.disablePtr}
            ></NavItem>
            <NavItem
               active={false}
               disabled={true}
               className={styles.disablePtr}
            >
               <NavText style={{ textAlign: 'center' }}>
                  <span className={styles.title} style={{ color: 'red' }}>
                     Popcorn <span style={{ color: 'white' }}>Movie Hall</span>
                  </span>
               </NavText>
            </NavItem>
            <NavItem
               active={false}
               disabled={true}
               className={styles.disablePtr}
            ></NavItem>
            <NavItem
               eventKey='home'
               onSelect={() => handleNavItemSelect('home')}
               style={getItemStyle('home')}
            >
               <NavIcon>
                  <i
                     className='fa fa-fw fa-home'
                     size='sm'
                     style={{ fontSize: '1.5em' }}
                  ></i>
               </NavIcon>
               <NavText>Home</NavText>
            </NavItem>
            <NavItem
               eventKey='browse'
               onSelect={() => handleNavItemSelect('browse')}
               style={{
                  ...getItemStyle('browse'),
                  fontWeight: isBrowsePage ? 'bold' : 'normal',
                  color: isBrowsePage ? 'white' : '#ff0000',
               }}
            >
               <NavIcon>
                  <i
                     className='fa-solid fa-compass'
                     style={{ fontSize: '1.5em', color: '#ff0000' }}
                  ></i>
               </NavIcon>
               <NavText>Browse</NavText>
            </NavItem>
            <NavItem
               eventKey='watchlist'
               onSelect={() => handleNavItemSelect('watchlist')}
               style={getItemStyle('watchlist')}
            >
               <NavIcon>
                  <i
                     className='fa-regular fa-heart fa-xl'
                     style={{ color: '#707070' }}
                  ></i>
               </NavIcon>
               <NavText>Watchlist</NavText>
            </NavItem>
            <NavItem
               active={false}
               disabled={true}
               className={styles.disablePtr}
            ></NavItem>
            <NavItem
               eventKey='load_more'
               onSelect={() => handleNavItemSelect('load_more')}
               style={getItemStyle('load_more')}
            >
               <NavIcon>
                  <i
                     className='fa-solid fa-circle-chevron-down'
                     style={{ color: '#ff0000' }}
                  ></i>
               </NavIcon>
               <NavText>Load More</NavText>
            </NavItem>
            <NavItem
               eventKey='logout'
               onSelect={() => handleNavItemSelect('logout')}
               style={getItemStyle('logout')}
            >
               <NavIcon>
                  <i
                     className='fa-solid fa-arrow-right-from-bracket'
                     style={{ color: 'white' }}
                  ></i>
               </NavIcon>
               <NavText>Logout</NavText>
            </NavItem>
         </SideNav.Nav>
      </SideNav>
   );
};

export default NavBar;
