import React,{useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onconversion_ratesChange,
    amountDisabled= false,
    conversion_ratesDisabled = false,
    conversion_ratesOptions = [],
    selectconversion_rates = "usd",

    
    className = "",
}) { 
   
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisabled}
                    value={amount}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))} }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">conversion_rates Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled = {conversion_ratesDisabled}
                    value={selectconversion_rates}
                    onChange={(e)=>{onconversion_ratesChange && onconversion_ratesChange(e.target.value)} }
                >
                    
                        {conversion_ratesOptions.map((conversion_rates)=>(
                            <option key={conversion_rates} value={conversion_rates}>
                                {conversion_rates}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;