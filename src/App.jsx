import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

const posts = [{
    id:2,
    authorAvatarURL:"https://avatars.githubusercontent.com/u/49329614?v=4",
    author:"Gabryell Cavalcante ",
    role: "Gerente da Pay-less",
    publishedAt: new Date("2022-10-10 13:30:00") ,
    content:[
      {type: 'paragraph', content: "Fala galeraa xd👋"},
      {type: 'paragraph', content: "tô testando o App do JP aqui"},
      {type: 'paragraph', content: "muito massa!!! 🔥🔥🔥"},
      {type: 'paragraph', content: "acessa ai 👇🤣"},
      {type: 'link',      content: "https://localhost:5173"}
    ]  
  },
  {
  
    id:1,
    authorAvatarURL:"https://avatars.githubusercontent.com/u/78486049?v=4",
    author:"Pedro Albuquerque",
    role: "Desenvolvedor Front-End",
    publishedAt: new Date("2022-10-19 13:30:00") ,
    content:[
      {type: 'paragraph', content: "Fala galeraa 👋"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link',      content: "jane.design/doctorcare"}
    ]  
  }
]

function App() {

  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar
          name='Pedro Albuquerque'
          role='Desenvolvedor Front-End'
        />
        
        <main>
          {posts.map(post => {
            return <Post
            authorAvatarURL = {post.authorAvatarURL}
            author= {post.author}
            role=   {post.role}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          })}
        </main>

      </div>
    </div>
  )
}
export default App