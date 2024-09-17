import { useEffect } from "react";
import { useGetAllBlogsMutation } from "../../lib/blogsApis";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  // initialize  rtk query hook
  const [getAllBlogs, { isError, error, isLoading, data, isSuccess }] =
    useGetAllBlogsMutation();
  console.log(error);
  console.log(data);
  console.log(isSuccess);

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <section className="container">
      <div className="row">
        <BlogCard />
      </div>
    </section>
  );
};

export default AllBlogs;
