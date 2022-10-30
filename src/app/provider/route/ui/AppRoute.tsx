import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutesConfig } from "shared/config/configRoute.tsx/configRoute";


export const AppRoute: FC = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(appRoutesConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    )
}
