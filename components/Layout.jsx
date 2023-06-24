import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
	const router = useRouter();
	const { pathname } = router;

	// console.log('ROUTER: ',router);

	return (
		<>
			{/* Navbar */}
			<div className='header'>
				<Link href='/'>AppLogo</Link>
				<nav className='header-nav'>
					<ul>
						<li>
							<Link
								href='/'
								className={pathname === '/' ? 'active' : ''}>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								className={pathname === '/about' ? 'active' : ''}>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/blog'
								className={
									pathname === '/blog' || pathname === '/blog/' ? 'active' : ''
								}>
								Blog
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			{children}
			{/* footer */}
			{/* <div  className='btn-wrap' >
         <button className='btn-back'
            onClick={() => router.back( )}
        >{'<<   ' } Back</button>
       </div>
      <div class='site-footer'>
      </div> */}
		</>
	);
}
