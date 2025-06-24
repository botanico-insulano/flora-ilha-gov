import "./App.scss";
import { ErrorBoundary } from "react-error-boundary";
import FiltersMainContainer from "./components/fieldsets/FiltersMainContainer";
export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <div style={{ marginLeft: "50%", marginTop: "50%" }}>Error</div>
      )}
    >
      <h1>Flora Online da Ilha do Governador</h1>
      <div className="card">
        <FiltersMainContainer />
        <table>
          <caption>Resultados</caption>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
        <object>MAPA</object>
      </div>
    </ErrorBoundary>
  );
}
