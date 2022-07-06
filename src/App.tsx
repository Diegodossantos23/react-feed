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
      avatarUrl:  'https://github.com/Diegodossantos23.png',
      name: 'Diego dos Santos',
      role: 'Front-end Developer'
    },
    content: [
      { type: "paragraph", content: "Hey guys"},
      { type: "paragraph", content: "I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The project name is DoctorCare 🚀" },
      { type: "link", content: "diego.frontend/doctorcare" },
    ],
    publishedAt: new Date('2022-07-06 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl:  'https://github.com/Diegodossantos23.png',
      name: 'Hitalo',
      role: 'Back-end Developer'
    },
    content: [
      { type: "paragraph", content: "Hey guys"},
      { type: "paragraph", content: "I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The project name is DoctorCare 🚀" },
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
