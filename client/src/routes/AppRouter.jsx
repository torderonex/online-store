import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
export default function AppRouter(){
    return (
        <Routes>
            {publicRoutes.map(obj => (
                <Route key={obj.path} path={obj.path} Component={obj.Component}/>
            ))
            }
        </Routes>
    
    );
}