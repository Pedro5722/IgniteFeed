import { Comment } from './Comment'
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

      <div className={styles.content}>
        <p>Fala galeraa 👋<br/> <br/></p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀<br/> <br/></p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
      <p> <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>     
      </div>

      <div className={styles.feedbackContainer}>
        <strong>Deixe o seu Feedback</strong>
        <textarea className={styles.feedback} type="text" name="" id="" placeholder='Escreva um comentário...'/>
        <button className={styles.publishButton} type="submit">Publicar</button>
      </div>

      <Comment />
    </div>
  )
}