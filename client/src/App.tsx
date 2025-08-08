import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";


import { ParticleBackground } from "@/components/particles";
import { ScrollIndicator } from "@/components/scroll-indicator";
import Home from "@/pages/home";
import ProjectDetail from "@/pages/project-detail";
import CaseStudy from "@/pages/case-study";
import LiffoCase from "./pages/liffo-case";

import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/fff-case-study" component={CaseStudy} />
      <Route path="/liffo-case-study" component={LiffoCase} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <ParticleBackground />
          <ScrollIndicator />

          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
