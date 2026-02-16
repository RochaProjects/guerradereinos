import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Batalhas from "@/pages/Batalhas";
import Comandos from "@/pages/Comandos";
import Fases from "@/pages/Fases";
import Home from "@/pages/Home";
import Loja from "@/pages/Loja";
import NotFound from "@/pages/NotFound";
import Punicoes from "@/pages/Punicoes";
import Regras from "@/pages/Regras";
import ServerIp from "@/pages/ServerIp";
import Skins from "@/pages/Skins";
import TimesCargos from "@/pages/TimesCargos";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";


function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/regras"} component={Regras} />
        <Route path={"/fases"} component={Fases} />
        <Route path={"/batalhas"} component={Batalhas} />
        <Route path={"/comandos"} component={Comandos} />
        <Route path={"/loja"} component={Loja} />
        <Route path={"/server-ip"} component={ServerIp} />
        <Route path={"/punicoes"} component={Punicoes} />
        <Route path={"/times-cargos"} component={TimesCargos} />
        <Route path={"/skins"} component={Skins} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
