import {format, formatDistanceToNow} from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import styles from './Post.module.css'

/*
authorAvatarURL,
author,
role,
publishedAt,
*/

export function Post(props){
  const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptbr
  })

  const publishedTimeRelativeToNow = formatDistanceToNow(props.publishedAt,{
    locale: ptbr,
    addSuffix: true,
  })

  return(
    <div className={styles.post} key={props.id}>

      <div className={styles.header}>
        <img className={styles.authorAvatar} src={props.authorAvatarURL} alt="" />

        <div className={styles.nameAndRoleContainer}>
          <p className={styles.author}>{props.author}</p>
          <p className={styles.role}>{props.role}</p>
        </div>

        <time dateTime='2022-10-16 15:00' title={publishedDateFormatted} className={styles.publishedAt}>{publishedTimeRelativeToNow}</time>
      </div>

      <div className={styles.content}>
        {props.content.map(line =>{
          if(line.type === 'link'){
            return <a href="#">{line.content}</a>
          }
          if(line.type === 'paragraph'){
            return <p className={styles.content}>{line.content}</p>
          }
        })}
      </div>

      <form className={styles.feedbackContainer}>
        <strong>Deixe o seu Feedback</strong>
        <textarea className={styles.feedback} placeholder='Escreva um comentário...'/>
        <button className={styles.publishButton} type="submit">Publicar</button>
      </form>

      <Comment />
    </div>
  )
}