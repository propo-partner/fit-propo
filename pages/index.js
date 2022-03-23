import Link from 'next/link'
import Layout from '../component/Layout'

export default function Home() {
  return (
    <Layout>
      <Link href="/listnerForm">
        <a>メールアドレス入力画面へ</a>
      </Link>
    </Layout>
  )
}
