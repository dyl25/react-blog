import { useState } from "react";
import RBBlogForm from "../RBBlogForm";

function RBBlogCreation() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('event catch');
    };

    return (
        <RBBlogForm 
        handleSubmit={handleSubmit} 
        setTitle={setTitle}
        setContent={setContent}
        setCreatedAt={setCreatedAt}
        />
    );
}

export default RBBlogCreation;