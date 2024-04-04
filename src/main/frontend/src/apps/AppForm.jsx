import axios from "axios";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({ uid: '', uname: '' });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('uid', form.uid);
    params.append('uname', form.uname);
    console.log(params);
    axios
      .post('/rp/react/form', params)
      .then(res => { console.log(res); });
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="uid">ID: </label>
        <input type="text" id="uid" name='uid'
          value={form.uid} onChange={handleChange} />
        <br />
        <label htmlFor="uname">이름: </label>
        <input type="text" id="uname" name='uname'
          value={form.uname} onChange={handleChange} />
        <br />
        <button>확인</button>
      </form>
    </div>
  );
}

// 작동 당시 App.jsx 설정
// import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';

// export default function App() {
//   const [data, setData] = useState('');
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     axios.get('/rp/react/data')
//       .then(res => {
//         console.log(res);
//         setData(res.data);
//       }) //promise 구조 network program을 실행하기 위함
//       .catch(err => { console.log(err); })
//   }, []);

//   useEffect (() => {
//     axios.get('/rp/react/json')
//     .then(res => setUser(res.data))
//     .catch(err => console.log(err));
// }, [])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h3>
//           받아온 값: {data ? data : '받아오지 못했어요.'}
//         </h3>
//         <h3>
//           사용자 정보 : uid={user.uid}, uname={user.uname}
//         </h3>
//       </header>
//     </div>
//   );
// }

