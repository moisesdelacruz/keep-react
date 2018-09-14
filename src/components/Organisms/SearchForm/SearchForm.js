import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Row from 'src/components/Atoms/Row'
// import Col from 'src/components/Atoms/Col'
// import Text from 'src/components/Atoms/Text'
// import Button from 'src/components/Atoms/Button'
import Icon from 'src/components/Atoms/Icon'
// import Dropdown from 'src/components/Molecules/Dropdown'
// import TradeInput from 'src/components/Molecules/TradeInput'

import styles from './SearchFormStyles.sass'

class SearchForm extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  componentDidMount() {}
  //
  // handleOnChange = (value) => {
  //   this.setState({ value: Number(value) })
  // }
  //
  // handleOnMaxPress = () => {
  //   this.setState({ value: this.props.maxValue })
  // }

  render() {
    const { className } = this.props

    const classNames = classnames(styles.container, {
      [className]: !!className
    })

    return (
      <Row className={classNames}>
        <input type="text" name="search" placeholder="Search Note..." />
        <button type="submit" style={{ padding: '1em' }}>
          <Icon name="search" />
        </button>
      </Row>
    )
  }
}

export default SearchForm
