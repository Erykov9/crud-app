import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/features/Category";

import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd/>} />
        <Route path="/post/edit/:id" element={<PostEdit/>} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/:catId" element={<Category/>}/>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
