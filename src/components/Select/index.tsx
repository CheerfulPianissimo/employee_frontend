import './select.css'

export const Select = ({ options,id,label}:{options:SelectOption[],id:string,label:string}) => {
    return <div className="label-input-group">
        <label>{label}</label>
        <select id={id}>
            { options.map((option)=> <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
    </div>
}

export type SelectOption={
    value:string,
    label:string
}