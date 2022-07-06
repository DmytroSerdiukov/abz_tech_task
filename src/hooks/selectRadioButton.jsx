import { useState } from 'react'

const useRadio = () => {

    const [selectedValue, setValue] = useState() 

    const onValueChange = (event) => {
        setValue(event.target.value)
    }

    return {selectedValue, onValueChange}
}

export default useRadio