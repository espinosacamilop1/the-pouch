// import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export const  NavBar = () => {
  return (
    <div className={styles.navbar}>
        <Link href='/'>
           <a> Logo</a>
        </Link>

        <div className={styles.navbar_links}>
            <Link href='/'>
                <a>Reviews</a>
            </Link>
            <Link href='/'>
                <a>About</a>
            </Link>
            <Link href='/'>
                <a>Contact</a>
            </Link>
            <Link href='/'>
                <a>FAQ</a>
            </Link>
        </div>

        <div>
            <Link href='/'>
                <a>Cart</a>
            </Link>
        </div>
    </div>
  )
}


// Logo, Reviews About Contact FAQ Cart