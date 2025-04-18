import React from 'react';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Your Bot Army</h2>
      <div className="row">
        {army.map(bot => (
          <div key={bot.id} className="col-md-3 mb-4">
            <div className="card shadow-sm border-success">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">{bot.catchphrase}</p>
                <div className="d-flex justify-content-around">
                  <button onClick={() => releaseBot(bot)} className="btn btn-warning btn-sm">
                    Release
                  </button>
                  <button onClick={() => dischargeBot(bot)} className="btn btn-danger btn-sm">
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
