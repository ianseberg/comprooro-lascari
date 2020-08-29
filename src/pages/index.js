import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

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
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        </header>
                        <p>Presenti da oltre 60 anni sul territorio, vicini alle vostre esigenze; i valori che ci differenziano e ci hanno contraddistinto: affidabilità, correttezza, serietà e riservatezza.<br />Lorem ipsum <a href="https://google.com" target="_blank">dolor sit amet, consectetur adipiscing elit, sed do</a> eiusmod tempor incididunt ut labore <a href="http://www.lbma.org.uk/" target="_blank">et dolore magna aliqua.</a></p>
                        <ul className="actions">
                            <li><a href={`#three`} target="_blank" className="button">Dicci di cosa hai bisogno</a></li>
                        </ul>
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
                        

                        <ul className="actions">
                            <li><a href={`https://g.page/comproorolascari?gm`} target="_blank" className="button">Ulteriori informazioni</a></li>
                            <br />
                            <br />
                            <li><a href={`https://search.google.com/local/reviews?placeid=ChIJqSti1oM5FxMRiidqRdKrAJY`} target="_blank" className="button">Lascia una recensione</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Contattaci</h2>
                        <p>Per informazioni o per prenotare degli appuntamenti per valutazioni compila il form qui sotto oppure chiamaci o mandaci una mail. Cliccando sull'indirizzo potrai invece vedere dove ci troviamo!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Nome" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Telefono od Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Messaggio" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Invia" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Indirizzo</span></h3>
                                        <a href="http://maps.google.com/?q=via Alcide de Gasperi, 64 Lascari, PA 90010 Italia/@38.000296,13.9391984">
                                        Vieni a trovarci in<br />
                                        via Alcide de Gasperi, 64<br />
                                        Lascari, PA 90010<br />
                                        Italia</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Telefono</span></h3>
                                        <a href="tel:+393339253880">Chiamaci al 3339253880</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:comproorolascari@gmail.com">Scrivici su comproorolascari@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex