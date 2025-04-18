import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find(member => member.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter(member => member.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter(item => item.id !== bot.id));
        setArmy(army.filter(member => member.id !== bot.id));
      });
  };

  return (
    <div className="bg-light">
      <YourBotArmy army={army} releaseBot={releaseFromArmy} dischargeBot={dischargeBot} />
      <h1 className="text-center mt-4">Bot Collection</h1>
      <BotCollection bots={bots} addToArmy={addToArmy} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;
