import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Index from '../pages/Index';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const AuthRoutes = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Route  
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              { user.id  && <Route exact path="/" component={Home} /> }
              { user.id  && <Redirect from='/signIn' to='/' /> }
              { user.id  && <Redirect from='/signUp' to='/' /> }
              { !user.id && <Route exact path="/" component={Index} />}
              { !user.id && <Route exact path="/signIn" component={SignIn} />}
              { !user.id && <Route exact path="/signUp" component={SignUp} />}
              <Route path='*' exact={true} component={PageNotFound} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </BrowserRouter>
  );
}

export default AuthRoutes;