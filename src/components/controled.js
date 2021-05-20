import {useState} from "react";

export default function Controled () {
    let [login,setLogin] = useState('default login');

function onValueChange (e) {
  let value = e.target.values
    setLogin(value);
}
function submit(e) {
    e.preventDefault();
}
    return (
        <div>
            <form onSubmit={submit}>

                <input type="text" name={'login'} value={login} onChange={onValueChange} />
                <button>send1</button>

            </form>


        </div>
    )
}