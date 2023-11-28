import { Routes, Route } from "react-router-dom"
import { PageDois, PageHome, PageLayout, PageCadastrar, PageLogin, PageAdm } from "../pages/index"
import ProtectedRoute from "./ProtectedRoute"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route path="" element={<PageHome />} />
                <Route path="Galeria" element={<PageDois />} />
                <Route path="/cadastrar" element={<PageCadastrar />} />
                <Route path="/login" element={<PageLogin />} />
                <Route path="/Adm" element={<ProtectedRoute />}>
                    <Route path="" element={<PageAdm />} />
                </Route>
            </Route>
        </Routes>
    )
};
