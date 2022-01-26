import { NextPage } from "next"
import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { CSSProperties, FunctionComponent } from 'react'

import styles from "../styles/components/Footer.module.scss"


//Base Webの読み込み


const Footer: FunctionComponent = () => {
    return (
    <div>
    <footer className={styles.footer}>
        <div>
            <small>© 2022 Go5 Lab.</small>
        </div>
        <div>
            <Link href="https://go5.run/">
                <a className={styles.link}>Website</a>
            </Link>
        </div>
    </footer>
    </div>
  )
}
export default Footer