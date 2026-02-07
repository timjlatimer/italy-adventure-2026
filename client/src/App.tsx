import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import RouteMap from "./pages/RouteMap";
import Budget from "./pages/Budget";
import Logistics from "./pages/Logistics";
import { TextSizeProvider } from "./contexts/TextSizeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/itinerary" component={Itinerary} />
      <Route path="/map" component={RouteMap} />
      <Route path="/budget" component={Budget} />
      <Route path="/logistics" component={Logistics} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TextSizeProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </TextSizeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
