// import pic1 from './imgs/abstract/1.jpg';
// import pic2 from './imgs/abstract/2.jpg';
// import pic3 from './imgs/abstract/3.jpg';
// import pic4 from './imgs/abstract/2.jpg';
// import pic5 from './imgs/abstract/1.jpg';
// import pic6 from './imgs/abstract/2.jpg';

// const images = {
//    pic1: require('./imgs/abstract/1.jpg'),
//    pic2: require('./imgs/abstract/2.jpg'),
//    pic3: require('./imgs/abstract/3.jpg'),
//    pic4: require('./imgs/abstract/2.jpg'),
//    pic5: require('./imgs/abstract/1.jpg'),
//    pic6: require('./imgs/abstract/2.jpg'),
// };
// // export default [pic1, pic2, pic3, pic4, pic5, pic6];
// export default images;

const images = {
   pic1: {
      name: 'image 1',
      src: require('./imgs/abstract/1.jpg'),
      selected: false, // Add the selected property
   },
   pic2: {
      name: 'image 2',
      src: require('./imgs/abstract/2.jpg'),
      selected: false, // Add the selected property
   },
   pic3: {
      name: 'image 3',
      src: require('./imgs/abstract/3.jpg'),
      selected: false, // Add the selected property
   },
   pic4: {
      name: 'image 4',
      src: require('./imgs/abstract/2.jpg'),
      selected: false, // Add the selected property
   },
   pic5: {
      name: 'image 5',
      src: require('./imgs/abstract/1.jpg'),
      selected: false, // Add the selected property
   },
   pic6: {
      name: 'image 6',
      src: require('./imgs/abstract/2.jpg'),
      selected: false, // Add the selected property
   },
};

export default images;
