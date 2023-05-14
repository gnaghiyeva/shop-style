import React from 'react'
import { Helmet } from 'react-helmet'
const Welcome = () => {
    // const user = useUserContext();
  return (
    <>
    <Helmet>
      <title>Welcome</title>
    </Helmet>
    {/* <h2>{user? `Welcome ${user.username}`:""}</h2> */}
    <h2>Welcome</h2>
    </>
  )
}

export default Welcome