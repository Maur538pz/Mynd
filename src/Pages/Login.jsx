import './stylePage.css'
export const Login = ()=>{
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("hola")
    }
    return(
        <div className='LoginPage'>
            <h1>My Mynd</h1>
            <form onSubmit={handleSubmit} className='LoginForm'>
                <label className='LoginForm_label'>
                    <span>User Name</span>
                    <input type="text" name="username"/>
                </label>
                
                <label className='LoginForm_label'>
                    <span>Password</span>
                    <input type="text" name="password"/>
                </label>
                <button>Ingresar</button>
            </form>
        </div>
    )
}