("use strict");

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, token: "" };
  }

  componentDidMount() {
    let axiosPostPromise = axios
      .post("https://snackify7.herokuapp.com/auth/login/organization", {
        username: "username",
        password: "password"
      })
      .then(function(response) {
        console.log(response);
        return response.data.token;
      })
      .catch(function(error) {
        console.log(error);
      });

    Promise.all([axiosPostPromise]).then(token => {
      console.log(token);
      this.setState({ token });
      console.log(this.state);
    });

    /* this.setState(token);
    console.log(this.state); */
  }

  likeClick() {
    this.setState(prevState => {
      alert("thank you fot the like");
      return { liked: !prevState.liked };
    });
  }

  render() {
    return e("span", { onClick: () => this.likeClick() }, " ❤️ ");
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
