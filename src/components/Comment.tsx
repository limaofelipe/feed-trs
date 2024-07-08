import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Felipe Lima
                            </strong>
                            <time title="03 de Julho as 21:210" dateTime="2024-07-03 21:21:12">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content} 
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}