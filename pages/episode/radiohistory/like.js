import { useRouter } from "next/router";
import Link from 'next/link'
import CommonBox4 from '../../../components/commonBox4'
import Layout from '../../../components/Layout'
import styles from '../../../styles/common.module.css'
import { useForm } from "react-hook-form";
import { AudioPlayer } from "../../../components/AudioPlayer";


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
      router.push("/episode/radiohistory/feedback")
    }
  }


  return (
    <>
      <section className={styles.listener_like_input}>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`}>ご回答ありがとうございます！</h2>
        <p className={`${styles.c_text} ${styles.mb24} `}>
        ご興味に合っていて良かったです！これと似た新着エピソードを探して、またお届けするようにしますね。<br />
        最後に、フィードバックにご協力お願いできますでしょうか？<br />
        フィードバックを沢山くださる方には、PROPO.FM からささやかなお礼をお届けします。
        </p>
        <form className={`${styles.c_normalForm_area} ${styles.mb30}`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.textarea_wrap} ${styles.mb24}`}>
            <textarea 
              name="like_freetext"
              placeholder="ご自由にご記入ください。"
              {...register("likeText[]", {})}
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
      {/* <AudioPlayer /> */}
    </>
  )
}
