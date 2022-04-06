import React from 'react';
import styles from './PersonalInfo.module.css';

function PersonalInfo() {
  return (
    //I partially TailwindCSS and mostly used CSS modules because I didn't have enough time to explore TailwindCSS
    <div className={styles.container}>
      <form>
        <div className={styles.box}>
          <label className={styles.header}>Personal Info</label>
          <input
            type='text'
            className='mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-grey-300 focus:ring-opacity-50'
            placeholder='Name'
            required
          />
          <input
            type='text'
            className='text-align:left mt-1 w-full rounded-xl mt-5 border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-grey-300 focus:ring-opacity-50'
            placeholder='Age'
            required
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
