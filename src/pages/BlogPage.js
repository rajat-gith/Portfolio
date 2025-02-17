import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, Typography, Button } from "@mui/material";
import "../styles/ComponentStyles.scss";
import MenuComponent from "../components/MenuComponent";

function BlogPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const handleResumeButton = () => {
    window.open(
      "https://drive.google.com/file/d/16QaicgGR1lFwK0CsFRym90LihyZUpyLp/view?usp=sharing"
    );
  };
  const getPosts = async () => {
    const DEV_TO_URL = "https://dev.to/api/articles";

    try {
      const response = await axios.get(DEV_TO_URL, {
        params: { username: "rajat-nayak" },
      });
      return response.data;
    } catch (error) {
      console.log("WE HAVE FETCH POST ERROR", error);
    }
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((res) => {
      console.log("IN USE-EFFECT", res);
      setPosts(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="BlogPage">
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="resume">
          <div>
            <button class="resumeButton" onClick={handleResumeButton}>
              Resume
              <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="menu">
          <div>
            <MenuComponent />
          </div>
        </div>
      </div>
      <div className="BlogComponent">
        {loading && <Typography variant="h4">Loading posts...</Typography>}
        <p className="title">Blogs</p>
        {!loading && (
          <Grid container className="blog_container" spacing={4}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                <Card className="blog_card">
                  <Typography
                    className="blog_title"
                    variant="h5"
                    component="div"
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    className="blog_desc"
                    variant="body2"
                    component="p"
                  >
                    {post.description}
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    className="read_button"
                    onClick={() => window.open(post.canonical_url, "_blank")}
                  >
                    Read More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
