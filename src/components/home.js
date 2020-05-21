import React from "react";
import firebase from "../config/firebase";
import { withRouter } from "react-router";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });

      if (user) {
        this.props.history.push("/");
      }
    });
  }

  onLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  onLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div>
        {this.state.user ? (
          <button onClick={this.onLogout}>Logout</button>
        ) : (
          <button onClick={this.onLogin}>Google Login</button>
        )}
      </div>
    );
  }
}

export default withRouter(Home);
