import React from 'react';

function Steps() {
  return (
    <div>
      <div className='flex justify-center mt-10 mb-20'>
        <div className='rounded-full text-2xl ml-3 mr-2 font-bold items-center justify-center border-2 border-black'>1</div>
        <div className='flex-3 flex items-center justify-center'>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z' />
          </svg>
        </div>
        <div className="rounded-full text-2xl ml-3 mr-2 font-bold items-center justify-center border-2 border-black">2</div>
        <div className='flex-3 flex items-center justify-center'>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z' />
          </svg>
        </div>
        <div className="rounded-full text-2xl ml-2 font-bold items-center justify-center border-2 border-black">3</div>
      </div>
    </div>
  );
}

export default Steps;
