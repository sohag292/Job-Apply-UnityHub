
---

# install-package

    Markup :  # install-package #

  
    1.  React router
    2.  Recharts
    3.  Hero Icon
  


## Dynamically menu

    Markup :  # Menu #

    use of

    array of obj to map  

    
```javascript

let menuList = [
  { title: "Home", link: "/", id: 1 ,img:'https://i.ibb.co/d7nGQD7/home.png' },
  { title: "Statistics", link: "/statics", id: 2 ,img:'https://i.ibb.co/tY7v4Cy/bar-chart.png'},
  { title: "Applied Jobs", link: "/applied", id: 3, img: 'https://i.ibb.co/cXw7yWn/web.png' },
  { title: "Blogs", link: "/blogs", id: 4 ,img:'https://i.ibb.co/TPqXXqL/blogging.png'},
  // { title: "Courses", link: "/courses", id: 4 },
  // { title: "Blogs", link: "/blogs", id: 5 }
];
export const NavContext = createContext({
  menuList: [],
});

```



### Filter

    filter  :  one state condition for that
    
    
```javascript

  // filter part
  const dataRemote = (data) => {
    if(data = "Remote") {
      const remote = saveCart.filter(data => data.remoteOrOnsite === 'Remote')
      setCarts(remote)
    } 
  };
  const dataOnsite = (data) => {
    if (data == "Onsite") {
      const onsite = saveCart.filter(data => data.remoteOrOnsite === 'Onsite')
      setCarts(onsite)
    }
    else if (data == "all") {
      
      setCarts(saveCart)
     }
  };

```


#### See All btn 

    See All :  first slice data after click 



```javascript

 const [jobsData, setJobsData] = useState([]);
  const cardData = useLoaderData();
  useEffect(() => {
    if (cardData) {
      setJobsData(cardData.slice(0, 4));
    }
  }, []);
  const handleSetData = (id) => {
    addToDb(id);
  };

  const allData = (check) => {
    if (check) {
      setJobsData(cardData);
    }
  }
  allData(false);

```

# Route declaration 

    Route :  first slice data after click 



```javascript

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async()=>fetch('/joblist.json')
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: async()=>fetch('/joblist.json')
      },
      {
        path: "/applied",
        element: <Applied />,
        loader: cartProductLoader
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/statics",
        element: <Statics />,
      },
      {
        path: '*',
        element:<ErrorPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```


This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
