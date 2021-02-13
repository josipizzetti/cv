import './App.css';

function PersonalBlock({title, description}) {
  return (
    <div className="personal-block">
        <h3>{title}</h3>
        <p data-testid="toast-message" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default PersonalBlock;
