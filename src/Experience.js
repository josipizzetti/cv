import './App.css';

function Experience({item, classProp}) {
  return (
    <div className={classProp}>
        <h4>{item.company || item.school} - <span>{item.period}</span></h4>
        <p>{item.role || item.course}</p>
        <p>{item.activities}</p>
        {item.tech &&
            <p>Main technologies: {item.tech}</p>
        }
    </div>
  );
}

export default Experience;
