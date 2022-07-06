import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
//익현 Login,Main
import LoginIkHyun from '../src/pages/ikhyunKim/Login/Login';
import MainIkHyun from '../src/pages/ikhyunKim/Main/Main';
//정은 Login,Main
import LoginJeongEun from '../src/pages/jeongeunNoh/Login/Login';
import MainJeongEun from '../src/pages/jeongeunNoh/Main/Main';
//억화 Login,Main
import LoginEokHwa from '../src/pages/eokhwaJeong/Login/Login';
import MainEokHwa from '../src/pages/eokhwaJeong/Main/Main';
//금관 Login,Main
import LoginGeumGwan from '../src/pages/geumgwanLee/Login/Login';
import MainGeumGwan from '../src/pages/geumgwanLee/Main/Main';
//제홍 Login,Main
import LoginJaeHong from '../src/pages/jaehongChoi/Login/Login';
import MainJaeHong from '../src/pages/jaehongChoi/Main/Main';

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
        <Route path="/login-jaehong" element={<MainJaeHong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
