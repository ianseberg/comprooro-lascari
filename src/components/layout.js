import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                {children}
            </div>
        )
    }
}

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

export default Template

