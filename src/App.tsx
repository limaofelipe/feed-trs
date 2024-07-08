import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"



const posts: PostType[] = [
  {
      id: 1,
      author: {
          avatarUrl: "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Luiza Alves",
          role: "Back-end Developer",
      },
      content: [
          {type: "paragraph", content:"Fala galeraa 👋"},

          {type: "paragraph", content: "🎉 Conquistamos! 🚀 Nosso projeto web está no ar e é um sucesso! Agradeço a todos que contribuíram para tornar isso possível. 🙌 #WebDevelopment #SucessoOnline"},

          {type: "link", content: ""},

        ],
        
        publishedAt: new Date("2024-07-04 11:00:00")
  },

  {
    id: 2,
      author: {
        avatarUrl: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jorge Luz",
        role: "Front-end Developer",
        },
        content: [
          {type: "paragraph", content:"Fala galeraa 👋"},
          
          {type: "paragraph", content: "Vejam o post da Luiza acima!!"},
          
          {type: "link", content: ""},

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

