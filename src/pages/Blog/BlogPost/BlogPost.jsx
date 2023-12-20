import style from "./post.module.css";

function BlogPost({ post, page }) {
  return (
    <div className={style.posts}>
      <div className={style.postImage}>
        <img src={post.imgUrl} alt="programming" />
      </div>
      <div className={style.postConent}>
        <h2 className={style.title}>{post.title}</h2>
        <p className={style.date}>{post.date}</p>
        <p className={style.paragraph}>{post.text}</p>
        <button className={style.readMore}>Read More</button>
      </div>
    </div>
  );
}

export default BlogPost;
