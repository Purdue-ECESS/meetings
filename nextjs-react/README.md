# NextjS and React Tutorial
Watch this to see the full power of React: https://youtu.be/Tn6-PIqc4UM

## What is React?
React is a framework made from Facebook where you can create applications
like websites. React uses a special type of javascript, where it 
transforms your code from javascript into more javascript? Why would
you want to do something like this? Well in normal vanilia Javascript, 
there is a lot that goes on. As a result, Facebook tries to simplify the
process, in addition, add optimization infront of your optimized code 
to make your website perform better.

## What is Single Side App?
Let's say you are trying to access https://engineering.purdue.edu/ee369/index.html vs https://engineering.purdue.edu/ee369/lecture-slides/fall21/boolean-logic.html. How that works is that it just sends different html files depending on what link you press.

For single side apps (like React), it gives the same html file no matter 
what link you press. An example is https://www.instagram.com, or even
https://www.purdue-ecess.org. They give the same html file no matter
if you go to https://www.purdue-ecess.org/ecea or 
https://www.purdue-ecess.org/calendar. So you might be wondering, if 
html gives out the break down on what goes onto a website, why does
the ecea and calendar page look different. One answer, the javascript.

In javascript, you can tell it to remove elements and change elements onto 
a website. React does that automatically for you.

## Now I know what React is, tell me about its Major Features!!
Alright, hang on, let the fun begin.

### UseState 
A state is a way to set and get your values. This is important
because it tells React that one the value count changes, 
change the items inside the view.

```tsx
function App() {
    const [count, setCount] = useState(0); // count = 0;
    return (
        <>
            <div onClick={() => {
                setCount(count + 1); // count = count + 1;
            }}>
                {count} 
            </div>
        </>
    )
}
```

### UseEffect
You would use something like this if you were doing something
like an API call. For example: 
```tsx
export const fetchTasks = () => {
  return new Promise(resolve => {
    fetch(
      "http://localhost:8080/todo",
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then(res => res.json())
    .then(res => resolve(res));
  })
};

function App({example}) {
    const [tast, setTasks] = useState([]);
    React.useEffect(() => {
        fetchTasks().then(res => {
            console.log("doing api call");
            setTasks(res)
        });
    },[example]);
    return  (
        <></>
    )
}
```
The [example] tells the effect to only run this code when 
certain values get updated. So if example ever changes it 
value, it will run the fetchTasks() command again.

There are other layout types like useLayoutEffect etc.., which 
you can check out here https://reactjs.org/docs/hooks-reference.html.

### Components
A component is like a function call. It simplifies the 
complexity of what goes on into one function. Here is an example
```tsx
// component.tsx
export const fetchTasks = () => {
  return new Promise(resolve => {
    fetch(
      "http://localhost:8080/todo",
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then(res => res.json())
    .then(res => resolve(res));
  })
};

export function Component({name, value, children}) {
    const [task, setTasks] = useState(0);
    React.useEffect(() => {
        fetchTasks().then(res => {
            console.log("doing api call");
            setTasks(res)
        });
    },[example]);
    return (
        <>
            <p>{name}</p>
            <p>{value}</p>
            {
                task.map((item) => {
                    <p key={item}>{item}</p>
                });
            }
            {children}
        </>
    )
}
```

```tsx
// App.tsx
import {Component} from "./component"
function App() {
    return (
        <>
            <Component
                name={"Example Name"}
                value={"Example Value"}
            >
                We call this area "children"
            </Component>
            <Component
                name={"Another Example Name"}
                value={"Another Example Value"}
            >
                We call this area "children"
            </Component>
        </>
    )
}
```

## Now Let's talk about React and Next.js
https://nextjs.org/

Next.JS is used very frequently because it is cheap, free, and
have Server Side Rending (it doesn't just only send 1 index.html). 
with all the javascript. It also sends stuff like react components, etc.. via a server.

You might be wondering why we use create-react-scripts. You
can thank an older web dev (not really) for switching the 
framework from next.js to create-react-scripts. Also, sometimes the server side rendering made this more complicated than we wanted it to when using third party libraries, so we 
avoided it for now (might convert back).

If you want to see a really good website made with next.js,
checkout WECE from UIUC. It looks really good!! 
https://wece.ece.illinois.edu/

So let's create one (because next.js is awesome), 
and then deploy it. Here is what I did
https://nextjs.org/docs/getting-started

```bash
$ npx create-next-app@latest --typescript
```

Inside nextjs-example, you can type this
```
$ cd nextjs-example
$ npm install
$ npm run dev
```

To encapulate everything we learned, I'm going to use
https://api.reddit.com, which will display 24 posts from 
reddit. Don't worry, it will be fun.

One of the main difference between create-react-scripts and
next.js is the router setup.

```tsx
<Router>
    <NavBar user={user} />
    <Switch>
        <Route exact path={"/"} component={Index}/>
        <Route path={"/hello"} component={Hello}/>
    </Switch>
</Router>
```

In next.js, all I have to do is create a file called
pages/hello.tsx, and I'm done.

Inside nextjs-example/pages/index.tsx contains everything 
we talked about in this lesson. Hopefully, it has been helpful.