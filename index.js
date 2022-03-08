const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-img"
      />
      <div>
        <h1 className="profile-name">Kiran V</h1>
        <p className="profile-address">
          Vishnu Institute of computer Education and Technology, Bhimavaram
        </p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
