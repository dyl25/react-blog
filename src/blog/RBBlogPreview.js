function RBBlogPreview({blogs}) {
    console.log(blogs);
    return (
        <div className="blog-preview">
            {
                blogs.map(blog => (
                    <div className="card mt-3" key={blog.id}>
                        <div className="card-content">
                            <p className="title is-size-4">
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