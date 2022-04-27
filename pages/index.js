import Link from 'next/link'

export default function Home() {

  // episodes data
  // const allEpisodeData = [
  //   {
  //     id: "s1u9swliszzgo7vg",
  //     epiNum: "epi511",
  //     title: "0511_「ルール整備が発展のカギ」オスマン帝国スレイマン1世とウィーン包囲",
  //   },
  //   {
  //     id: "b75r3in3q9x3j97p",
  //     epiNum: "epi512",
  //     title: "0512_ユグノー戦争とサンバルテルミの虐殺、和解の場が惨劇と化した恐怖",
  //   },
  // ]

  // console.log(allEpisodeData)


  return (
    <div>
      {/* <div>
        <h2>エピソードページへのリンク</h2>
        <ul>
          {allEpisodeData.map(({id, title}) => (
            <li key={id}>
              <Link href="/episode/[id]" as={`/episode/${id}`}>
                <a>
                  <h3>{title}</h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>

      </div>
      <br></br>
      <br></br>
      <br></br> */}
      <div>
        <Link href="/commonForm">
          <a>メールアドレス入力画面へ(共通フッター)</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/signup">
          <a>A-0_メニューからの遷移時</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/setting/input">
          <a>A-3_リスナー登録-入力ページ</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/episode/radiohistory">
          <a>B-2_リスナー用-エピソード再生ページ</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/episode/radiohistory/like">
          <a>B-3_リスナー用-likeページ</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/episode/radiohistory/unlike">
          <a>B-4_リスナー用-unlikeページ</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/episode/radiohistory/feedback">
          <a>B-5_リスナー用-送信完了ページ</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/unsubscribe">
          <a>B-6_オプトアウト停止理由</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link href="/unsubscribe-feedback">
          <a>B-7_オプトアウト全て完了</a>
        </Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
