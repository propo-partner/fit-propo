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
    </Layout>
  )
}
