import RBNotification from "../RBNotification";
import useFetch from "../useFetch";
import RBBlogPreview from "./RBBlogPreview";

function RBBlogList() {
    const {data: blogs, isLoading, errors} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="blog-list">
            <h2 className="is-size-3">List of  blogs</h2>
            {errors && <RBNotification msg={errors} type={"danger"} />}
            {isLoading && <progress className="progress is-small is-primary" max="100"> 15%</progress>}
            { blogs ? <RBBlogPreview blogs={blogs} /> : <p>No blogs found</p> }
        </div>
    );
}

export default RBBlogList;