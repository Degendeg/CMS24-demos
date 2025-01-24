import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div class="topnav">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
      </div >
      <Outlet />
    </>
  )
}
export default Layout