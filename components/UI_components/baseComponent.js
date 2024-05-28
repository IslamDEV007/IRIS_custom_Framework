class baseComponent{
  constructor(props = {}){
    this.props = props
  }

  render(){
    throw new Error("Render method should be implemented by the component")
  }

  mount(container){
    const container = this.render();
    container.innerHTML = '';
    container.appendChild(content);
    this.bindEvents(content)
  }

  bindEvents(element){
    //binding logic
  }
}

export default baseComponent;