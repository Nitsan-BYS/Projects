import Select from 'react-select';
import styles from './Dropdown.module.css';

const options = [
    { value: 'Name', label: 'Name' },
    { value: 'Age', label: 'Age' }
  ]
  
function Dropdown(){
    return (  
        <div className={styles.div} >
            <Select options={options} placeholder="Personal Info"/>
        </div>
    );
}
 
export default Dropdown;