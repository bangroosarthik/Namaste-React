import {useRouteError} from "react-router-dom";

const ErrorPage=()=>{
    const err=useRouteError();
    const {status,statusText,data}=err;
    console.log(err);
    return (
        <div>
            <h1>OOps an Error Occured</h1>
            <h2>{status+ " "+ statusText}</h2>
            <h3>{data}</h3>
        </div>
    )
}

export default ErrorPage;