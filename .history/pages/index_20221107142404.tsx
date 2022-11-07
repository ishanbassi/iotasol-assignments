import styles from '../styles/home.module.css'
import Link from 'next/link'
export default function Home() {
  return(
    <>
      <header className={styles.header}>
        <h1>Iotasol Javascript Assignment</h1>
      </header>
      
      <ul className={styles.taskList}>
        <li>
          <Link href="/work-1">Passing value from one page to another without using form.</Link>
        </li>
        <li>
          <a>Page One To Page Two Redirect Without Using Anchor Tag</a>
        </li>
        <li>
          <a>Reading the Value Of Radio Button Selected Item.</a>
        </li>
        <li>
          <a>Reading the Value of Drop Down’s Selected Item.</a>
        </li>
        <li>
          <a>Checkboxes</a>
        </li>
        <li>
          <a>Adding New TD’s Dynamically To a Table.</a>
        </li>
        <li>
          <a>Changing Image</a>
        </li>
      </ul>
    </>
    
  )
}