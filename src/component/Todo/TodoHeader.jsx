import { Button } from '../../Common/Button';
import { getFormatDate } from '../../utils/DateUtils';
import { HiOutlineSwitchVertical } from 'react-icons/hi';

import styles from './TodoHeader.module.scss';

export function TodoHeader() {
	return (
		<div className={styles.header}>
			{/* STATUS-BAR */}
			<div className={styles.header__status__bar} >
				<h1>Today</h1>
				<p>{getFormatDate(Date.now())}</p>
			</div>

			{/* CONTROL-BAR */}
			<div className={styles.header__control__bar}>
				<Button text='status' />
				<Button text='date' active={false} />
				<Button text='task' active={false} />
				<span className={styles.control__bar__icon}>
					<HiOutlineSwitchVertical />
				</span>
			</div>
		</div>
	);
}
