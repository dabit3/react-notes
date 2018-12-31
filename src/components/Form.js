import React from 'react'
import { css } from 'glamor'
import { MdAdd } from 'react-icons/md'

class Form extends React.Component {
  state = { name: '' }
  onChange = e => {
    this.setState({ name: e.target.value })
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.name !== '') {
      const note = {
        ...this.state, status: 'new'
      }
      this.props.createNote(note)
      this.setState({ name: '' })
    }
  }
  render() {
    return (
      <div {...css(styles.container)}>
        <div {...css(styles.form)}>
          <MdAdd size={28} />
          <input
            placeholder='Note Name'
            {...css(styles.input)}
            onKeyPress={this.handleKeyPress}
            onChange={e => this.onChange(e)}
            value={this.state.name}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 360,
    margin: '0 auto',
    borderBottom: '1px solid #ededed',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 35,
    width: '360px',
    border: 'none',
    outline: 'none',
    marginLeft: 10,
    fontSize: 20,
    padding: 8,
  }
}

export default Form