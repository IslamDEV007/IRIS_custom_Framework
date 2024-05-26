import HomeComponent from './components/home.js';
import AboutComponent from './components/about.js';
import DataBindingComponent from './components/databinding.js';
import ButtonComponent from './components/button.js';
import NotFoundComponent from './components/notfound.js';
import Framework from './js/framework.js';

// Initialize the framework
const app = new Framework();

//create a resusable button instance
const myButton = new ButtonComponent("Click me", ()=>{
  alert("Button clicked!");
})

//define a route that uses button component
app.route('/button-demo', class {
  render() {
      const container = document.createElement('div');
      container.innerHTML = `
          <h1>Button Demo</h1>
      `;
      container.appendChild(myButton.render());
      return container;
  }
});

//another route that uses button component
app.route('/another-demo', class {
  render() {
      const container = document.createElement('div');
      container.innerHTML = `
          <h1>Another Demo</h1>
      `;
      container.appendChild(myButton.render());
      return container
  }
});

// Define SPA routes
app.route('/', HomeComponent);
app.route('/about', AboutComponent);
app.route('/databinding', DataBindingComponent);

// Start the application
app.start();
