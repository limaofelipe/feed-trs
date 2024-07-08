import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"



const posts: PostType[] = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/IanaCris.png",
          name: "Iana Lima",
          role: "Back-end Developer",
      },
      content: [
          {type: "paragraph", content:"Fala galeraa 👋"},

          {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},

          {type: "link", content: "jane.design/doctorcare"},

        ],
        
        publishedAt: new Date("2024-07-04 11:00:00")
  },

  {
    id: 2,
      author: {
        avatarUrl: "https://github.com/limaofelipe.png",
        name: "Felipe Lima",
        role: "Front-end Developer",
        },
        content: [
          {type: "paragraph", content:"Fala galeraa 👋"},
          
          {type: "paragraph", content: "Vejam o post da iana acima!!"},
          
          {type: "link", content: "felipelima.dev"},

        ],

      publishedAt: new Date("2024-07-01 14:00:00")
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return  (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

