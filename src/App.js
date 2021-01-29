import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  // useSelector provides access to the anecdotes stored 
  // useSelector takes a selector function as a parameter which is used to determine which data to fetch from the state
  // In this case we get the entire state
  const anecdotes = useSelector(state => state)

  // An example of a more complex selector function:
  // const popularAnecdotes = useSelector(state => state.filter(anecdote => anecdote.votes > 0)) 
  
  // A hook provided by the react-redux library
  // Provides access for any react component to the dispatch function of the redux store defined in index.js (which was given as a parameter to the Provider component)
  // With this hook a react component can change the state in the redux store
  const dispatch = useDispatch() 

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App