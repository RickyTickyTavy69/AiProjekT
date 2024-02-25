import React from "react";

type State = { hasError: boolean };

class ErrorBoundary extends React.Component<{
    children: React.ReactNode,
    fallback: React.ReactNode,
}, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;