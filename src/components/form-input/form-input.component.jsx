import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps}/>
            {label && (
                <label 
                    className={`${otherProps.value.length ? 'shrink' : ''} 
                    form-input-label`}
                    >
                    {label}
                </label>
                )  
            }
        </div>
    )
}

export default FormInput;
/*
    1. We copy the input from sign-up-form component and paste it in <FormInput/> to make a custom input component.
    2. In the sign-up-form, we import the <FormInput /> and the props(name, value, onChange....) are passed for each input field.
    3. 'label' prop is passed individually.
    4. If label is true && the user selects the input field, the className 'shrink' is active which enables the shrinking animation on the label
    5. In the Scss, form-input is the parent class of form-input-label so in order for shrink to work, the input has to be above the label in our component
*/