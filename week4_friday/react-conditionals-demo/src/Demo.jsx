const Demo = ({ user, isLoggedIn }) => {
  const greeting = isLoggedIn ? `Hello ${user}!` : 'Welcome, Guest!'

  const renderSpecialMessage = (isLoggedIn) => {
    if (isLoggedIn) {
      return <h1>🎉 You are a premium member!</h1>
    }
    return <h1><a href="#" target="_blank">Sign up</a> to enjoy premium features!</h1>
  }
  return (
    <>
      {/* Som en variabel */}
      <h1>{greeting}</h1>
      {/* Med logical operator */}
      {(isLoggedIn && user === 'Sebbe') && <p>You have access to the dashboard.</p>}
      {/* Med ternary operator */}
      <p>{isLoggedIn ? 'Enjoy your stay!' : 'Please log in to continue'}</p>
      {/* Med funktion */}
      {renderSpecialMessage(isLoggedIn)}
    </>
  )
}
export default Demo