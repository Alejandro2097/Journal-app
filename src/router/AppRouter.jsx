import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
        {/*  Login y registro */}
        <Route path="login" element={<LoginPage/>}/>
        {/*  JournalApp */}
        <Route path="register" element={<RegisterPage/>}/>
    </Routes>
  )
}
