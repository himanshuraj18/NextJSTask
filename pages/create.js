import HeaderComponent from "../components/header";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

toast.configure()

export default function Browse({ blogsList, setBlogsList }) {
    React.useEffect(() => {
        console.log("32323", localStorage.getItem("evbjb"))
        let initBlogs;
        if (localStorage.getItem("blogs") === null) {
            initBlogs = [];
        }
        else {
            initBlogs = JSON.parse(localStorage.getItem("blogs"));
        }
        setBlogsList(initBlogs);
    }, []);


    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const onSubmit = async event => {
        event.preventDefault();
        let sno;
        if (blogsList.length === 0) {
            sno = 0;
        }
        else {
            sno = blogsList[blogsList.length - 1].sno + 1;
        }
        const temp_blog = {
            sno: sno,
            title: title,
            author: author,
            body: body
        };
        setBlogsList([...blogsList, temp_blog])
        toast('Blog Posted Successfully!');
    }

    React.useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogsList));
    }, [blogsList]);

    return (
        <div>
            <Head>
                <title>Blogging App</title>
            </Head>
            <HeaderComponent />
            <div className="row justify-content-center" style={{ width: "99.99%" }}>
                <form className="col-sm-4" onSubmit={onSubmit}>
                    <div className="mb-3" style={{ marginTop: "10%" }}>
                        <label className="fs-4 fw-bold form-label" htmlFor="formTitle">Title</label>
                        <input type="text" className="form-control" id="formTitle" required={true} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3" style={{ marginTop: "5%" }}>
                        <label className="fs-4 fw-bold form-label" htmlFor="formBody">Content</label>
                        <textarea className="form-control" id="formBody" rows="10" required={true} onChange={e => setBody(e.target.value)} />
                    </div>
                    <div className="mb-3" style={{ marginTop: "5%" }}>
                        <label className="fs-4 fw-bold form-label" htmlFor="formAuthor">Author</label>
                        <input type="text" className="form-control" id="formAuthor" required={true} onChange={e => setAuthor(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: "2.5%" }} type="submit">Submit form</button>
                </form>
            </div>
        </div>
    )
}