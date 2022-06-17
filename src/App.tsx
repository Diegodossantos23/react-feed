import { Header } from "./components/Header/Header";

import styles from './App.module.css';

import './global/styles/global.css';
import { Post } from "./components/Post/Post";
import { array } from "./constants/list/post";
import { Sidebar } from "./components/Sidebar/Sidebar";

const App = () => {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          { array && array.map(text => {
            return(
              <Post
                author={text.author}
                country={text.country}
                content={text.content}
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
