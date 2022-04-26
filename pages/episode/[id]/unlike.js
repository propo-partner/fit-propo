import { useRouter } from "next/router";
import Link from 'next/link'
import CommonBox4 from '../../../components/commonBox4'
import styles from '../../../styles/common.module.css'
import { useForm } from "react-hook-form";

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'withPlayer'
    },
  }
}

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
  const { id } = router.query

  const onSubmit = async (data) => {
    const putDataIntentMessageLogs = 
      {
        uid: "305",
        episode_id: "episode33",
        message: data.unlikeText,
      }

    console.log(putDataIntentMessageLogs)

    // post data
    const postUrl = "https://v1.nocodeapi.com/propofm/airtable/vWKvQMugEcliaMcn?tableName=intent_massage_logs&typecast=post"

    const intentHeaders = new Headers();
    intentHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: intentHeaders,
      redirect: "follow",
      body: JSON.stringify([
        putDataIntentMessageLogs
      ])
    }

    const res = await fetch(postUrl, requestOptions)
    const result = await res.json()

    if (res.ok) {
      router.push("/episode/radiohistory/feedback")
    } else {
      alert('通信エラーが発生しました。しばらく経ってから、再度送信してください。')
    }
  }


  return (
    <>
      <section className={styles.listener_unlike_input}>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`}>ご回答ありがとうございます！</h2>
        <p className={`${styles.c_text} ${styles.mb24} `}>
        ご興味に合わなかったとのこと、これと似た新着エピソードは今後送らないようにしますね。<br />
        最後に、フィードバックにご協力お願いできますでしょうか？<br />
        フィードバックを沢山くださる方には、PROPO.FM からささやかなお礼をお届けします。
        </p>
        <form className={`${styles.c_normalForm_area} ${styles.mb30}`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.textarea_wrap} ${styles.mb24}`}>
            <textarea 
              name="unlike_freetext"
              placeholder="ご自由にご記入ください。"
              {...register("unlikeText[]", {})}
              className={styles.c_input_textarea}
            >
            </textarea>
          </div>

          <div className={`${styles.c_flex_wrap_center} ${styles.mb80}`}>
              <div className={`${styles.c_roundBtn_white_small} ${styles.mr12} ${styles.m0}`}>
                <Link href="/episode/radiohistory">
                  <a className={styles.c_roundBtn_inner}>
                    <span>再生ページへ戻る</span>
                  </a>
                </Link>
              </div>
            <div className={`${styles.c_roundBtn} ${styles.align_center_pc} ${styles.m0}`}>
              <div className={styles.c_roundBtn_inner}>
                <span>回答を送る</span>
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
