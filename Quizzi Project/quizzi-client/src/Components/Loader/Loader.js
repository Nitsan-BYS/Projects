import { Typography } from '@material-ui/core';
import styles from "./Loader.module.css";

const Loader = () => {
	return (
		<>
			<Typography align='center' variant='h6' className={styles.typo}>Waiting for another Player </Typography>
			<div className={styles.loader}>
				<div className={styles.loader__circle} />
				<div className={styles.loader__circle} />
				<div className={styles.loader__circle} />
			</div>
		</>
	);
};

export default Loader;
