import React from 'react'
import Helmet from 'react-helmet'
import { navigate } from 'gatsby'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.ContactForm = React.createRef()
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  handleSubmit = event => {
    event.preventDefault()
    const form = this.ContactForm.current
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'contact': form.getAttribute('form-name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/pages/success'))
      .catch(error => alert(error))

    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  render() {
    const siteTitle = 'Compro Oro e Argento - Lascari (Palermo)'
    const siteDescription = 'Compro Oro Lascari (Palermo) è specializzata nella compravendita di oro, argento e oggetti preziosi. Da oltre 60 anni, riusciamo sempre a fornire la migliore quotazione relativa a tutti i metalli preziosi come oro od argento, aggiornata in tempo reale con il fixing di Londra'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Lo specialista nella compravendita di oro, argento e metalli
                preziosi, anche di marca.</h2>
            </header>
            <p>
              <hr />
              <h3>Compro Oro Lascari (Palermo) è un'azienda amministrata
                da professionisti seri ed affidabili, specializzati nella
                compravendita di oro, argento e oggetti preziosi, anche di
                marca. Da oltre 60 anni, riusciamo sempre a fornire la migliore
                quotazione relativa a tutti i metalli preziosi come oro od argento, aggiornata in
                tempo reale con il <a href="http://www.lbma.org.uk/" target="_blank">
                fixing di Londra</a>.
                <br />Scopri quanto vale il tuo oro usato in tempo reale e senza
              impegno.
              Ricevi la migliore quotazione sul mercato.{' '}
              <a href="http://www.https://mercati.ilsole24ore.com/materie-prime/commodities/oro/GLDEUR/" target="_blank">
                Quotazioni Aggiornate
              </a>
              . Ritiro contanti con pagamento immediato (come previsto per Legge).</h3>
              <h5>Presenti da oltre 60 anni sul territorio, vicini alle vostre
              esigenze; i valori che ci differenziano e ci hanno
              contraddistinto: affidabilità, correttezza, serietà e
              riservatezza.</h5>
            </p>
            <ul className="actions">
              <li>
                <a href={`#contact`} target="_blank" className="button">
                  Dicci di cosa hai bisogno
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h3>
              <strong>Informazioni Compro Oro Lascari</strong>
            </h3>
            <h4>Orari di apertura</h4>
            <strong>lun: 16:30–19:30</strong>
            <br />
            mar: 09:30–13:00, 16:30–19:30
            <br />
            <strong>mer: 09:30–13:00, 16:30–19:30</strong>
            <br />
            gio: 09:30–13:00, 16:30–19:30
            <br />
            <strong>ven: 09:30–13:00, 16:30–19:30</strong>
            <br />
            sab: 09:30–13:00, 16:30–19:30
            <br />
            <strong>dom: Chiuso</strong>
            <br />
            <hr />
            <h2>La quotazione più alta del comprensorio per oro ed argento</h2>
            <ul className="actions">
              <li>
                <a
                  href={`https://g.page/comproorolascari?gm`}
                  target="_blank"
                  className="button"
                >
                  Ulteriori informazioni
                </a>
              </li>
              <br />
              <br />
              <li>
                <a
                  href={`https://search.google.com/local/reviews?placeid=ChIJqSti1oM5FxMRiidqRdKrAJY`}
                  target="_blank"
                  className="button"
                >
                  Lascia una recensione
                </a>
              </li>
            </ul>
          </section>

          <section id="contact">
            <h3>Contattaci</h3>
            <h4>
              Per informazioni o per prenotare degli appuntamenti per
              valutazioni compila il form qui sotto oppure chiamaci o mandaci
              una mail. Cliccando sull'indirizzo potrai invece vedere dove ci
              troviamo!
            </h4>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  form-name="contact" 
                  data-netlify-honeypot="bot-field"
                  method="post"
                  data-netlify="true"
                  action="/pages/success"
                >
                  <input type="hidden" form-name="contact" value="contact" />
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Telefono od Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Messaggio"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input
                      type="submit"
                      value="Invia"
                      classname="button"
                    />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Indirizzo</span>
                    </h3>
                    <a href="https://www.google.com/maps/place/COMPRO+ORO+LASCARI/@38.00042,13.9364313,17z/data=!3m1!4b1!4m5!3m4!1s0x13173983d6622ba9:0x9600abd2456a278a!8m2!3d38.00042!4d13.93862">
                      Vieni a trovarci in
                      <br />
                      via Alcide de Gasperi, 64
                      <br />
                      Lascari, Palermo 90010
                      <br />
                      Italia
                    </a>
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Telefono</span>
                    </h3>
                    <a href="tel:+393339253880">Chiamaci al 3339253880</a>
                  </li>
                  <li>
                    <h3 className="icon fa-whatsapp">
                      <span className="label">Whatsapp</span>
                    </h3>
                    <a href="https://api.whatsapp.com/send?phone=393339253880">
                      Scrivici su Whatsapp
                    </a>
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="https://m.me/comprorolascari">
                      Scrivici su Facebook Messenger
                    </a>
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
