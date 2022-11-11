import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return(
    <>
      <header className={styles.header}>
        <h1>Iotasol Javascript Assignment</h1>
      </header>
      
      <ul className={styles.taskList}>
        <li>
          <Link href="/iotasol/work-1">Passing value from one page to another without using form.</Link>
        </li>
        <li>
          <Link href="/iotasol/work-2">Page One To Page Two Redirect Without Using Anchor Tag</Link>
        </li>
        <li>
          <Link href="/iotasol/work-3">Reading the Value Of Radio Button Selected Item.</Link>
        </li>
        <li>
          <Link href="/iotasol/work-4">Reading the Value of Drop Down’s Selected Item.</Link>
        </li>
        <li>
          <Link href="/iotasol/work-5">Checkboxes</Link>
        </li>
        <li>
          <Link href="/iotasol/work-6">Adding New TD’s Dynamically To a Table.</Link>
        </li>
        <li>
          <Link href="/iotasol/work-7">Changing Image</Link>
        </li>
        <li>
          <Link href="/iotasol/work-8">Javascript Assignment Work 8</Link>
        </li>
        <li>
          <Link href="/iotasol/work-9">Javascript Assignment Work 9</Link>
        </li>
        <li>
          <Link href="/iotasol/work-10">Javascript Assignment Work 10</Link>
        </li>
      </ul>
     
    </>
    
  )
}