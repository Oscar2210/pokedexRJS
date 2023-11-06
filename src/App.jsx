import AppRouter from "./routes/AppRouter"
import { PokemonProvider } from "./context/PokemonProvider"

function App() {

  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
}

export default App
