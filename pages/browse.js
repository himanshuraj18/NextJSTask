import Blog from "../components/blog";
import HeaderComponent from "../components/header";
import React, { useState } from "react";

export default function Browse() {
	const [blogsList, setBlogsList] = useState([
		{ title: "pp", author: "ppp", body: "enfjenfef" },
		{ title: "eo", author: "yoy", body: "gnkrgjkrn" },
		{ title: "4p", author: "p5p", body: "enf6enfef" },
		{ title: "e5", author: "y4y", body: "gnk3gjkrn" }
	]);
	const onDelete = (blog) => {
		console.log("Blog Deleted -", blog);
		setBlogsList(blogsList.filter((e) => {
			return e !== blog;
		}))
	}
	return (
		<div>
			<HeaderComponent />
			<div className="row justify-content-center" style={{ width: "98%", paddingTop: "7.5%" }}>
				{
					blogsList.length == 0 ? "Such empty, much wow. Start blogging now!" :
						blogsList.map((blog) => {
							return <Blog blog={blog} key={blogsList.indexOf(blog)} onDelete={onDelete} />
						})
				}
			</div>
		</div>
	)
}