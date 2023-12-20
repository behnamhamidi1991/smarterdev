import style from "./blog.module.css";
import BlogPost from "./BlogPost/BlogPost";
import { blogData } from "../../../data/blog";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";

function Blog() {
  const POST_PER_PAGE = 5;

  const [posts, setPosts] = useState(blogData);
  console.log(posts);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(posts.length / POST_PER_PAGE));
  }, []);

  const startIndex = (page - 1) * POST_PER_PAGE;
  const selectedPosts = posts.slice(startIndex, startIndex + POST_PER_PAGE);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.blogContainer}>
      <h2 className={style.pageTitle}>Blog</h2>
      <h5 className={style.pageSubTitle}>Welcome to my blog</h5>
      {selectedPosts.map((post) => (
        <BlogPost key={post.id} post={post} page={page} />
      ))}
      <Pagination totalPages={totalPages} onClick={handleClick} />
    </div>
  );
}

export default Blog;
