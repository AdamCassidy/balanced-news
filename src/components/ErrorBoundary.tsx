import React, { Component } from "react";

interface ErrorBoundaryProps {
  FallbackComponent: Function;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.error && prevState.error === this.state.error)
      this.setState({ error: null });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <this.props.FallbackComponent {...error} />;
    }
    return this.props.children;
  }
}
