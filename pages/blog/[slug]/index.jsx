import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "@/styles/post.module.css";
// comment to compare colors with default

export default function Post( props ) {
  //to render title dynamically -> pass it explicitly to _app.js as PageProps.title
  const { post, title } = props;

  const router = useRouter()

  return (
    <>
      <p>
        <Link href="/blog">
          <small>&laquo; back to all blog posts</small>
        </Link>
      </p>
      <h2 className={styles.title}>{title}</h2>
      <p>{post.content}</p>
      <button className={styles.button} onClick={() => router.push( "/blog" )}>
        Click me to programmatically navigate or redirect
      </button>
    </>
  )
}

//          * * *  getStaticPath * * *

export async function getStaticPaths() {
  const res = await fetch( process.env.baseURL )
  const data = await res.json()

  const paths = data.posts.map( post => ( { params: { slug: post.slug } } ) )

  console.log( 'PATHS: ', paths );


  return { paths, fallback: false }
}

//          * * *  getStaticProps * * *

export async function getStaticProps( context ) {
  const res = await fetch( process.env.baseURL )
  const data = await res.json()

  // hoc filter renders an array -> we grab the first element that matches the filter even when the filter has only one element.
  const post = data.posts.filter( post => post.slug === context.params.slug )[0]

  return {
    props: {
      post,
      title: post.title // pass in the title showed on the top of the browser as props
    }
  }
}