import styles from './Post.module.css'


export function Post(props){

  return(
    <div className={styles.post}>

      <div className={styles.header}>
        <img className={styles.authorAvatar} src="https://avatars.githubusercontent.com/u/78486049?v=4" alt="" />

        <div className={styles.nameAndRoleContainer}>
          <p className={styles.author}>{props.author}</p>
          <p className={styles.role}>{props.role}</p>
        </div>

        <p className={styles.publishedAt}>{props.publishedAt}</p>
      </div>

      <p className={styles.content}>{props.content}</p>

      <div className={styles.feedbackContainer}>
        <strong>Deixe o seu Feedback</strong>
        <textarea className={styles.feedback} type="text" name="" id="" placeholder='Escreva um comentário...'/>
        <button className={styles.publishButton} type="submit">Publicar</button>
      </div>
    </div>
  )
}