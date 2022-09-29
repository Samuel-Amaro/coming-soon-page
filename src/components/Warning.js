
export default function Warning(props) {
    return (
        <label 
            htmlFor="email" 
            role="alert" 
            aria-atomic="true" aria-live="assertive"
            className="warning">
            {props.warning}
        </label>
    );
}