import React from 'react'
import Helmet from 'react-helmet'
import { Link, navigate } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    constructor(props) {
        super(props)
        this.ContactForm = React.createRef()
        this.state = {
          name: "",
          email: "",
          message: "",
        }
      }
      encode = data => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&")
      }
      handleSubmit = event => {
        event.preventDefault()
        const form = this.ContactForm.current
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": form.getAttribute("name"),
            ...this.state,
          }),
        })
          .then(() => navigate("/success"))
          .catch(error => alert(error))
    
        this.setState({
          name: "",
          email: "",
          message: "",
        })
      }

    render() {
        const siteTitle = "Compro Oro e Argento - Lascari (Palermo)"
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
                        <h3><strong>Informazioni Compro Oro Lascari</strong></h3>
                        <h4>Orari di apertura</h4>
                        <strong>lun:	16:30–19:30</strong><br />
                        mar:	09:30–13:00, 16:30–19:30<br />
                        <strong>mer:	09:30–13:00, 16:30–19:30</strong><br />
                        gio:	09:30–13:00, 16:30–19:30<br />
                        <strong>ven:	09:30–13:00, 16:30–19:30</strong><br />
                        sab:	09:30–13:00, 16:30–19:30<br />
                        <strong>dom:	Chiuso</strong><br />
                        <hr/>
                        <h2>La quotazione più alta del comprensorio per oro ed argento</h2>
                        

                        <ul className="actions">
                            <li><a href={`https://g.page/comproorolascari?gm`} target="_blank" className="button">Ulteriori informazioni</a></li>
                            <br />
                            <br />
                            <li><a href={`https://search.google.com/local/reviews?placeid=ChIJqSti1oM5FxMRiidqRdKrAJY`} target="_blank" className="button">Lascia una recensione</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h3>Contattaci</h3>
                        <h4>Per informazioni o per prenotare degli appuntamenti per valutazioni compila il form qui sotto oppure chiamaci o mandaci una mail. Cliccando sull'indirizzo potrai invece vedere dove ci troviamo!</h4>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="contact" />
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
                                        <a href="https://www.google.com/maps/place/COMPRO+ORO+LASCARI/@38.00042,13.9364313,17z/data=!3m1!4b1!4m5!3m4!1s0x13173983d6622ba9:0x9600abd2456a278a!8m2!3d38.00042!4d13.93862">
                                        Vieni a trovarci in<br />
                                        via Alcide de Gasperi, 64<br />
                                        Lascari, Palermo 90010<br />
                                        Italia</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Telefono</span></h3>
                                        <a href="tel:+393339253880">Chiamaci al 3339253880</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-whatsapp"><span className="label">Whatsapp</span></h3>
                                        <a href="https://api.whatsapp.com/send?phone=393339253880">Scrivici su Whatsapp</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="https://m.me/comprorolascari">Scrivici su Facebook Messenger</a>
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