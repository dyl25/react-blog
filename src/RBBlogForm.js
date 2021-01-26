function RBBlogForm({ blog, handleSubmit, setTitle, setContent, setCreatedAt }) {

    let {title, content, created_at} = blog ?? '';

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={title} 
                className="input mt-3" 
                type="text" 
                placeholder="Title" 
                onChange={e => setTitle(e.target.value)}
            />
            
            <textarea 
                value={content} 
                className="textarea mt-3"
                onChange={e => setContent(e.target.value)}
            >
            </textarea>

            <input
                value={created_at}
                className="input mt-3"
                type="text"
                placeholder="Date" 
                onChange={e => setCreatedAt(e.target.value)}
            />

            <button type="submit" className="button is-primary mt-3">Primary</button>

        </form>

    );
}

export default RBBlogForm;