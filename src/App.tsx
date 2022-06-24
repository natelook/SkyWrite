import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './routes/Create';
import Layout from './components/Layout';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Post from './routes/Post';
import { init } from 'libkernel/dist';
import { useEffect } from 'react';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path=":post" element={<Post />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  useEffect(() => {
    init();
  }, []);
  return <Router />;
}
