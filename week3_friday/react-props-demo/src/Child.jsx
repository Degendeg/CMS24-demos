const Child = ({ person, posts, item }) => {
  const { name, confused, role } = person
  return (
    <>
      <div>{item}</div>
      {posts && <div>{posts[0].title}</div>}
      <span>My name is {name} and I am {confused ? <span>confused</span> : <span>not confused</span>} and my role is {role}</span>
    </>
  )
}
export default Child