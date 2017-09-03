import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import owners from "../images/owners.png";


class AboutAppContainer extends Component {
  constructor(props) {
    super(props)
  }

   render() {
     return (
       <div>
         <h3 className="title">Se hur appen fungerar</h3>
         <div className="contact">
           Email: <a href="mailto:hello@foodfixers.se" target="_blank">hello@foodfixers.se</a><br></br>
           Tel: <a href="tel:+46103302077">010-330 20 77</a>
         </div>
<p><b>Hur funkar appen foodfixers.se?</b></p>

<p>Appen &auml;r en webbapp och kr&auml;ver ingen nedladdning fr&aring;n Appstore eller Google Play. Den &auml;r anpassad f&ouml;r mobil anv&auml;ndning och funkar b&auml;st i webbl&auml;saren p&aring; din smartphone. Om du upplever problem vill vi g&auml;rna att du ringer oss ist&auml;llet 010-330 20 77.</p>

<p><b>F&ouml;lj dom h&auml;r stegen f&ouml;r att best&auml;lla:</b></p>

<p><b>Skapa ett anv&auml;ndarkonto</b></p>

<p>Registrera ett nytt konto f&ouml;rsta g&aring;ngen du bes&ouml;ker oss:</p>

<p> -Klicka p&aring; l&auml;nken under &rdquo;LOGGA IN&rdquo; knappen.</p>
<p> -Fyll i din epost och ett l&ouml;senord med minst sex tecken.</p>
<p> -Klicka p&aring; &rdquo;REGISTRERA&rdquo;</p>
<p> -Fyll i epost och l&ouml;senord igen.</p>
<p> -Klicka p&aring; &rdquo;LOGGA IN&rdquo;</p>
<p> -Fyll i ditt f&ouml;r- och efternamn.</p>
<p> -Klicka p&aring; &rdquo;SPARA PROFIL&rdquo;</p>

<p>Anv&auml;nd en epost du verkligen anv&auml;nder s&aring; att vi kan kontakta dig om det beh&ouml;vs. Vi kommer aldrig s&auml;lja den till n&aring;gon annan. Vi kommer eventuellt att skicka ut en p&aring;minnelse om att best&auml;lla en g&aring;ng i veckan, om vi g&ouml;r det kommer vi g&ouml;ra det l&auml;tt f&ouml;r dig att avsluta det utskicket. Ditt f&ouml;r- och efternamn kommer att synas p&aring; din sushil&aring;da s&aring; att du f&aring;r r&auml;tt l&aring;da.</p>

<p><b>Logga in</b></p>

<p>N&auml;sta g&aring;ng du bes&ouml;ker oss ska du logga in.</p>

<p> -Fyll i epost och l&ouml;senord. </p>
<p> -Klicka p&aring; &rdquo;LOGGA IN&rdquo; </p>

<p>L&aring;t g&auml;rna webbl&auml;saren spara ditt l&ouml;senord s&aring; blir det enklare n&auml;sta g&aring;ng.</p>

<p><b>B&ouml;rja best&auml;lla</b></p>

<p> -Klicka p&aring; &rdquo;BEST&Auml;LL H&Auml;R&rdquo; f&ouml;r att se menyn.  -V&auml;lj n&aring;got och klicka p&aring; &rdquo;L&Auml;GG TILL&rdquo;.  -V&auml;lj tillbeh&ouml;r om du vill och klicka p&aring; L&Auml;GG TILL&rdquo;  -N&auml;r du &auml;r klar klicka antingen p&aring; knappen &rdquo;KUNDVAGN&rdquo; l&auml;ngst ner p&aring; sidan eller p&aring; kundvagnsikonen h&ouml;gst upp p&aring; sidan.</p>

<p><b>V&auml;lj omr&aring;de</b></p>

<p>Nu ska du v&auml;lja i vilket omr&aring;de du vill h&auml;mta upp maten. Vi k&ouml;r enligt ett fast veckoschema. H&auml;r hittar du en lista som kan vara bra att bl&auml;ddra igenom f&ouml;r att l&auml;ttare hitta den tid och plats som passar dig b&auml;st. </p>

<p> -Klicka p&aring; ett omr&aring;de.</p>
<p> -Bl&auml;ddra ner.</p>
<p> -Klicka p&aring; &rdquo;N&Auml;STA&rdquo;</p>

<p>V&auml;lj datum</p>

<p>Nu ska du v&auml;lja vilket datum du vill f&aring; maten levererad.</p>

<p> -Klicka p&aring; ett datum.</p>
<p> -Bl&auml;ddra ner.</p>
<p> -Klicka p&aring; &rdquo;N&Auml;STA&rdquo;</p>

<p>Du kan se datum sex dagar fram&aring;t i tiden. Ser du inga datum att v&auml;lja bland, testa igen imorgon. Du kan ocks&aring; se hela listan med v&aring;ra stopp h&auml;r.</p>

<p><b>V&auml;lj tid och plats</b></p>

<p>Nu ska du v&auml;lja den exakta tiden och platsen f&ouml;r upph&auml;mtning. </p>

<p> -Klicka p&aring; en plats.</p>
<p> -Bl&auml;ddra ner.</p>
<p> -Klicka p&aring; &rdquo;SPARA&rdquo;</p>

<p>T&auml;nk p&aring; att vi k&ouml;r enligt ett schema och att vi oftast bara stannar fem minuter p&aring; varje plats. I regel stannar vi l&auml;ngre p&aring; det sista lunchstoppet varje dag och p&aring; A6 parkering. Se mer exakta tider h&auml;r.</p>

<p><b>Slutf&ouml;r best&auml;llningen</b></p>

<p>Nu &auml;r du klar att checka ut. </p>

<p> -Kolla att kundvagnen inneh&aring;ller det du vill ha.</p>
<p> -L&auml;s igenom och godk&auml;nn avtalet.</p>
<p> -Klicka p&aring; &rdquo;BETALA&rdquo;</p>
<p> -Fyll i epost och kortuppgifter</p>
<p> -Kryssa i &rdquo;Kom ih&aring;g mig&rdquo; om du anv&auml;nder din egen mobil.</p>
<p> -Klicka p&aring; &rdquo;Betala XXkr&rdquo;</p>

<p>Du betalar tryggt och s&auml;kert med kort genom Stripe direkt i appen. Inga kortuppgifter kan ses eller sparas av oss utan endast av Stripe. Stripe skickar ett kvitto till din epost inom 24 timmar.</p>

<p><b>Se din order</b></p>

<p>Nu &auml;r du klar och kan se din order.</p>

<p> -Klicka p&aring; bak&aring;tpilen och sedan menyn h&ouml;gst upp till v&auml;nster.</p>
<p> -Klicka p&aring; &rdquo;PROFIL&rdquo; </p>
<p> Om du inte kan se ordern i din profil ring oss direkt p&aring; 010-330 20 77.</p>

<p><b>H&auml;mta din mat</b></p>

<p>Kom ut till foodfixers sk&aring;pbil p&aring; r&auml;tt plats och tid och h&auml;mta ut din p&aring;se med mat.  Smaklig m&aring;ltid! </p>

       </div>
     )
   }
}

export default AboutAppContainer
