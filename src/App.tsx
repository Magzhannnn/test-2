import { useEffect } from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./router/index";

export default function App() {
  useEffect(() => {
    const cleanup = () => {
      localStorage.clear(); 
    };

    return cleanup;
  }, []);

  return (
    <BrowserRouter>
      <header className="h-20 bg-primary flex items-center p-4">
        <h1 className="text-3xl text-black">Title</h1>
      </header>
      <main className="flex flex-col p-4 h-full relative">
        <Route path="/login" component={LoginPage} />
      </main>
    </BrowserRouter>
  );
}

function LoginPage() {
  return (
    <Switch>
      {routes.map((route, idx) => {
        return (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => (
              <route.Component {...props} {...route.props} />
            )}
          />
        );
      })}
    </Switch>
  );
}
