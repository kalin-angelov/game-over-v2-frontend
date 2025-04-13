import { useState } from "react";
import styles from "./Comment.module.css";

import { TimeAgo } from "./TimeAgo";


const Comment = ({ comment, depth = 0 }) => {
    const [show, setShow] = useState(true);
    return (
        <div style={{ marginLeft: depth * 20 + 'px', marginTop: '1rem' }}>
            <div className={styles.comment} >
                <div className={styles.commentInfo}>

                    <figure>
                        <img className={styles.userImg} src="/images/default-img-pic.webp" alt="User img"  width={50} height={50}/>
                    </figure>

                    <p>{comment.author}</p>
                  
                    <div className={styles.commentBtnContainer}>
                        <button className={styles.commentBtn}>Update</button>
                        <button className={styles.commentBtn}>Delete</button>
                        <button className={styles.commentBtn}>Reply</button>
                    </div>

                    <TimeAgo />
                </div>

                <div className={styles.commentText}>
                    <p>{comment.text}</p>
                </div>
                
                <button className={styles.repliesBtn} onClick={(e) => setShow(!show)}>Replies ({comment.replies.length})</button>
            </div>

            {show && 
                <div>
                    {comment.replies.map((reply) => (
                        <Comment key={reply.id} comment={reply} depth={depth + 1} />
                    ))}
                </div>
            }
        </div>
    );
};

export default Comment;
