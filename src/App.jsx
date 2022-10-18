import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

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
          <Post
            author="Pedro Albuquerque"
            role="Desenvolvedor Front-End"
            publishedAt="16/10/2022"
            
          />
          <Post
            author="Diego Fernandes"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla repudiandae cumque sunt tenetur excepturi alias esse reprehenderit nihil eveniet praesentium laborum, at ex, ipsa quas culpa libero. Maxime, dolore!"
            feedbacks = {`Muito bom Devon, parabéns!! 👏👏` }
          
          />
        </main>

      </div>
    </div>
  )
}

export default App
