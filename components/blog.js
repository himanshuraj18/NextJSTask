function Blog({ blog, onDelete }) {
	return (
		<div className="col-sm-7">
			<div className="border-start border-3">
				<div className='row align-items-center justify-content-center' style={{ "marginLeft": "2%" }}>
					<div className='col-sm-9'>
						<h2>{blog.title}</h2>
						<p><em>{blog.author}</em></p>
						<p className="text-truncated">{blog.body}</p>
					</div>
					<div className='col-sm-3 align-items-center justify-content-center'>
						<div className="align-items-center justify-content-center">
							<button className="btn btn-outline-dark" style={{ marginRight: "5%" }}>E</button>
							<button className="btn btn-outline-dark" onClick={()=>onDelete(blog)}>D</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Blog