
class Framework{
  constructor(){
    this.routes = {};
  }

  route(path,component){
    this.routes[path] = component;
  }

  start(){
    const navigateTo = () => {
      const path = window.location.hash.slice(1);
      const Component = this.routes[path] || NotFoundComponent;// Handle 404
      const appContainer = document.querySelector('#app');
      const instance = new Component();
      const content = instance.render();

      appContainer.innerHTML = "";//Clear the container
      if (typeof content === 'string') {
        appContainer.innerHTML = content;
    } else {
        appContainer.appendChild(content);
    }
    if (typeof instance.bind === 'function') {
        instance.bind();
    }
    };

    const navigate = (path) =>{
      window.location.hash = path;
      navigateTo(); 
    };

    window.addEventListener('hashchange', navigateTo);
    navigateTo();

    return{
      navigate,
    }
  }

}

export default Framework;