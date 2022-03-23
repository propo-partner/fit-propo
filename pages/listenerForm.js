import { useRouter } from "next/router";
import Layout from '../component/Layout'
import styles from '../styles/common.module.css'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

export default function listenerForm () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
    console.log(data)
    const url = "https://api.json-generator.com/templates/60TLGKL5wU4k/data?access_token=lk2rn4iwvnw4vobuicawllp6fp4wj1we2n35raua"
    const params = {
      method: 'POST',
      body: data
    }
    console.log(params)
    const res = await fetch(url, params)
    const result = await res.json()
    // console.log(result.status);

    if (result.status === 'success') {
      router.push("/signupComplete")
    }

  }


  return (
    <Layout>
      <section className={styles.c_sec_grey}>
        <p className={`${styles.c_title_small} ${styles.mb20}`}>
        新しいお気に入りの番組を、<br />簡単に見つけよう。
        </p>
        <p className={`${styles.c_text} ${styles.mb10}`}>
        メール登録いただけると、お好みに合いそうなエピソードを PROPO.FM がセレクトしてお届けします。</p>
        <form className={`${styles.c_form_area} ${styles.mb30}`} onSubmit={handleSubmit(onSubmit)}>
          <div className={`${styles.c_input_wrap} ${styles.email_form_wrap}`}>
            <input {...register("email", { 
              required: true ,
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              },
            })} className={`${styles.c_input_text} ${styles.email_form}`} />
            {errors.email?.type === "required" && <p className={styles.c_error_text}>メールアドレスを入力してください</p>}
            {errors.email?.type === "pattern" && <p className={styles.c_error_text}>メールアドレスが不正です</p>}
          </div>
          <div className={styles.c_submit_wrap}>
            <input className={styles.c_submit_btn} type="submit" value="" />
          </div>
        </form>
        <p className={`${styles.c_text} ${styles.mb10}`}>
        番組を配信している方は、<a className={styles.c_textlink} href="">こちら</a>をご覧ください。<br />
        <a className={styles.c_textlink} href="">プライバシーポリシー</a>
        </p>
      </section>

    </Layout>
  )
}
