import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './component/header/header';
import Signin_Signup from './view/auth/sigin_signup';
import HomePage from './view/homepage/homepage';
import ShopPage from './view/shop/shoppage';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/action/user/user.action';

function App(props) {

  const { userThis } = props;

  // console.log('user this', userThis)


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Header></Header>

      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route exact path='/signin' 
          render={() => {
            console.log('\n\nuser this inside redirect', userThis)

            return (
              userThis ? (<Redirect to='/'></Redirect>) :
                (<Signin_Signup />)
              // <div>defak</div>
            )
          }}></Route>
      </Switch>

    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  userThis: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser_This: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
