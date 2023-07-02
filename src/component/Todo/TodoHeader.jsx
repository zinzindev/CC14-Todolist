import styles from './TodoHeader.module.scss';
import { getFormatDate } from '../../utils/DateUtils';

export function TodoHeader() {
	return (
		<div className={styles.header}>
			<h1>Inbox</h1>
			<p>{getFormatDate(Date.now())}</p>
		</div>
	);
}
