import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'


export function Sidebar (user){

  return(
    <div>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=556&q=50" />
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/78486049?v=4" />

        <strong className={styles.name}>{user.name}</strong>
        <span className={styles.role}>{user.role}</span>

        <footer className={styles.profileEdit}>
          <a className={styles.button} href="#">
            <PencilSimpleLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  )
}