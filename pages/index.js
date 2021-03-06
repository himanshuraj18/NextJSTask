import Head from 'next/head'
import HeaderComponent from "../components/header";

export default function Home({ blogsList, setBlogsList }) {
	return (
		<div>
			<Head>
				<title>Blogging App</title>
			</Head>
			<HeaderComponent />
			<div className="row justify-content-center" style={{ width: "99.999%", paddingTop: "5%" }}>
				<div className="col-sm-8">
					<h2>
						Features
					</h2>
					<ul>
						<li className="fs-5">
							Add blogs.
						</li>
						<li className="fs-5">
							View all blogs.
						</li>
						<li className="fs-5">
							Delete any blog.
						</li>
						<li className="fs-5">
							Local Storage.
						</li>
						<li className="fs-5">
							Edit Blog.
						</li>
						<li className="fs-5">
							Search Blogs.
						</li>
						<li className="fs-5">
							Filter search.
						</li>
						<li className="fs-5">
							Pagination in browsing.
						</li>
						<li className="fs-5">
							Responsive Design.
						</li>
						<li className="fs-5">
							Google Sign In.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
