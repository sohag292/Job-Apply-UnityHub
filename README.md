
---
# install-package

    Markup :  # install-package #

  
    1.  react-router-dom
    2.  Recharts
    3.  Hero Icon
    4.  react-bootstrap
  

## Router nav 

    Markup :  # Menu #

    use of

    React router dom 

    
```javascript

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/featuresJobs.json')
      },
      {
        path: "job/:jobId",
        element: <FeaturesDetails />,
        loader: () => fetch(`/featuresJobs.json`)
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs />,
        loader: () => fetch(`/featuresJobs.json`)
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);


```



### Filter

    filter  : job all and onsite process using filter
    
    
```javascript

  // filter part
  const [filter, setFilter] = useState('All');
  const filteredCart = filter === 'All' ? cart : cart.filter(c => c.work_area === filter);

      Another way 

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


Project Link: : [https://github.io/create-react-app/](https://glowing-chimera-db0e43.netlify.app/)
