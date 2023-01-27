import axios from 'axios'
import {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'

function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

const getData = async() => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  setPosts(res.data)
  searchResults(res.data)

}

useEffect(() => {
  getData();
}, [])

console.log(getData);


  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults}/>
      <ListPage searchResults={searchResults}/>
    </>
  );
}

export default App;

// import {getPosts} from './api/axios'
// import {useState, useEffect} from 'react'
// import SearchBar from './SearchBar'
// import ListPage from './ListPage'

// function App() {
//   const [posts, setPosts] = useState([])
//   const [searchResults, setSearchResults] = useState([])

// useEffect(() => {
//   getPosts()
//   .then(jsonDatas => {setPosts(jsonDatas)
//     return jsonDatas
//   })
//   .then(jsonDatas => {
//     setSearchResults(jsonDatas)
//   })
// }, [])

// console.log(searchResults);


//   return (
//     <>
//       <SearchBar posts={posts} setSearchResults={setSearchResults}/>
//       <ListPage searchResults={searchResults}/>
//     </>
//   );
// }

// export default App;
