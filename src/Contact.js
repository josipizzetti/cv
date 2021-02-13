import './App.css';

function Contact() {
  return (
    <>
        <p className="personal-info"><img src="/icons/phone.png" className="icons" alt="phone"/>06 40870323</p>
        <p className="personal-info"><img src="/icons/mail.png" className="icons" alt="email"/>josipizzetti@gmail.com </p>
        <p className="personal-info"><img src="/icons/home.png" className="icons" alt="home"/>Amsterdam | NL</p>
        <p className="personal-info"><img src="/icons/linkedin.png" className="icons" alt="linkedin"/>
            <a href="https://www.linkedin.com/in/josipizzetti/?locale=en_US" className="personal-info">
            https://www.linkedin.com/in/josipizzetti/?locale=en_US
        </a></p>
    </>
  );
}

export default Contact;
