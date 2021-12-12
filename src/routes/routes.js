import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    //element: //<Register />,
  },
  {
    path: "/login",
    //element: //<Login />,
  },
  {
    path: "/profile",
    //element: //<Profile />,
  },
  {
    path: "/profile/update-profile",
    //element: //<UpdateProfile />,
  },
  {
    path: "/events",
    //element: //<Events />,
  },
  {
    path: "/:eventsId",
    //element: //<DetailEvents />,
  },
  {
    path: "/create-event",
    //element: //<CreateEvent />,
  },
  {
    path: "/:eventsId/update-event",
    //element: //<UpdateEvent />,
  },
];

export default routes;
