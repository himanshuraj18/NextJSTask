import Blog from "../components/blog";
import HeaderComponent from "../components/header";
import React, { useState } from "react";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function Browse({ blogsList, setBlogsList }) {
	React.useEffect(()=>{
		let initBlogs;
		if (localStorage.getItem("blogs") === null) {
			initBlogs = [];
		}
		else {
			initBlogs = JSON.parse(localStorage.getItem("blogs"));
		}
		setBlogsList(initBlogs);
	}, []);

	const onDelete = (blog) => {
		setBlogsList(blogsList.filter((e) => {
			return e !== blog;
		}));
		toast('Blog Deleted Successfully!');
	}

	React.useEffect(()=>{
        localStorage.setItem("blogs", JSON.stringify(blogsList));
    }, [blogsList]);

	return (
		<div>
			<HeaderComponent />
			<div className="row justify-content-center" style={{ width: "98%", paddingTop: "7.5%" }}>
				{
					blogsList.length == 0 ? "Such empty, much wow. Start blogging now!" :
						blogsList.map((blog) => {
							return <Blog blog={blog} key={blog.sno} onDelete={onDelete} />
						})
				}
			</div>
		</div>
	)
}