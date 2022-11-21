class Context {
  constructor(value) {
    this.value = value;
  }

  // provider
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  // consumer
  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const context = new Context(value);

  console.log('Context: ', context);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer
  };
}

export default createContext;
