import React from 'react';
import Steps from './Components/Steps/Steps';
import PersonalInfo from './Components/FormElements/PersonalInfo/PersonalInfo';
import PerInfo from './Components/FormElements/PerInfo/PerInfo';
import NextDone from './Components/NextDone/NextDone';

function App() {
  return (
    <>
        <Steps/>
        <PersonalInfo/>
        <PerInfo/>
        <NextDone/>
    </>
  );
}

export default App;
