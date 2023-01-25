import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [state, setState] = useState();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8080/").then(
      (res) => {
        console.log(res);
        setState(res.data.test[0].name);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const sum = () => {
    let str = `http://localhost:8080/add?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
        console.log(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  const mul = () => {
    let str = `http://localhost:8080/mul?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
        console.log(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  const div = () => {
    let str = `http://localhost:8080/div?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
        console.log(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  const min = () => {
    let str = `http://localhost:8080/min?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
        console.log(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  const clear = () => {
    setResult("");
    setA(0);
    setB(0);
  };

  return (
    <div>
      <input type={"text"} value={a} onChange={(e) => setA(e.target.value)} />
      <input type={"text"} value={b} onChange={(e) => setB(e.target.value)} />
      <input type={"text"} value={result} />
      <button onClick={sum} className=" btn border ">
        +
      </button>
      <button onClick={mul} className=" btn border">
        *
      </button>
      <button onClick={div} className=" btn border">
        /
      </button>
      <button onClick={min} className=" btn border">
        -
      </button>
      <button onClick={clear} className=" btn border">
        clear
      </button>
      <h1>{state}</h1>
    </div>
  );
}

export default App;
