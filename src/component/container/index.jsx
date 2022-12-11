import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styles from './container.module.css'

const Main = ({children}) => {
    return(
        <main>
            {children}
        </main>
    )
}

Main.propTypes = {
    children : PropTypes.node
}

export default Main