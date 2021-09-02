import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [blogsList, setBlogsList] = useState([]);
	return <Component {...pageProps} blogsList={blogsList} setBlogsList={setBlogsList} />
}

export default MyApp
