import { Link, Route, Routes, Navigate } from "react-router-dom"
import { EpicScreen } from "screens/Epic"
import { KanbanScreen } from "screens/Kanban"

export const ProjectScreen = () => {
    return (<div>
        <h2>ProjectScreen</h2>
        <Link to={'kanban'}>看板</Link>
        <Link to={'epic'}>任务组</Link>
        <Routes>
            <Route path={'/kanban'} element={<KanbanScreen/>}></Route>
            <Route path={'/epic'} element={<EpicScreen/>}></Route>
            <Navigate to={window.location.pathname + '/kanban'}/>
        </Routes>
    </div>)
}