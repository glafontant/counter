## Thought Process

This problem was relatively straight forward. Build a web interface that will fetch data from an API and display said data. 
There are different ways to tackle this problem. I opted to build a single page application based on the requirements for this assignment and went with React.js since this is the SPA I'm most familiar with. It has been a while since I've worked with
React and needed to remind myself via the documentation how things work.

## Lifecycles vs WebHooks

Things have changed in the React ecosystem since I last did front-end project. WebHooks introduced in one of the latest versions of React is an interesting idea to manage nested components within a React application. https://reactjs.org/docs/hooks-intro.html
However, time is not on my side, additionally, it is a very simple app therefore I opted to use the lifecyle components. https://reactjs.org/docs/state-and-lifecycle.html In this use case, the state of the component is the amount of views to the application. 


## Fetching Data

Before jumping in, I needed to remind myself how to fetch data from React. I have built React applications for both work and as hobby apps. Unfortunately for me those applications were a bit complicated and needed something simplier. After a quick search online, I came across a consise tutorial and took a look of the source code. I was reminded of the callback `componentDidMount` which will allow me to make an API request and update the dom before the component is rendered. Since promises are a important abstraction is Ecma6 I was able to use functions as `fetch`, `async` and `await` to retrieve and parse the data. We've come a long way since ajax calls.

After messing about with a simple example, I proceeded to use the countapi js library. It's documentation was very concise and I saw how simple it was to use. I used `componentDidMount` to make a client request against the api to inspect the payload. Once I was satisfied with the data in question. Now I had to build the actual feature.

## Feature Work

State and lifecylce hooks are important abstractions for React applications. The state in my application was the amount of views for the page. I knew I needed to make an API call each time a user clicked on the button, in addition, I needed to update the state of the component with the payload.

It dawned on me that I'll need an event listener for each click that updates the state of the component. Again React provides very simple patterns to build such a feature. I re-read the documentation listed above and looked through some old source code. I was reminded that I needed to define a callback function - event handler - that would make the API request. Additionall, I needed to be able to update the component's state. The one gotcha that I forgot was that the component - Counter - needed to bind the newly-defined function to the current instance of the component in its constructor. This is why I have a constructor in Counter that I didn't have in my previous example.

Once this work was completed I added some basic styling so it wouldn't look too ugly.


## Future Work

One thing I'd like to do is add a couple more features. 

1) One feature would be to add a decrement button and a reset button. The countapi allows a client request to decrement the amount of views as well as reset them. 

2) It would be nice and perhaps I have to investigate other lifecycle hooks to display not the intial count but the last count. Right now the UI initial state is 0 and only updates when the user clicks on it. A nice to have is to give me the current couont then update the state. I'm sure there are idiomatic ways to do so.

3) Perhaps a feature where the page displays the current count over the course of a day, 7 day period, etc. Perhaps a user is interested in more granularity with the amount of views.

4) Finally, how to ensure unique views. Perhaps we only want to count the amount of unique viewers rather than total impresssions. Perhaps this may be of value to the end user.

5) Error handling and monitoring. Given the use case there is not much error handling but this is something we would want to consider. For instance if the API times out or is unavailable. Also we would want to log whatever errors occur for debugging purposes.


## Run

cd into counter
yarn start