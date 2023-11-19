import Link from 'next/link'
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Events (Next.js)</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Events</Link>
          </li>
          <li>
            <Link href='/new-event'>Add New Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
