Let me know if I missed something ...

Working with logged in and the timing of loading/routing components based on the user being logged in or not and it didn't work no matter which way I did it, so I dug into the JWT code both in the current version and as far back as Sep 10th. Here is what I found. I don't see anywhere that the token is being verified. From what I can see we consider the user logged in if we find a cookie.

I don't see any way to verify the jwt on the client. The is a library to decode it, but not to verify it. Also, per the jwtwebtoken's author, it is a server side library which, although it was never intended to work on the client, its decode method does. There is a lib named jwt-decode that can be used on the client.

A couple of references:
- https://github.com/auth0/node-jsonwebtoken/issues/405
- https://stackoverflow.com/questions/43788131/jwt-verify-client-side

- The call do action userValidateRequest only calls action userValidate so there is not need to call it. Just call userValidate directly.
- I don't see anywhere in the code that the JTW is validated. It is decoded with jwtwebtokens.decode(), but that doesn't validate in any way. Appears you would need to call jwtwebtokens.validate()
- I'm not sure we should verify on the client at all.
  - https://github.com/auth0/node-jsonwebtoken/issues/405
    - jwt-decode is suggested as a client side library but it only decodes, no validation.

So it appears our login logic is
- if no cookie then loggedIn = false
- if cookie then loggedIn = true

It should be
- if no cookie then
  - get jtw from cookid and validate on server
  - if server returns true then loggedIn = true
  - if server returns false then loggedIn = false





## program flow
- constructor
  - userValidateRequest
    - api.user.validate **does nothing** except return user passed in
    - success
      - userValidate
        - auth reducer **'should' set redux.state.auth.user.loggedIn: true if user was found but doesn't**

## jsonwebtoken package
### methods
#### jtw.verify
```js
  jtw.verify(token, secretOrPublicKey, [options, callback])
```
- asynchronous
  - call with decoded payload and calls callback with: payload if valid, else error
- synchronous
  - Returns payload if


If I want to prevent rendering of sub/child components before the parent is fully mounted, is this a valid pattern and is there a better one

```
import React from 'react'
import SubComponent1 from 'ui/subcomponent1'

class App extends React.component {
  constructor(props) {
    super(props)
    const result = tryToLogInUser()

  }
  this.state = {
    userId: result.userId
    isLoggedIn: result.isLoggedIn,
  }


  render() {

    return (
      <SubComponent1 />
    )
  }
}

export default App

```