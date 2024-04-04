import axios from "axios";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ uid: '', uname: '' });
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('uid', form.uid);
    formData.append('uname', form.uname);
    formData.append('file', file);
    console.log(formData);
    console.log(formData);
    const axiosConfig = { headers: { "Content-Type": "multipart/form-data", } }
    axios
      .post('/rp/react/multi', formData, axiosConfig)
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
        <label htmlFor="file">첨부 파일: </label>
        <input type="file" id="file" name='file' onChange={handleFileChange} />
        <br />
        <button>확인</button>
      </form>
    </div>
  );
}