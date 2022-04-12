import React, { useRef } from "react"
import { useRouter } from "next/router";
import Link from 'next/link'
import CommonBox4 from '../components/commonBox4'
import Layout from '../components/Layout'
import styles from '../styles/common.module.css'
import { useForm } from "react-hook-form";


export default function ListenerInput () {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    defaultValues
  } = useForm();

  const router = useRouter();

  const reasonLists = [
    {id: "reason1", reason: "メール配信内容が好みに合わなかった", checked: true},
    {id: "reason2", reason: "面白いエピソードが出会えなかった", checked: false},
    {id: "reason3", reason: "メール配信頻度が多い", checked: false},
    {id: "reason4", reason: "その他", chaeked: false},
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
      router.push("/unsubscribe-feedback")
    }
  }

  return (
    <>
      <section className={`${styles.unsubcribe_input} ${styles.mb80}`}>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`} onClick={() => {
          alert('click')
        }}>メール配信を停止しました。</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
          もしよろしければ、配信停止された理由を教えてください（複数選択可）。
        </p>
        <form className={`${styles.c_normalForm_area} ${styles.mb30}`} onSubmit={handleSubmit(onSubmit)}>
          <p className={`${styles.c_title_16} ${styles.mb16}`}>理由</p>
          <div className={`${styles.flexstart} ${styles.mb40}`}>

            { reasonLists.map((item, index) => {
              index = index + 1
              return (
                <div className={styles.c_check_wrap_100} key={`key_${index}`}>
                <label className={styles.c_label_check}>
                  <input
                    {...register("test", {
                    })}
                    defaultChecked={"メール配信内容が好みに合わなかった".includes(item.reason)}
                    id={item.id}
                    type="checkbox"
                    value={item.reason}
                    // name="unsubscribeReason[]"
                    className={styles.c_input_check} 
                    />
                    {item.reason}
                </label>
              </div>
              )
            }) }
          </div>
          <p className={`${styles.c_title_16} ${styles.mb16}`}>自由入力</p>

          <div className={`${styles.textarea_wrap} ${styles.mb24}`}>
            <textarea 
              name="freetext"
              placeholder="ご自由にご記入ください。"
              {...register("unsubscribeText[]", {})}
              className={styles.c_input_textarea}
            >
            </textarea>
          </div>

          <div className={`${styles.c_flex_wrap_center} ${styles.mb24}`}>
              <div className={`${styles.c_roundBtn_white_small} ${styles.mr12} ${styles.m0}`}>
                <div className={styles.c_roundBtn_inner}>
                  <span>内容をクリア</span>
                </div>
              </div>
            <div className={`${styles.c_roundBtn} ${styles.align_center_pc} ${styles.m0}`}>
              <div className={styles.c_roundBtn_inner}>
                <span>この内容を送る</span>
                <img className={styles.ico_right} src="/images/ico_check.svg" />
              </div>
              <input className={styles.c_submit_btn_hidden} type="submit" value="" />
            </div>
          </div>
        </form>
      </section>

      <CommonBox4 />
    </>
  )
}
