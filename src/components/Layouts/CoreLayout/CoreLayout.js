import React from 'react'
import PropTypes from 'prop-types'

import Row from 'src/components/Atoms/Row'
import Header from 'src/components/Organisms/Header'

import styles from './CoreLayoutStyles.sass'

const CoreLayout = ({ children }) => (
  <Row style={{ paddingTop: 0, paddingBottom: 0 }}>
    <Header />
    <section className={styles.layout}>
      <Row className={styles.children} spacing={{ bottom: 0, top: 0 }}>
        {children}
      </Row>
    </section>
  </Row>
)

CoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CoreLayout
