import { useState } from 'react';
import { FaInbox, FaCalendarDay, FaCalendarAlt, FaChevronDown, FaCalendar } from 'react-icons/fa';

export function Sidebar({onSetectTab}) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelectTab = (index) => {
		setActiveIndex(index);
		onSetectTab(index);
	};

	const genericLists = [
		{ title: 'Inbox', icon: <FaInbox /> },
		{ title: 'Today', icon: <FaCalendarDay /> },
		{ title: 'Next 7 Days', icon: <FaCalendarAlt /> },
	];

	return (
		<aside className='sidebar'>
			<section className='sidebar__generic'>
				<ul className='generic__lists'>
					{/* <li className={activeIndex === 0 ? 'active' : ''} onClick={() => setActiveIndex(0)}>
						<span>
							<FaInbox />
						</span>
						<h6>Inbox</h6>
					</li>
					<li className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>
						<span>
							<FaCalendarDay />
						</span>
						<h6>Today</h6>
					</li>
					<li className={activeIndex === 2 ? 'active' : ''} onClick={() => setActiveIndex(2)}>
						<span>
							<FaCalendarAlt />
						</span>
						<h6>Next 7 Days</h6>
					</li> */}

					{genericLists.map((listObj, index) => (
						<li key={listObj.title} className={activeIndex === index ? 'active' : ''} onClick={() => handleSelectTab(index)}>
							<span>{listObj.icon}</span>
							<h6>{listObj.title}</h6>
						</li>
					))}
				</ul>
			</section>
			<section className='sidebar__middle'>
				<span>
					<FaChevronDown />
				</span>
				<h6>Projects</h6>
			</section>
			<section className='sidebar__projects'>
				<ul className='project__lists'>
					<li className=' '>
						<span>
							<FaInbox />
						</span>
						<h6>Project-A</h6>
					</li>
					<li>
						<span>
							<FaInbox />
						</span>
						<h6>Project-B</h6>
					</li>
				</ul>
			</section>
		</aside>
	);
}
