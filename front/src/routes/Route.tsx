// import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Home from "../pages/client/Home";
import News from "../pages/client/News";
import Advertisements from "../pages/client/Advertisements";
import NewsDetail from "../pages/client/NewsDetail";
import AdvertisementDetail from "../pages/client/AdvertisementDetail";

// import AdminLogin from "../pages/admin/AdminLogin";
// import Dashboard from "../pages/admin/Dashboard";
// import ProductManagement from "../pages/admin/ProductManagement";

import ClientLayout from "../layout/ClientLayout";
import Welcome from "../pages/client/Welcome";
import CenterMission from "../pages/client/CenterMission";
import SceintificAdvisory from "../pages/client/SceintificAdvisory";
import Colleagues from "../pages/client/Colleagues";
import ColleaguesDetail from "../pages/client/ColleaguesDetail";
import Visitors from "../pages/client/Visitors";
import Appeal from "../pages/client/Appeal";
import Media_KİT from "../pages/client/Media_KİT";
import ResearchGroup from "../pages/client/ResearchGroup";
import ResearchPrograms from "../pages/client/ResearchPrograms";
import AllEvents from "../pages/client/AllEvents";
import Seminars from "../pages/client/Seminars";
import Conferences from "../pages/client/Conferences";
import SeminarDetail from "../pages/client/SeminarDetail";
import SummerSchool from "../pages/client/SummerSchool";
import Courses from "../pages/client/Courses";
import ResearchResults from "../pages/client/ResearchResults";
import AppealToRector from "../pages/client/AppealToRector";
import Connection from "../pages/client/Connection";
// import AdminLayout from "../layout/AdminLayout";
// import AuthLayout from "../layout/AuthLayout";


// Protected route for admin
// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const admin = localStorage.getItem("admin");
//   if (!admin) {
//     return <Navigate to="/admin/login" replace />;
//   }
//   return children;
// };

const ROUTES: RouteObject[] = [
  // client layout
  {
    element: <ClientLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "xeberler",
        element: <News />,
      },
      {
        path: "xeberler/:id",
        element: <NewsDetail />,
      },
      {
        path: "elanlar",
        element: <Advertisements />,
      },
      {
        path: "elanlar/:id",
        element: <AdvertisementDetail />,
      },
      {
        path: "haqqimizda/",
        children: [
          {
            path: "xos-gelmisiniz",
            element: <Welcome />,
          },
          {
            path: "merkezin-missiyasi",
            element: <CenterMission />,
          },
          {
            path: "elmi-meslehet-surasi",
            element: <SceintificAdvisory />,
          },
          {
            path: "emekdaslar",
            element: <Colleagues />,
          },
          {
            path: "emekdaslar/:id",
            element: <ColleaguesDetail />,
          },
          {
            path: "ziyaretciler",
            element: <Visitors />,
          },
          {
            path: "muraciet",
            element: <Appeal />,
          },
          {
            path: "media-kit",
            element: <Media_KİT />,
          }
        ]
      },
      {
        path: "elmi-fealiyyet/",
        children: [
          {
            path: "tedqiqat-qrupu",
            element: <ResearchGroup />,
          },
          {
            path: "tedqiqat-proqramlari",
            element: <ResearchPrograms />,
          },
          {
            path: "tedbirler",
            element: <AllEvents />,
          },
          {
            path: "seminarlar",
            element: <Seminars />,
          },
          {
            path: "seminarlar/:id",
            element: <SeminarDetail />,
          },
          {
            path: "konfranslar",
            element: <Conferences />,
          },
          {
            path: "yay-mektebi",
            element: <SummerSchool />,
          },
          {
            path: "kurslar",
            element: <Courses />,
          },
          {
            path: "tedqiqat-neticeleri",
            element: <ResearchResults />,
          }
        ]
      },
      {
        path: "rektora-muraciet",
        element: <AppealToRector />
      },
      {
        path: "elaqe",
        element: <Connection />
      }
    ],
  },
  // admin layout
  // {
  //   element: <AdminLayout />,
  //   path: "/admin/",
  //   children: [
  //     {
  //       index: true,
  //       element: (
  //         <ProtectedRoute>
  //           <Dashboard />
  //         </ProtectedRoute>
  //       ),
  //     },
  //     {
  //       path: "elanlar",
  //       element: (
  //         <ProtectedRoute>
  //           <ProductManagement />
  //         </ProtectedRoute>
  //       ),
  //     },
  //      {
  //       path: "xeberler",
  //       element: (
  //         <ProtectedRoute>
  //           <ProductManagement />
  //         </ProtectedRoute>
  //       ),
  //     },
  //   ],
  // },
  // admin login page
  // {
  //   element: <AuthLayout />,
  //   path: "/admin/login",
  //   children: [
  //     {
  //       index: true,
  //       element: <AdminLogin />,
  //     },
  //   ],
  // },
];

export default ROUTES;
