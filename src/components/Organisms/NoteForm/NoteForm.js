import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import uuidv1 from 'uuid/v1'

// import Row from 'src/components/Atoms/Row'
import Icon from 'src/components/Atoms/Icon'

import styles from './NoteFormStyles.sass'


class NoteForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    action: PropTypes.func.isRequired
  }

  static defaultProps = {
    className: ''
  }

  addNewNote = (event) => {
    event.preventDefault()
    // get form and prepare object for the action
    const $form = document.getElementById('form')
    const form = new FormData($form)
    const data = {
      id: uuidv1(),
      title: form.get('title'),
      description: form.get('description')
    }
    // clear form
    $form.children.title.value = ''
    $form.children.description.value = ''
    // dispatch action
    this.props.action(data)
  }

  render() {
    const { className } = this.props
    const classNames = classnames(styles.container, {
      [className]: !!className
    })

    return (
      <form className={classNames} onSubmit={this.addNewNote} id="form">
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="description" rows="4" placeholder="Description..." required />
        <button type="submit">
          <Icon name="plus" style={{ paddingLeft: '7px', paddingRight: '7px', color: 'green' }} />
          Create
        </button>
      </form>
    )
  }
}

export default NoteForm
