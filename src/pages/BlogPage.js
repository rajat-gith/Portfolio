import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import "../styles/ComponentStyles.scss";
import { Link } from "react-router-dom";

function BlogPage() {
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

  console.log("Posts state", posts);

  return (
    <div className="BlogPage">
      <div className="BlogComponent">
        {loading && <Typography variant="h4">Loading posts...</Typography>}
        <Link to="/">
          <div className="home_button">Home</div>
        </Link>
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
