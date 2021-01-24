import RBNotification from "../RBNotification";
import useFetch from "../useFetch";
import RBBlogPreview from "./RBBlogPreview";

function RBBlogList() {
    const {data: blogs, isLoading, errors} = useFetch('http://localhost:8000/blogs');
    console.log(blogs);
    return (
        <div className="blog-list">
            {errors && <RBNotification msg={errors} type={"danger"} />}
            {isLoading && <progress className="progress is-small is-primary" max="100"> 15%</progress>}
            { blogs ? <RBBlogPreview blogs={blogs} /> : <p>No blogs found</p> }
        </div>
    );
}

export default RBBlogList;