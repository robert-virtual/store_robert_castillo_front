import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Card from '../components/card'
import { Product } from '../types/models'
interface HomeProps {
  server?: string
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }) => {
  useEffect(() => {
    console.log(products)
  }, [])

  return (
    <div>
      <Head>
        <title>Store Robert Castillo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Store Robert Castillo
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {products.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.MAIN_SERVER}/api/products/range?start=0&end=20`
  )
  let { products } = await res.json()
  return {
    props: {
      products,
    },
  }
}
export default Home
