import React, { useRef } from "react"
import { useRouter } from "next/router";
import Link from 'next/link'
import CommonBox3 from '../../components/commonBox3'
import Layout from '../../components/Layout'
import styles from '../../styles/common.module.css'
import { useForm } from "react-hook-form";


export default function ListenerInput () {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    // defaultValues
  } = useForm();

  const router = useRouter();

  const password = useRef({});
  password.current = watch("password", "");

  const topicLists = [
    "テック",
    "科学",
    "文化",
    "ニュース",
    "マーケティング",
    "書籍",
    "ビジネス",
    "アート",
    "政治",
    "金融",
    "生産性",
    "ライフスタイル",
    "文学",
    "哲学",
    "内省",
  ]

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
      router.push("/setting/complete")
    }
  }


  return (
    <Layout>
      <section className={styles.listener_topic_input}>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`}>トピックの登録</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
        興味があるトピックを教えていただけると、よりお好みに近い内容をお届けすることができます。<br />
        ぜひご回答ください。
        </p>
        <form className={`${styles.c_normalForm_area} ${styles.mb30}`} onSubmit={handleSubmit(onSubmit)}>
          <div className={`${styles.c_flexForm_area} ${styles.flexstart} ${styles.bborder} ${styles.mb24}`}>

            { topicLists.map((item, index) => {
              index = index + 1
              return (
                <div className={styles.c_check_wrap_50_25} key={`key_${index}`}>
                <label className={styles.c_label_check}>
                  <input 
                    {...register("favoriteTopics[]", {})}
                    id="topics"
                    type="checkbox"
                    value={item}
                    name="favoriteTopics[]"
                    className={styles.c_input_check} 
                    />
                    {item}
                </label>
              </div>
              )
            }) }
          </div>
          <div className={styles.passwd_resister}>
          <p className={`${styles.c_text} ${styles.mb24}`}>
            PROPO.FM のパスワードを設定してください。
          </p>
          <div className={`${styles.c_form_title}`}>パスワード<span>*必須</span></div>
          <div className={`${styles.c_input_wrap_grey} ${styles.email_form_wrap} ${styles.mb24}`}>
            <input 
              id="password"
              type="password"
              name="password"
              placeholder="半角英数字6文字以上"
              {...register("password", { 
                required: { value: true , message: "パスワードを入力してください" },
                minLength: {
                  value: 6,
                  message: "パスワードは6文字以上で入力してください",
                },
              })}
              className={`${styles.c_input_text_grey} ${styles.email_form}`}  />
              <img className={`${styles.c_ico_eye} ${styles.eye_off}`} src="/images/ico_eye_off.svg" />

              {errors.password && (
                <p className={styles.c_error_text}>{errors.password.message}</p>
              )}
            </div>
            <div className={`${styles.c_form_title}`}>パスワード<span>*必須</span></div>
            <div className={`${styles.c_input_wrap_grey} ${styles.email_form_wrap} ${styles.mb40}`}>
              <input 
                id="passwordRepeat"
                type="password"
                name="passwordRepeat"
                placeholder="半角英数字6文字以上"
                {...register("passwordRepeat", {
                  validate: value => 
                    value === password.current || "入力したパスワードと一致していません" ,
                })} 
                className={`${styles.c_input_text_grey} ${styles.email_form}`} />
              <img className={`${styles.c_ico_eye} ${styles.eye_off}`} src="/images/ico_eye_off.svg" />
                              
              {errors.passwordRepeat && (
                <p className={styles.c_error_text}>{errors.passwordRepeat.message}</p>
              )}
            </div>

            <div className={`${styles.c_roundBtn} ${styles.mb24} ${styles.align_center_pc}`}>
              <a href="https://propo.fm/" className={styles.c_roundBtn_inner}>
                <span>この内容を保存する</span>
                <img className={styles.ico_right} src="/images/ico_check.svg" />
              </a>
              <input className={styles.c_submit_btn_hidden} type="submit" value="" />
            </div>
        </div>
          </form>
      </section>

      <CommonBox3 />
    </Layout>
  )
}
