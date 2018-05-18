<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

### Middleware is a tool used between the server and the application that allows for a change to the data stream. It could be used for authentication, logging data or any other amount of things. Session acts as a sort of local storage in express. Sessions can also be used to store different types of data and it has numerous settings. Bcrypt is a password encoding software that allows for greater password storing protection. JWT is a json web token. It acts as a token that can be used for authorization. It has a lot of aspects to its function.

2.  What does bcrypt do in order to prevent attacks?
### Bcrypt to prevent attacks makes the password hash incredibly complex after a certain number of hashes it would take a number of supercomputers to make a dent. It also is one of the slower password hashing protocols. It forces any attacker to use more time and resources than would be otherwise. 

3.  What are the three parts of the JSON Web Token?
### The first is the header which is the place where we can pass authorization. The second is the payload which we can use to pass data/claims.  The last is the signature is the piece of the puzzle that ensures the message was not attacked before it was returned.
