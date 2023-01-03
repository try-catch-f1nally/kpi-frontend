import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CreateOrderPage from './pages/CreateOrderPage';
import UserPage from './pages/UserPage';
import UserAccountBlock from './pages/UserPage/UserAccountBlock/UserAccountBlock';
import UserOrdersBlock from './pages/UserPage/UserOrdersBlock/UserOrdersBlock';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import {useAppSelector} from './hooks';
import {selectIsAuth} from './redux/auth/selectors';

const App: FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductPage/>}/>
        {isAuth &&
          <>
            <Route path="/user" element={<UserPage/>}>
              <Route path="account" element={<UserAccountBlock/>}/>
              <Route path="orders" element={<UserOrdersBlock/>}/>
            </Route>
            <Route path="/create-order" element={<CreateOrderPage/>}/>
          </>
        }
        <Route path="*" element={<ErrorPage title="This page doesn't exist"/>}/>
      </Route>
    </Routes>
  );
}

export default App;
