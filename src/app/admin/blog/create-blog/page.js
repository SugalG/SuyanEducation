"use client";

import { useState } from "react";
import CreateBlog from "@/components/CreateBlogComponent";
import ListBlogs from "@/components/ListBlogs";

export default function CreateBlogPage() {
  const [editingBlog, setEditingBlog] = useState(null);

  return (
    <div>
      <CreateBlog
        blog={editingBlog}
        onFinishEdit={() => setEditingBlog(null)}
      />

      <ListBlogs
        onEdit={(blog) => setEditingBlog(blog)}
      />
    </div>
  );
}
