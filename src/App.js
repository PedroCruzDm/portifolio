import './App.css';
import OmoriTheme from './Components/Temas/Omori/OmoriTheme';
import StarWarsTheme from './Components/Temas/StarWars/StarWarsTheme';

const temas = [
  <StarWarsTheme key="starwars" />, // Substitua pelo componente real
  <div key="astrologia">AstrologiaTheme</div>,
  <div key="astronomia">AstronomiaTheme</div>,
  <OmoriTheme key="omori" />,
  <div key="pedroteam">PedroTeamTheme</div>,
  <div key="saturno">SaturnoTheme</div>,
  <div key="scootpilgrim">ScootPilgrimTheme</div>,
];


function App() {
  const diaSemana = new Date().getDay();
  return (
    <div className="App">
      {temas[diaSemana]}
    </div>
  );
}

export default App;