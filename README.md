TO RUN THE APP

  type "npm i" to install dependencies
  type "npm run dev" on your terminal


EXISTING ROUTES

  I) Notes Routes: Route for all note CRUD operations 
      notes/all_notes (fetched all the notes in the db)📜
      notes/new_note (creates a new note in db)✉️
      notes/update_note (updates a note in the db)
      notes/delete_note (delete a particular note by its id)
      
  I) Users Routes: Route for user Creation and Login operation
      notes/create (Create a new user for access to his notes via token)📜
      notes/Login (Login existing user for access to this notes via token)✉️

  the note app is explicitly split into different folders each to serve or perform a particular function or use case here we have

--controllers | |-- they take in data and perform various functions like handling note creation, note update,note deletion, get all notes and interact with services which in turn interact with mongo db

-- services | |-- they receive data directly from controllers and interact with db to return the response of queries made to it

-- config | |--contains the config code for connecting the app to mongodb using mongoose

-- models | |-- it holds the mongoose schema that perdoms various operations on db

-- routes | |--index.routes - holds the index to access all operations that can be done in the note app |--notes.routes - holds the different routes for the note app

-- validators | |--holds the validator schema and functions used for validating requests made to the note app

-- middlewares | | -- holds the various middlwares used in the note app like error handling,connecting the app to db
