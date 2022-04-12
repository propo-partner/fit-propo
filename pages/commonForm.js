import { useRouter } from "next/router";
import Layout from '../components/Layout'
import styles from '../styles/common.module.css'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

export default function CommonForm () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
    console.log(data)
    // success
    const url = "https://api.json-generator.com/templates/60TLGKL5wU4k/data?access_token=lk2rn4iwvnw4vobuicawllp6fp4wj1we2n35raua"
    // error
    // const url = "https://api.json-generator.com/templates/8CDkXOck-FJL/data?access_token=lk2rn4iwvnw4vobuicawllp6fp4wj1we2n35raua"
    const params = {
      method: 'POST',
      body: data
    }
    console.log(params)
    const res = await fetch(url, params)
    const result = await res.json()
    console.log(result.status);

    if (result.status === 'success') {
      router.push("/confirm")
    }

  }


  return (
    <Layout>
      <section className={styles.common_footer_sec}>
        <div className={`${styles.c_sec_grey} ${styles.c_propo_info}`}>
        <div className={`${styles.c_propologo} ${styles.mb24}`}>
            <img className={styles.c_img_logo} src="/images/propofmBlack.png" alt="声に触れる、心ひろがる。 | PROPO.FM" />
          </div>
          <p className={`${styles.c_text} ${styles.mb10}`}>
            PROPO.FM は、人々の心に残るポッドキャストを世の中に届けるサービスです。ビジネスからアートまで、声の力を探求し、驚き・感動・優しさを紡ぎ、時間と空間を越えて、社会に新しいつながりを広げます。
          </p>
          <a className={styles.c_textlink} href="https://propo.fm/service">PROPO.FM のサービス</a>
        </div>

        <div className={`${styles.c_sec_grey} ${styles.common_footer}`}>
          <p className={`${styles.c_title_small} ${styles.mb20}`}>
          新しいお気に入りの番組を、<br className={styles.br_sp} />簡単に見つけよう。
          </p>
          <p className={`${styles.c_text} ${styles.mb10}`}>
          メール登録いただけると、お好みに合いそうなエピソードを PROPO.FM がセレクトしてお届けします。</p>
          <form className={`${styles.c_flexForm_area} ${styles.mb30}`} onSubmit={handleSubmit(onSubmit)}>
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
          <p className={`${styles.c_text}`}>
          番組を配信している方は、<a className={styles.c_textlink} href="">こちら</a>をご覧ください。<br />
          <a className={styles.c_textlink} href="">プライバシーポリシー</a>
          </p>
        </div>
      </section>

    </Layout>
  )
}
