import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"

const Page = () => {
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://go5.run/"/>
                <title key="site:title">Go5 Lab. | 🧪We are an organization that develops a variety of web applications.</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "This is a demo version under development. Basically, it does not work properly."}
                </Notification>
                </div>
                <div></div>
                <div className={styles.detail}>
                    <Link href="https://status.go5.run/">
                    <div className={styles.link}>
                    <a>👣MyStatus</a>
                    </div>
                    </Link>
                    <Link href="https://identicon.go5.run/">
                    <div className={styles.link}>
                    <a>📒identicon</a>
                    </div>
                    </Link>
                </div>
            </main>
        </div>
    )
}


export default Page