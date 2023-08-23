import { Outlet } from "react-router-dom";
import { ComponentHeader } from "../../components/index"
import { ComponentFooter } from "../../components/index"
import * as S from "./style"

export function Layout() {
    return (
        <>
            <ComponentHeader />
            <S.Main>
            <Outlet />
            </S.Main>
            <ComponentFooter />
        </>
    )

}