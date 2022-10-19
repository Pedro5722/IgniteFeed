import styles from './Avatar.module.css'

export function Avatar(){
  return(
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/78486049?v=4" />
  )
}


export function AvatarWithoutBorder(){
  return(
      <img className={styles.avatarWithoutBorder} src="https://avatars.githubusercontent.com/u/80972575?v=4" />
  )
}