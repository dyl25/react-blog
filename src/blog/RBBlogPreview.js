function RBBlogPreview({blogs}) {
    console.log(blogs);
    return (
        <div className="blog-preview">
            {
                blogs.map(blog => (
                    <div className="card" key={blog.id}>
                        <div className="card-content">
                            <p className="title">
                                {blog.title}
                            </p>
                            <p className="card-content">
                                {blog.content}
                            </p>
                            <small>Creation date:{blog.created_at}</small>
                        </div>
                    </div>
                    ))
            }
        </div>
    );
}

export default RBBlogPreview;