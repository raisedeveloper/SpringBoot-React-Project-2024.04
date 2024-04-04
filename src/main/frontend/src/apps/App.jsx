import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default function App() {

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>아이디:</label>
        <input type='text' id='id' name='id' value={form.id} onChange={handleChange} /><br />
        <label htmlFor='name'>이름:</label>
        <input type='text' id='name' name='name' value={form.name} onChange={handleChange} /><br />
        <label htmlFor='email'>이메일:</label>
        <input type='text' id='email' name='email' value={form.email} onChange={handleChange} /><br />
        <button>추가/수정</button>
      </form>
      <input></input>
    </div>
  );
}