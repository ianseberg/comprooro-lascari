import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class PrivacyPolicy extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>PRIVACY NOTICE - Last updated August 29, 2020</h2>
                        </header>
                        <p></p>
                    </section>

                    <section id="two">
                        <h2>Informazioni</h2>
                        <h3>Orari di apertura</h3>
                        lun:	16:30–19:30<br />
                        mar:	09:30–13:00, 16:30–19:30<br />
                        mer:	09:30–13:00, 16:30–19:30<br />
                        gio:	09:30–13:00, 16:30–19:30<br />
                        ven:	09:30–13:00, 16:30–19:30<br />
                        sab:	09:30–13:00, 16:30–19:30<br />
                        dom:	Chiuso<br />
                        <br />
                        <br />
                        <h2>La quotazione più alta del comprensorio per oro ed argento</h2>
                        
                    </section>


                </div>

            </Layout>
        )
    }
}

export default PrivacyPolicy