import { Header } from "./components/Header/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera' },
      {type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa.'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-02-23 13:44:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera' },
      {type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa.'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-02-20 11:27:00'),
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </>
  )
}

