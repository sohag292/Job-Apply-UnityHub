# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`# Job Factory<a name="TOP"></a>

> React 
>
> > project 


---

# install-package

    Markup :  # install-package #

    1.  Tailwindcss
    2.  Daisy UI
    3.  React router
    4.  Recharts
    5.  Hero Icon
    6.  toast


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


Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
