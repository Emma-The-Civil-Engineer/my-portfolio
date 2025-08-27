import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ItemInfo from "./components/itemInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { data } from "./data";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home data={data.home} /> },
        { path: "/education", element: <Education data={data.education}/> },
        {
          path: "/education/:education",
          loader: ({ params }) => {
            return data.education.itemList.find(
              (p) => p.path === params.education
            );
          },
          element: <ItemInfo />,
        },
        { path: "/experience", element: <Experience data={data.experience}/> },
        { path: "/projects", element: <Projects data={data.projects} />},
        {
          path: "/projects/:project",
          loader: ({ params }) => {
            return data.projects.itemList.find(
              (p) => p.path === params.project
            );
          },
          element: <ItemInfo />,
        },
      ],
    },
  ]);

  function Layout() {
    return (
      <Navbar data={data.home}>
        <Outlet />
      </Navbar>
    );
  }

  return <RouterProvider router={router} />;
}
