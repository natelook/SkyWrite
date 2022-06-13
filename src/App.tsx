import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Post from "./routes/Post";
import Subreddit from "./routes/Subreddit";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='r'>
            <Route path=':subreddit' element={<Subreddit />} />
            <Route path=':subreddit/:postId' element={<Post />} />
            <Route index element={<NotFound />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return <Router />;
}
