import styles from "./Details.module.css";

import Comment from "@/components/reusable/comment/Comment";

const Details = () => {
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
                        <p>Question: <span>How Do I Build The Strongest Party And What Is The Best Job For Each Character ?</span></p>
                    </div>
                    
                    <div className={styles.commentBox}>
                        <textarea placeholder="Write a comment..."></textarea>
                        <button type="submit">Post</button>
                    </div>
                </section>
            </div>
            
        </div>
        
        <div className={styles.commentsContainer}>
            <Comment />
        </div>
    </main>
  )
}

export default Details
