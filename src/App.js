import "./App.css";
import Header from "./component/Header";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer/Footer";
import About from "./component/AboutMe/Aboutme";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header
          name="Sirine Bennaceur"
          bio=" who loves to take on new projects that challenges his analytical and technological capacities.
        "
          role=" fullstack developer"
        />
        <br />
      </div>
      <div className="about">
        <About
          aboutme="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam."
          name="Jonathan Doe"
          address1="1600 Amphitheatre Parkway"
          address2="Mountain View, CA 94043 US"
          phoneNumber="+197 543 2345"
          addressMail="sayhello@ceevee.com"
          CV="yasmina-khadra-ce-que-le-jour-doit-a-la-nuit.pdf"
          src={"/original.jpg"}
        />
      </div>
      <div className="Footer">
        <Footer
          project="Have a new project in mind? Let's collaborate and build something awesome.
         Let's turn that idea to an even greater product :)"
          mail="sayhello@ceevee.com"
          phoneNumber="+197 543 2345"
          facebbok=""
          instagram=""
          linkedin=""
          github=""
        ></Footer>
      </div>
    </div>
  );
}

export default App;
