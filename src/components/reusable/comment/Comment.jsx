import styles from "./Comment.module.css";

import { TimeAgo } from "./TimeAgo";

const Comment = () => {
    return (
        <>
            <div className={styles.comment}>
                <div className={styles.commentInfo}>

                    <figure>
                        <img className={styles.userImg} src="/images/default-img-pic.webp" alt="User img"  width={50} height={50}/>
                    </figure>

                    <p>User name</p>

                    <div className={styles.commentBtnContainer}>
                        <button className={styles.commentBtn}>Update</button>
                        <button className={styles.commentBtn}>Delete</button>
                        <button className={styles.commentBtn}>Reply</button>
                    </div>

                    <TimeAgo />
                </div>
                <div className={styles.commentText}>
                    <p>Comment reply text message</p>
                </div>
            </div>

            <div className={styles.comment}>
                <div className={styles.commentInfo}>

                    <figure>
                        <img className={styles.userImg} src="/images/default-img-pic.webp" alt="User img"  width={50} height={50}/>
                    </figure>

                    <p>User name</p>

                    <div className={styles.commentBtnContainer}>
                        <button className={styles.commentBtn}>Update</button>
                        <button className={styles.commentBtn}>Delete</button>
                        <button className={styles.commentBtn}>Reply</button>
                    </div>

                    <TimeAgo />
                </div>
                <div className={styles.commentText}>
                    <p>Comment reply text message</p>
                </div>
            </div>
        
            <div className={styles.comment}>
                <div className={styles.commentInfo}>

                    <figure>
                        <img className={styles.userImg} src="/images/default-img-pic.webp" alt="User img"  width={50} height={50}/>
                    </figure>

                    <p>User name</p>

                    <div className={styles.commentBtnContainer}>
                        <button className={styles.commentBtn}>Update</button>
                        <button className={styles.commentBtn}>Delete</button>
                        <button className={styles.commentBtn}>Reply</button>
                    </div>

                    <TimeAgo />
                </div>
                <div className={styles.commentText}>
                    <p>Comment reply text message</p>
                </div>
            </div>
        </>
    );
};

export default Comment;
