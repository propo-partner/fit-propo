import { useRouter } from "next/router";
import Layout from '../component/Layout'
import styles from '../styles/common.module.css'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

export default function listenerForm () {

  return (
    <Layout>
      <section className={styles.c_sec_grey}>
      messages page
      </section>

    </Layout>
  )
}
