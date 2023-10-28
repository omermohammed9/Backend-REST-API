import Blog from "../model/Blog.js";

export const getAllBlogs = async(req, res, next) =>{
    let blogs;
    try{
        blogs = await Blog.find();
    }catch(err){
        console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message: "No blog Found"});
    }
    return res.status(200).json({blogs})
};

export const addBlog = async(req, res, next) =>{
    const {title, description, image, user} = req.body;
    const blog = new Blog({
        title,
        description,
        image,
        user,
    });
    try{
        await blog.save()
    }catch(err){
        return console.log(err);
    }
    return res.status(200).json({blog});
};
export const updateBlog = async (req, res, next) =>{
    const {title, description} = req.body;
    const blogId = req.params.id;
    try{
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {title, description},
            {new: true} // To return the updated blog

        );
    if (!blog) {
        return res.status(500).json({ message: "Unable to update" });
    }
    return res.status(200).json({ blog });
} catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
}
};
