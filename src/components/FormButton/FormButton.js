import "./FormButton.scss";

function FormButton({ value, className, type = 'button' }){
    return(
        <button className={className} type={type}>{value}</button>
    );
};

export default FormButton