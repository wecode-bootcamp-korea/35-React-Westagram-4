import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
//익현 Login,Main
import LoginIkHyun from './pages/ikhyunKim/Login/Login';
import MainIkHyun from './pages/ikhyunKim/Main/Main';
//정은 Login,Main
import LoginJeongEun from './pages/jeongeunNoh/Login/Login';
import MainJeongEun from './pages/jeongeunNoh/Main/Main';
//억화 Login,Main
import LoginEokHwa from './pages/eokhwaJeong/Login/Login';
import MainEokHwa from './pages/eokhwaJeong/Main/Main';
//금관 Login,Main
import LoginGeumGwan from './pages/geumgwanLee/Login/Login';
import MainGeumGwan from './pages/geumgwanLee/Main/Main';
//제홍 Login,Main
import LoginJaeHong from './pages/jaehongChoi/Login/Login';
import MainJaeHong from './pages/jaehongChoi/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* 익현 */}
        <Route path="/login-ikhyun" element={<LoginIkHyun />} />
        <Route path="/main-ikhyun" element={<MainIkHyun />} />
        {/* 정은 */}
        <Route path="/login-jeongeun" element={<LoginJeongEun />} />
        <Route path="/main-jeongeun" element={<MainJeongEun />} />
        {/* 억화 */}
        <Route path="/login-eokhwa" element={<LoginEokHwa />} />
        <Route path="/main-eokhwa" element={<MainEokHwa />} />
        {/* 금관 */}
        <Route path="/login-geumgwan" element={<LoginGeumGwan />} />
        <Route path="/main-geumgwan" element={<MainGeumGwan />} />
        {/* 제홍 */}
        <Route path="/login-jaehong" element={<LoginJaeHong />} />
        <Route path="/main-jaehong" element={<MainJaeHong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
