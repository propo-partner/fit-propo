import React, { useRef } from "react"
import { useRouter } from "next/router";
import Link from 'next/link'
import CommonBox3 from '../component/commonBox3'
import Layout from '../component/Layout'
import styles from '../styles/common.module.css'
import { useForm } from "react-hook-form";


export default function ListenerTopicForm () {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm();

  const router = useRouter();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    console.log(data)
    // success
    const url = "https://api.json-generator.com/templates/60TLGKL5wU4k/data?access_token=lk2rn4iwvnw4vobuicawllp6fp4wj1we2n35raua"

    const params = {
      method: 'POST',
      body: data
    }
    console.log(params)
    const res = await fetch(url, params)
    const result = await res.json()
    console.log(result.status);

    if (result.status === 'success') {
      router.push("/topicComplete")
    }

  }


  return (
    <Layout>
      <section className={styles.listener_topic_input}>
        <h2 className={styles.c_title}>トピックの登録</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
        興味があるトピックを教えていただけると、よりお好みに近い内容をお届けすることができます。<br />
        ぜひご回答ください。
        </p>
        <div className={`${styles.c_flexForm_area} ${styles.flexstart}`}>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />テック
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />科学
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />文化
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />ニュース
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />マーケティング
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />書籍
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />ビジネス
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />アート
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />政治
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />金融
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />生産性
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />ライフスタイル
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />文学
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />哲学
            </label>
          </div>
          <div className={styles.c_check_wrap}>
            <label className={styles.c_label_check}>
              <input className={styles.c_input_check} type="checkbox" />内省
            </label>
          </div>
        </div>
      </section>
      <section className={styles.passwd_resister}>
      <p className={`${styles.c_text} ${styles.mb24}`}>
        PROPO.FM のパスワードを設定してください。
      </p>
      <form className={`${styles.c_normalForm_area} ${styles.mb30}`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.c_form_title}`}>パスワード<span>*必須</span></div>
        <div className={`${styles.c_input_wrap_grey} ${styles.email_form_wrap} ${styles.mb24}`}>
          <input 
            id="password"
            type="text"
            name="password"
            placeholder="半角英数字6文字以上"
            {...register("password", { 
              required: true ,
              minLength: {
                value: 6,
                message: "",
              },
            })}
            className={`${styles.c_input_text_grey} ${styles.email_form}`}  />
            {errors.password?.type === "required" && <p className={styles.c_error_text}>パスワードを入力してください</p>}
            {errors.password?.type === "minLength" && <p className={styles.c_error_text}>パスワードは6文字以上で入力してください</p>}
          </div>
          <div className={`${styles.c_form_title}`}>パスワード<span>*必須</span></div>
          <div className={`${styles.c_input_wrap_grey} ${styles.email_form_wrap} ${styles.mb40}`}>
            <input 
              id="passwordRepeat"
              type="text"
              name="passwordRepeat"
              placeholder="半角英数字6文字以上"
              // {...register("passwordRepeat")}
              {...register("passwordRepeat", {
                validate: value => value === password.current,
              })} 
              className={`${styles.c_input_text_grey} ${styles.email_form}`} />
            <img className={`${styles.c_ico_eye} ${styles.eye_off}`} src="/images/ico_eye_off.svg" />
            {errors.passwordRepeat?.type === "validate" && <p className={styles.c_error_text}>入力したパスワードと一致していません</p>}
          </div>
          <div className={`${styles.c_roundBtn} ${styles.mb24} ${styles.align_center_pc}`}>
  					<a href="https://propo.fm/" className={styles.topChannel__btn__link}>
              <span>この内容を保存する</span>
              <img className={styles.ico_right} src="/images/ico_check.svg" />
            </a>
            <input className={styles.c_submit_btn_hidden} type="submit" value="" />
				  </div>
        </form>
      </section>
      <CommonBox3 />
    </Layout>
  )
}
