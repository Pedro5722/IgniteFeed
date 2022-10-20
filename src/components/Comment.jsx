import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react'
import { Avatar, AvatarWithoutBorder } from './Avatar'

import styles from './Comment.module.css'


export function Comment({content}){
  return(
    <div>
      <div className={styles.comment}>
        <AvatarWithoutBorder/>
        <div className={styles.commentBox}>
          <div className={styles.header}>
            <div className={styles.userAndPostTime}>
              <span className={styles.username}>José Humberto</span> <span hidden>(você)</span>
              <span className={styles.postTime}><br/>Cerca de 2h</span>
            </div>
            <div className={styles.trash}>
              <Trash size={24}/>
            </div>
          </div>
          <span className={styles.commentText}>{content}</span>
        </div>

      </div>

      <footer>
        <button className={styles.like}>
          <ThumbsUp className={styles.thumbsUp} size={20}/> 
          Aplaudir<span>03</span>
        </button>
      </footer>
      
      
    </div>
  )
}