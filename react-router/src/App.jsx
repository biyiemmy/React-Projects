import "./App.css";
import "./server";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vans } from "./pages/Vans/Vans";
import { VanDetails } from "./pages/Vans/VanDetails";
import { Layout } from "./components/Layout";
import { DashBoard } from "./pages/Host/DashBoard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { HostVans } from "./pages/Host/HostVans";
import { HostVanDetails } from "./pages/Host/HostVanDetails";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";
import { HostVanPricing } from "./pages/Host/HostVanPricing";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<DashBoard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />

              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="photos" element={<HostVanPhotos />} />
                <Route path="pricing" element={<HostVanPricing />} />
              </Route>

              {/* nested above two together below */}
              {/* <Route path="vans" element={<Outlet />}>
                <Route index element={<HostVans />} />
                <Route path=":id" element={<HostVanDetails />} />
              </Route> */}
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
