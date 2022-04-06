import React from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import styles from './PersonalInfo.module.css';

function PersonalInfo() {
  return (
    
    <div className={styles.container}>
      
      <form>
        <div className={styles.box}>
          <label className={styles.header}>Personal Info</label>
          <Dropdown/>

          {/* <input
            type='text'
            className='mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-grey-300 focus:ring-opacity-50'
            placeholder='Name'
            required
          />
          <input
            type='number'
            className='text-align:left w-full rounded-xl mt-5 border-gray-300 shadow-sm focus:ring focus:ring-grey-300 focus:ring-opacity-50'
            placeholder='Age'
            required
          /> */}
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
