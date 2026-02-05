import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";



import { ScrollIndicator } from "@/components/scroll-indicator";
import Home from "@/pages/home";
import ProjectDetail from "@/pages/project-detail";
import FutureFirstFamiliesCaseStudy from "@/pages/future-first-families-case-study";
import LiffoCaseStudy from "@/pages/liffo-case-study";
import TwoHourLearningCaseStudy from "@/pages/2hour-learning-case-study";

import NotFound from "@/pages/not-found";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/fff-case-study" component={FutureFirstFamiliesCaseStudy} />
      <Route path="/liffo-case-study" component={LiffoCaseStudy} />
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
      <TooltipProvider>
        <div className="dark">

          <ScrollIndicator />

          <Toaster />
          <Routes />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
