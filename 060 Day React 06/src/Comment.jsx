import { useState } from "react";
import CommentForm from "./CommentsForm";
import "./Comment.css"



export default function comment() {

    let [comments, setComments] = useState([{
        username: "srk",
        remarks: "great job!",
        rating: 4,
    },])

        let addNewComment = (comment)=>{
            console.log(comment);
            setComments((currComment)=>[...currComment , comment]);
            console.log("Added")
        }

    return (
        <div>
            <CommentForm addNewComment={addNewComment}></CommentForm>

            <hr />
            <h3>All Comments</h3>
            
            {comments.map((comment , idx)=>(
                <div key={idx} className="comment">
                <span>{comment.remarks}</span>
                <br />
                <span>rating : {comment.rating}</span>
                <p>- {comment.username}</p>
            </div>
            ))}
            
            

        </div>
    );
}