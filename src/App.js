import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { css } from 'glamor'

import Form from './components/Form'
import Notes from './components/Notes'
import { createNote, updateNote, deleteNote } from './graphql/mutations'
import { listNotes } from './graphql/queries'

class App extends Component {
  state = { notes: [], filter: 'none' }
  // async componentDidMount() {
  //   try {
  //     const { data: { listNotes: { items }}} = await API.graphql(graphqlOperation(listNotes))
  //     this.setState({ notes: items })
  //   } catch (err) {
  //     console.log('error fetching notes...', err)
  //   }
  // }
  createNote = async note => {
    const notes = [note, ...this.state.notes]
    const newNotes = this.state.notes
    this.setState({ notes })
  }
  updateNote = async note => {
    const updatedNote = {
      ...note,
      status: note.status === 'new' ? 'completed' : 'new'
    }
    const index = this.state.notes.findIndex(i => i.id === note.id)
    const notes = [...this.state.notes]
    notes[index] = updatedNote
    this.setState({ notes })

    // try {
    //   await API.graphql(graphqlOperation(updateNote, { input: updatedNote }))
    // } catch (err) {
    //   console.log('error updating note...', err)
    // }
  }
  deleteNote = async note => {
    const input = { id: note.id }
    const notes = this.state.notes.filter(n => n.id !== note.id)
    this.setState({ notes })
    // try {
    //   await API.graphql(graphqlOperation(deleteNote, { input }))
    // } catch (err) {
    //   console.log('error deleting note...', err)
    // }
  }
  updateFilter = filter => this.setState({ filter })
  render() {
    let { notes, filter } = this.state
    if (filter === 'completed') {
      notes = notes.filter(n => n.status === 'completed')
    }
    if (filter === 'new') {
      notes = notes.filter(n => n.status === 'new')
    }
    return (
      <div {...css(styles.container)}>
        <p {...css(styles.title)}>Notes</p>
        <Form
          createNote={this.createNote}
        />
        <Notes
          notes={notes}
          deleteNote={this.deleteNote}
          updateNote={this.updateNote}
        />
        <div {...css(styles.bottomMenu)}>
          <p
            onClick={() => this.updateFilter('none')}
            {...css([ styles.menuItem, getStyle('none', filter)])}
          >All</p>
          <p
            onClick={() => this.updateFilter('completed')}
            {...css([styles.menuItem, getStyle('completed', filter)])}
          >Completed</p>
          <p
            onClick={() => this.updateFilter('new')}
            {...css([styles.menuItem, getStyle('new', filter)])}
          >Pending</p>
        </div>
      </div>
    );
  }
}

function getStyle(type, filter) {
  if (type === filter) {
    return {
      fontWeight: 'bold'
    }
  }
}

const styles = {
  bottomMenu: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center'
  },
  menuItem: {
    cursor: 'pointer',
    marginRight: 20
  },
  title: {
    fontSize: 44,
    margin: '10px 0px'
  },
  container: {
    textAlign: 'center'
  }
} 

export default withAuthenticator(App, { includeGreetings: true })
