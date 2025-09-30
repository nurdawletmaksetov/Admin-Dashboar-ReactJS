import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

import PageLoader from "../dashboard/components/loader/PageLoader";
import NotFound from "../dashboard/NotFound/NotFound";

const Login = lazy(() => import("../auth/Login"));
const Register = lazy(() => import("../auth/Register"));

const AdminLayout = lazy(() => import("../dashboard/AdminLayout"));

const User = lazy(() => import("../dashboard/pages/User"));
const School = lazy(() => import("../dashboard/pages/School"));
const Position = lazy(() => import("../dashboard/pages/Position"));
const Album = lazy(() => import("../dashboard/pages/Album"));
const Employee = lazy(() => import("../dashboard/pages/Employee"));
const AdminNews = lazy(() => import("../dashboard/pages/AdminNews"));
const Document = lazy(() => import("../dashboard/pages/Document"));
const Value = lazy(() => import("../dashboard/pages/Value"));
const AdminRules = lazy(() => import("../dashboard/pages/Rules"));
const SchoolHours = lazy(() => import("../dashboard/pages/SchoolHours"));
const Target = lazy(() => import("../dashboard/pages/Target"));
const History = lazy(() => import("../dashboard/pages/History"));
const Information = lazy(() => import("../dashboard/pages/Information"));
const Vacancy = lazy(() => import("../dashboard/pages/Vacancy"));
const AdminSchedule = lazy(() => import("../dashboard/pages/AdminSchedule"));
const FAQ = lazy(() => import("../dashboard/pages/FAQ"));
const Club = lazy(() => import("../dashboard/pages/Club"));

function RequireAuth() {
    const token = localStorage.getItem("access_token");
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

export const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "login",
        element: (
            <Suspense fallback={<PageLoader />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: "register",
        element: (
            <Suspense fallback={<PageLoader />}>
                <Register />
            </Suspense>
        ),
    },
    {
        path: "/",
        element: <RequireAuth />,
        children: [
            {
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <AdminLayout />
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to="school" replace />,
                    },
                    { path: "school", element: <School /> },
                    { path: "position", element: <Position /> },
                    { path: "album", element: <Album /> },
                    { path: "user", element: <User /> },
                    { path: "employee", element: <Employee /> },
                    { path: "news", element: <AdminNews /> },
                    { path: "document", element: <Document /> },
                    { path: "rules", element: <AdminRules /> },
                    { path: "value", element: <Value /> },
                    { path: "club", element: <Club /> },
                    { path: "faq", element: <FAQ /> },
                    { path: "hours", element: <SchoolHours /> },
                    { path: "target", element: <Target /> },
                    { path: "history", element: <History /> },
                    { path: "information", element: <Information /> },
                    { path: "vacancy", element: <Vacancy /> },
                    { path: "admin-schedule", element: <AdminSchedule /> },
                ],
            },
        ],
    },
]);
