import React from 'react';

function BotCollection({ bots, addToArmy, dischargeBot }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {bots.map(bot => (
          <div key={bot.id} className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">{bot.catchphrase}</p>
                <div className="d-flex justify-content-around">
                  <button onClick={() => addToArmy(bot)} className="btn btn-primary btn-sm">
                    Enlist
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

export default BotCollection;
