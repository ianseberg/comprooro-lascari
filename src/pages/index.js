import React from 'react'
import Helmet from 'react-helmet'
import { Link, navigate } from 'gatsby'
import Layout from '../components/layout'

class HomeIndex extends React.Component {

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }
  
  handleSubmit = event => {
    event.preventDefault()
    const form = this.ContactForm.current
    fetch("/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/success'))
      .catch(error => alert(error))

    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    window.gtag("event", "conversion", { send_to: ["AW-939929396/3afWCKCSmvEBELTemMAD"]})
    window.gtag("event", "phone_conversion_number", { send_to: ["AW-939929396/3afWCKCSmvEBELTemMAD", +393339253880]})
}    

  render() {
    const siteTitle = 'Compro Oro e Argento a Lascari - Palermo - Sicilia'
    const siteDescription = 'Compro Oro Lascari è specializzata nella compravendita di oro, argento e oggetti preziosi in provincia di Palermo. Da oltre 60 anni, riusciamo sempre a fornire la migliore quotazione relativa a tutti i metalli preziosi come oro od argento, aggiornata in tempo reale con il fixing di Londra'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <html lang="it" />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Compro Oro Lascari (Palermo): Lo specialista nella compravendita di oro, argento, metalli
                preziosi, anche di marca, e monete.</h2>
            </header>
            <p>
              <hr />
            
              <h3>Compro Oro Lascari (Palermo) è un'azienda amministrata
                da professionisti seri ed affidabili, specializzati nella
                compravendita di oro, argento e oggetti preziosi, anche di
                marca, o monete. Da oltre 60 anni, riusciamo sempre a fornire la migliore
                quotazione relativa a tutti i metalli preziosi come oro od argento, aggiornata in
                tempo reale con il <a href="http://www.lbma.org.uk/" target="_blank">
                fixing di Londra</a> per l'oro (od argento) puro al grammo.
                <br /><br />Scopri quanto vale il tuo oro usato in tempo reale e senza
              impegno.
              <br /><br />Ricevi la migliore quotazione sul mercato.{' '}
              <br /><br /><a href="https://mercati.ilsole24ore.com/materie-prime/commodities/oro/GLDEUR/" target="_blank">
                Quotazioni Aggiornate ad oggi
              </a>
              . Chiedi una valutazione.
              <br /><br />Ritiro contanti con pagamento immediato (come previsto per Legge).</h3>
              <hr />
              <h4>Presenti da oltre 60 anni sul territorio, vicini alle vostre
              esigenze; i valori che ci differenziano e ci hanno
              contraddistinto: affidabilità, correttezza, serietà e
              riservatezza.</h4>
            </p>
            <ul className="actions">
              <li>
                <a href={`#contact`} target="_blank" className="button">
                  Per informazioni ed appuntamenti
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
            <h1>La quotazione di oro e argento più alta del comprensorio</h1>
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
            <h1><strong>Contatta Compro Oro Lascari</strong></h1>
            <h2>
              <i>Per informazioni sulla quotazione dell'oro o per prenotare un appuntamento per
              una valutazione di metalli preziosi compila il form qui sotto oppure chiamaci o mandaci
              una mail. Cliccando sull'indirizzo potrai invece vedere dove ci
              troviamo!</i>
            </h2>
            <div className="row">
              <div className="8u 12u$(small)">
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
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
                        placeholder="Email"
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
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="hidden" name="form-name" value="contact" />
                      <button
                      type="submit"
                      classname="button"
                      method="POST">Invia!</button>
                  </li>
                </ul>
                </form>

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
                    <a href="tel:+393339253880">Clicca per chiamaci al 3339253880</a>
                  </li>
                  <li>
                    <h3 className="icon fa-whatsapp">
                      <span className="label">Whatsapp</span>
                    </h3>
                    <a href="https://api.whatsapp.com/send?phone=393339253880">
                      Clicca per scriverci su Whatsapp
                    </a>
                  </li>
                  <li>
                    <h3 className="icon fa-facebook-square">
                      <span className="label">Email</span>
                    </h3>
                    <a href="https://m.me/comprorolascari">
                      Clicca per scriverci su Facebook Messenger
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
