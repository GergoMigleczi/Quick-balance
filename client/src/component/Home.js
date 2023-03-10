import React from 'react'
import { useSelector} from 'react-redux'
import { selectUser,selectTransactions} from '../app/userSlice'
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import AddTransaction from './AddTransaction';
import ViewTransactions from './ViewTransactions';
import './CSS/Home.css';

function Home() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user.userId === undefined || user.loggedIn === false || user.password === undefined){
            navigate('/');
        }
    })

  return (
    <div id='home'>
        <h1>Home</h1>
        <div className='flex home-container center-v wrap'>
          <div className='flex center-v wrap'>
            <Link to='/transactions'><button className='button'>View Transactions</button></Link>
            <Link to='/add-transaction'><button className='button'>Add Transactions</button></Link>
          </div>
          <div className='flex center-v wrap'>
            <Link to='/accounts'><button className='button'>View Accounts</button></Link>
            <Link to='/add-account'><button className='button'>Add Account</button></Link>

          </div>
        </div>
      </div>
  )
}

export default Home