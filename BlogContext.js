import React,{ useState } from 'react';

const BlogContext = React.createContext();

 export const BlogProvider = ({ Children }) => {

    const [blogPosts,setBlogPosts] = useState([]);

    const addBlogPosts = () => {
        setBlogPosts([
            ...blogPosts,
            { id:Math.floor(Math.random()*99999) ,title: `Blog post #${blogPosts.length + 1}` }
        ]);
    };
    const deleteBlogPosts = (id) => {
        return blogPosts.filter(() => blogPosts.id !== id)
       
    };

    return <BlogContext.Provider value={ {data:blogPosts , addBlogPosts ,deleteBlogPosts} }>
        {Children}
    </BlogContext.Provider>
};

export default BlogContext;