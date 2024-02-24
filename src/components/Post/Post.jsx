import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";
import {Avatar} from '../Avatar/Avatar'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react";

export function Post({author, content, publishedAt}) {
    
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const isNewCommentEmpty = commentText.length == 0;

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, commentText])
        setCommentText('')
    }

    function handleNewCommentChange() {
        setCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }else {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    name="comment"
                    value={commentText}
                    onChange={handleNewCommentChange}
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment} 
                            funcDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}