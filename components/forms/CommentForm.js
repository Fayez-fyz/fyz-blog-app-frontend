import React from "react";

const CommentForm = ({ addComment, comment, setComment }) => {
  return (
    <form onSubmit={addComment}>
      <input
        type="text"
        className="form-control"
        placeholder="Write something..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn btn-primary btn-block mt-2">Submit</button>
    </form>
  );
};

export default CommentForm;
