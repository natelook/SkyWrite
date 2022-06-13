import { Outlet } from "react-router-dom";
import Container from "./Container";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout() {
  const auth = async () => {
    console.log("authenticating...");
  };
  return (
    <Container>
      <Nav auth={auth} />
      <Outlet />
      <Footer />
    </Container>
  );
}
