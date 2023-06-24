import Link from 'next/link';

// eslint-disable-next-line import/no-anonymous-default-export
export default function About( { repoCount } ) {
  return <>
    <h1>About page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, omnis quas facere vero iure veritatis consectetur atque vel magni.</p>
    <p>I have {repoCount} public repos on my GitHub</p>
    <Link href='/'>
      Back to Home
    </Link>
  </>
}

export async function getStaticProps() {
  const res = await fetch( `${process.env.githubURL}/users/ahbenali` )
  const data = await res.json()

  return {
    props: {
      repoCount: data.public_repos
    },
    revalidate: 10 // default cache: 
  }
}


