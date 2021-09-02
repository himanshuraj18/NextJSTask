import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [blogsList, setBlogsList] = useState([]);
	// React.useEffect(()=>{
	// 	let initBlogs;
	// 	if (localStorage.getItem("blogs") === null) {
	// 		initBlogs = [];
	// 	}
	// 	else {
	// 		initBlogs = JSON.parse(localStorage.getItem("blogs"));
	// 	}
	// 	setBlogsList(initBlogs);
	// }, []);
	return <Component {...pageProps} blogsList={blogsList} setBlogsList={setBlogsList} />
}

export default MyApp
