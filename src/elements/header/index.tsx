import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store';
import { setAuth } from '../../redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { email, isAuth } = useSelector((state: RootState) => state.auth)
  const logout = () => {
    dispatch(setAuth({
      email: "",
      password: "",
      isAuth: false,
    }))
  }
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to='/' className='header__logo-link header__logo-link--active'>
              <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              { isAuth ? 
                  <>
                    <li className='header__nav-item user'>
                      <div className='header__nav-profile'>
                        <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                        <span className='header__user-name user__name'>{email}</span>
                      </div>
                    </li>
                    <li className='header__nav-item'>
                      <Link className='header__nav-link' to='/'>
                        <span onClick={() => logout()} className='header__signout'>Sign out</span>
                      </Link>
                    </li> 
                  </>
                :
                <li className='header__nav-item'>
                  <Link to="/login">
                    <span className='header__signout'>Sign in</span>
                  </Link>
                </li> 
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header