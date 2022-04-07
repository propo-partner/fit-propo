import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
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
      <div>
        <Link href="/signup">
          <a>B-7_メニューからの遷移時</a>
        </Link>
      </div>
    </Layout>
  )
}
