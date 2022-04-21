import React, { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Link from 'next/link'
import CommonBox4 from '../components/commonBox4'
import styles from '../styles/common.module.css'
import { useForm } from "react-hook-form";


export default function ListenerInput () {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    defaultValues,
    reset
  } = useForm();

  const router = useRouter();
  const [optoutReasons, setOptoutReasons] = useState([])

  // get optout-reasons
  const url = 'https://v1.nocodeapi.com/propofm/airtable/vWKvQMugEcliaMcn?tableName=optout_reasons'
  
  useEffect(() => {
    (async() => {
      const respons = await fetch(url)
      const data = await respons.json()
      setOptoutReasons([...data.records])
    })()
  }, [])

  // const [freeMessage, setFreeMessage] = useState()
  // const [reasonsText, setReasonsText] = useState()
  
  // submit
  const onSubmit = async (data) => {

    // setReasonsText((data.reasons).join(','))
    // setFreeMessage(data.unsubscribeText)
    // console.log(reasonsText)
    
    const putData = 
      {
        uid: "300",
        selected_item: (data.reasons).join(','),
        free_message: data.unsubscribeText
      }

    // console.log(putData)

    // post data
    const postUrl = "https://v1.nocodeapi.com/propofm/airtable/vWKvQMugEcliaMcn?tableName=optout_logs&typecast=post"

    const optoutHeaders = new Headers();
    optoutHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: optoutHeaders,
      redirect: "follow",
      body: JSON.stringify([
        putData
      ])
    };
    
    const res = await fetch(postUrl, requestOptions)
    const result = await res.json()
    // console.log("result", result);

    if (res.ok) {
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

            { optoutReasons.map((item, index) => {
              index = index + 1
              return (
                <div className={styles.c_check_wrap_100} key={`key_${index}`}>
                <label className={styles.c_label_check}>
                  <input
                    {...register("reasons", {
                    })}
                    defaultChecked={"メール配信内容が好みに合わなかった".includes(item.fields.item)}
                    id={item.id}
                    type="checkbox"
                    value={item.fields.item}
                    // name="unsubscribeReason[]"
                    className={styles.c_input_check} 
                    />
                    {item.fields.item}
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
              <div className={`${styles.c_roundBtn_white_small} ${styles.mr12} ${styles.m0}`} onClick={() => reset()}>
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
