import axios from "axios";

export let createPost = async (postData) => {
  try {
    let postType = postData.folder_type === "story" ? "story" : "post";
    let newPost = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}${postType}/create`,
      withCredentials: true,
      data: postData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return newPost;
  } catch (e) {
    return e.message;
  }
};

export let updatePost = async (postData) => {
  console.log(postData.postid);
  try {
    let newPost = await axios({
      method: "PUT",
      url: `${import.meta.env.VITE_API_BASE_URL}post/update/${postData.postid}`,
      withCredentials: true,
      data: postData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return newPost;
  } catch (e) {
    return e.message;
  }
};

export let deletePost = async (postData) => {
  try {
    let newPost = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_BASE_URL}post/delete/${postData.postid}`,
      withCredentials: true,
    });
    return newPost;
  } catch (e) {
    return e.message;
  }
};

export let getAllPost = async (userid) => {
  try {
    let newPost = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}post/all/${
        userid?.queryKey[1]
      }`,
      withCredentials: true,
    });
    return newPost;
  } catch (e) {
    return e.message;
  }
};

export let postFromFollowedUser = async () => {
  try {
    let newPost = await axios({
      method: "GET",
      url: `${
        import.meta.env.VITE_API_BASE_URL
      }post/all/post-from-followed-user`,
      withCredentials: true,
    });
    return newPost;
  } catch (e) {
    return e.message;
  }
};

export let getSinglePost = async (postid) => {
  try {
    let singlePost = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}post/${postid.queryKey[1]}`,
      withCredentials: true,
    });
    return singlePost;
  } catch (e) {
    return e.message;
  }
};

export let getPostComments = async (post) => {
  try {
    let postComments = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}post/comments`,
      withCredentials: true,
      params: { postID: post.queryKey[1] },
    });
    return postComments;
  } catch (err) {
    throw err;
  }
};

export let getPostCommentReplies = async (commentID) => {
  try {
    let postComments = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}post/comment/replies`,
      withCredentials: true,
      params: { commentid: commentID.queryKey[1] },
    });
    return postComments;
  } catch (err) {
    throw err;
  }
};

//post action
export let likeThePost = async (postid) => {
  try {
    let likingThePost = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_BASE_URL}post/postaction/like`,
      withCredentials: true,
      data: { postid: postid },
    });
    return likingThePost;
  } catch (e) {
    return e.message;
  }
};

export let unlikeThePost = async (postid) => {
  try {
    let unlikingThePost = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_BASE_URL}post/postaction/unlike`,
      withCredentials: true,
      data: { postid: postid },
    });
    return unlikingThePost;
  } catch (e) {
    return e.message;
  }
};

export let addComment = async (comment) => {
  try {
    let addingComment = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}post/postaction/addcomment`,
      withCredentials: true,
      data: comment,
    });
    return addingComment;
  } catch (e) {
    throw e;
  }
};

export let deleteComment = async (comment) => {
  try {
    let deletingComment = await axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_BASE_URL}post/postaction/deletecomment`,
      withCredentials: true,
      data: comment,
    });
    return deletingComment;
  } catch (e) {
    throw e;
  }
};

export let addCommentReply = async (comment) => {
  try {
    let addingComment = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}post/postaction/comment/reply`,
      withCredentials: true,
      data: comment,
    });
    return addingComment;
  } catch (e) {
    throw e;
  }
};
