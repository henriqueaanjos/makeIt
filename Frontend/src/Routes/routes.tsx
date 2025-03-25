import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Index from '../pages/Index';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import HomePublic from '../pages/HomePublic';
import PageNotFound from '../pages/PageNotFound';

const AuthRoutes = () => {
  const { user } = useAuth();
  
  return (
    <BrowserRouter>
      <AnimatePresence  initial={false}>
        <Routes>
          {user.id ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signIn" element={<Navigate to="/" />} />
              <Route path="/signUp" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Index />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </>
          )}
          <Route path="/publish/:id" element={<HomePublic />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default AuthRoutes;
