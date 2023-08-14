import { Routes, Route } from "react-router-dom"
import { PageDois, PageHome, PageLayout } from "../pages/index"


export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route path="" element={<PageHome />} />
                <Route path="segunda" element={<PageDois />} />
            </Route>
        </Routes>
    )
}