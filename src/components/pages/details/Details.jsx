import { useState } from "react";
import styles from "./Details.module.css";

import Comment from "@/components/reusable/comment/Comment";

const Details = () => {

    const comments = [
        {
            id: 1,
            author: "Jane Doe",
            text: "This is a comment.",
            replies: [
                {
                    id: 2,
                    author: "John Smith",
                    text: "This is a reply.",
                    replies: [
                    {
                        id: 3,
                        author: "Alice",
                        text: "Reply to the reply!",
                        replies: [],
                    },
            ],
            },
          ],
        },
        {
            id: 4,
            author: "Jane Doe",
            text: "This is a comment.",
            replies: [
                {
                    id: 5,
                    author: "John Smith",
                    text: "This is a reply.",
                    replies: [
                    {
                        id: 6,
                        author: "Alice",
                        text: "Reply to the reply!",
                        replies: [],
                    },
            ],
            },
          ],
        },
    ];
  return (
    <main className={styles.game} >

        <div className={styles.detailsContainer}>

            <figure className={styles.coverSection}>
                <img src="https://gh.cdn.sewest.net/assets/ident//games/final-fantasy-xii-the-zodiac-age/en_US/GamePage_Header_Portrait.jpg?quality=65&width=66%25&height=66%25" alt="game img" />
            </figure>
            
            <div className={styles.gameInfoContainer}>
                <section className={styles.gameInfo}>
                    
                    <h2>Final Fantasy 12</h2>
                    <div className={styles.gameDescription}>
                        <p>Question: <span>How Do I Build The Strongest Party And What Is The Best Job For Each Character ? How Do I Build The Strongest Party And What Is The Best Job For Each Character ?How Do I Build The Strongest Party And What Is The Best Job For Each Character ?How Do I Build The Strongest Party And What Is The Best Job For Each Character ?How Do I Build The Strongest Party And What Is The Best Job For Each Character ?How Do I Build The Strongest Party And What Is The Best Job For Each Character ?How Do I Build The Strongest Party And What Is The Best Job For Each Character ?</span></p>
                    </div>
                    
                    
                </section>
            </div>
            
        </div>

        <div className={styles.commentBox}>
            <textarea placeholder="Write a comment..."></textarea>
            <button type="submit">Post</button>
        </div>

        <div className={styles.commentsContainer}>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    </main>
  )
}

export default Details
