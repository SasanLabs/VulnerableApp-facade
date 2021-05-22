import React from 'react';

interface MyComponentProps {
    name: String;
}

interface MyComponentState {
    error: string | undefined;
    isLoaded: boolean;
    items: string;
}

export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
    constructor(props: MyComponentProps) {
      super(props);
      this.state = {
        error: undefined,
        isLoaded: false,
        items: ""
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:9090")
        .then(res => res.text())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error: error.message
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      const script = document.createElement("script");
      script.src = "http://localhost:9090/vulnerableApp.js";
      script.async = true;

    document.body.appendChild(script);
      if (error) {
        return <div>Error: {error}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
           <div dangerouslySetInnerHTML={{__html: items}} />
          </ul>
        );
      }
    }
  }
  