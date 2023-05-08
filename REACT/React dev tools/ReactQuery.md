# [REACT QUERY](`npm install @tanstack/react-query`)

The idea behind React is that you want to cache most of what you fetch from a database. If you fetch the details of pet ID 1, you generally do not want to fetch it again if a user revisits that page: you'd like to cache it. This is what react-query is going to do for you: it's a built in caching layer for these async data stores that works really well within the constraints of React

