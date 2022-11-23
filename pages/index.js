import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css"/>
            </Head>

            <main>
               <div className="container">
                   <h1 className="btn btn-danger p-2">
                       Welcome to Next.js!
                   </h1>
                   <Link href={'/blog'}>All Blog</Link>
                   <br/>
                   <Link href={'/blog/1'}>Blog Detail</Link>
                   <br/>
                   <br/>
                   <Link href={'/samples'}>All Samples</Link>
               </div>
            </main>
        </>
    )
}

export async function getStaticProps() {
    return{
        props: {

        }
    }
}