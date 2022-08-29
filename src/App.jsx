import { Header } from "./components/Header/Header";

import styles from './App.module.css';

import './global/styles/global.css';
import { Post } from "./components/Post/Post";
import { array } from "./constants/list/post";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:  'https://media-exp1.licdn.com/dms/image/C4D03AQG-moZWcL1qMg/profile-displayphoto-shrink_800_800/0/1654342657951?e=1666224000&v=beta&t=wQOXZVFfnwbSROW_8XlbDZJRspmSs97o1LD003S9MPk',
      name: 'Diego dos Santos',
      role: 'Programador Front-end'
    },
    content: [
      { type: "paragraph", content: "Fala galera!!"},
      { type: "paragraph", content: "Acabei de subir outro projeto no meu portifólio. Fiz esse projeto no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "diego.frontend/doctorcare" },
    ],
    publishedAt: new Date('2022-07-06 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl:  'https://media-exp1.licdn.com/dms/image/C4E03AQFhOkRvac2IAw/profile-displayphoto-shrink_200_200/0/1602610450280?e=1663804800&v=beta&t=JgP6mu_Bq4AyPUGrZ6ujxuI8EU2sxi3MDMDQ8WT6eC8',
      name: 'Hitalo',
      role: 'Programador Back-end'
    },
    content: [
      { type: "paragraph", content: "Boa tarde pessoal!!"},
      { type: "paragraph", content: "Acabei de atualizar meu projeto da NLW da Rocketseat 🚀" },
      { type: "link", content: "diego.frontend/doctorcare" },
    ],
    publishedAt: new Date('2022-07-07 21:30:5'),
  },
]

const App = () => {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          { posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )     
          })
          }
        </main>
      </div>
    </div>
  )
}

export default App
