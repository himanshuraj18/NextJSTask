import HeaderComponent from "../components/header";
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default function About({ blogsList, setBlogsList }) {
	return (
		<div>
			<Head>
                <title>Blogs Page</title>
            </Head>
			<HeaderComponent />
			<div className="row justify-content-center" style={{ width: "99.99%", paddingTop: "7.5%" }}>
				<p className="col-sm-6 fs-5 justify-content-center">A simple blogging application with minimum features to learn Next.js basics. Check the code repositoy at <a href="https://github.com/himanshuraj18/NextJSTask" target="_blank">GitHub</a>.</p>
			</div>
		</div>
	)
}