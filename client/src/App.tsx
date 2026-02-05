import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/theme-context";

import { ScrollIndicator } from "@/components/scroll-indicator";
import Home from "@/pages/home";
import ProjectDetail from "@/pages/project-detail";
import CaseStudy from "@/pages/case-study";
import LiffoCase from "./pages/liffo-case";
import TwoHourLearningCaseStudy from "./pages/2hour-learning-case-study";

import NotFound from "@/pages/not-found";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/fff-case-study" component={CaseStudy} />
      <Route path="/liffo-case-study" component={LiffoCase} />
      <Route path="/2hour-learning-case-study" component={TwoHourLearningCaseStudy} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <ScrollIndicator />
          <Toaster />
          <Routes />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
