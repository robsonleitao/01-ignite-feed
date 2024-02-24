import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import {Avatar} from '../Avatar/Avatar'
import { useState } from 'react'

export function Comment({content, funcDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment() {
        funcDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=40&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Henrique</strong>
                            
                            <time title="22 de fevereiro às 13:43" dateTime="2024-02-22 13:42:00">
                                Cerca de 1 hora atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}