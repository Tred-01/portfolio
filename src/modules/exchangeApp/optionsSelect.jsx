export const selectOptions = [
    {value: 'GBP', label: 'GBP', color: '#000000'},
    {value: 'EUR', label: 'EUR', color: '#000000'},
    {value: 'USD', label: 'USD', color: '#000000'},
    {value: 'CAD', label: 'CAD', color: '#000000'},
    {value: 'AUD', label: 'AUD', color: '#000000'},
    {value: 'UAH', label: 'UAH', color: '#000000'},
]
export const colorsOptions = {
    control: styles => ({...styles}),
    option: (styles, {data}) => {
        return {...styles, color: data.color}
    }
}