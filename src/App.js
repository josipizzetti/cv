import Contact from './Contact';
import PersonalBlock from './PersonalBlock';
import Experience from './Experience';
import { personal, experiences, education } from './data';
import './App.css';

function App() {
  return (
      <>
        <h1 className="cv name">. Curriculum .</h1>
        <div className="App">
                <h1 className="name">Josiane S. Pizzetti</h1>
            <div className="container">
                <section className="personal">
                    <div className="personal-float">
                        <h3>Front-end developer</h3>
                    </div>
                    <Contact />
                    {personal?.map(item => (
                        <PersonalBlock title={item.title} description={item.description}/>
                    ))
                    }
                    <div className="personal-block">
                        <h3>Printable version</h3>
                        <a href="https://docs.google.com/document/d/19yhStVPv56s78GWcUujg1BDYasaaZYCQ7-oFQd6CFnY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="jsx-545344110 underline doc-link">access the real document</a>
                    </div>
                </section>
                <section className="professional name">
                    <h3 className="profile-title">Professional experience</h3>
                    {experiences?.map(item => (
                        <Experience item={item} classProp='experiences'/>
                    ))}
                </section>
                <section className="personal">
                    <div className="education-block">
                        <h3 className="profile-title">Education</h3>
                        {education?.map(item => (
                            <Experience item={item} classProp='educational'/>
                        ))}
                    </div>
                </section>
            </div>
        </div>
      </>
  );
}

export default App;
