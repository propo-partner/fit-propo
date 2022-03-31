import Link from 'next/link'
import Layout from '../component/Layout'

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
        <Link href="/listenerForm">
          <a>メールアドレス入力画面へ(メニューからの遷移時)</a>
        </Link>
      </div>
    </Layout>
  )
}
