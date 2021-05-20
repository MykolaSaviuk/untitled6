import {createRef} from "react";

export default function NonControled () {
    function submit(e) {
        e.preventDefault();
        console.log(login.current.value);
        console.log(password.current.value);

    }

    let login =  createRef()
    let password =  createRef()


    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'login'} placeholder={'login'} ref={login}/>
                <input type="text" name={'password'} placeholder={'password'} ref={password}/>
              <button>send</button>
            </form>

        </div>
    )
}