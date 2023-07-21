import { FunctionComponent } from "react"

type Form = {
    label: string,
    type: string,
    value: string,
    id: string,
    name: string,
    placeholder: string,
    changeHandler(): void
}

const Input: FunctionComponent<Form> = ({ label, type, value, id, name, placeholder, changeHandler }) => {
    return (
        <>
            <div className="">
                <label htmlFor="" className="inline-block w-32">{label}</label>
                <input type={type} name={name} value={value} placeholder={placeholder} onChange={changeHandler} className="text-slate-900 p-2" />
            </div>
        </>
    )
}
export default Input;
