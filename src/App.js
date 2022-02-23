import { useEffect } from 'react';
import './App.css';

export default function Verify() {

    const numberChange = (e) => {
        let id = document.activeElement.id;

        if(e.target.value === 'CALLED_FROM_EVENT_LISTENER') { 
            // Select the previous input
            if(document.getElementById(Number.parseInt(id) - 1) != null ) {
                document.getElementById(Number.parseInt(id) - 1).focus();
            }

            return;
        } else {
            // If the user chooses to paste their code instead of typing it
            if(e.target.value.length === 6) {
                let code = e.target.value.split('');
    
                for(let i = 0; i < code.length; i++) {
                    document.getElementById(i + 1).value = code[i];
                }

                document.getElementById(6).focus();

                return;
            }
        }

        // Only allow 1 character to be entered
        if(e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
        }

        // Select the next input only if the user has entered a character
        if(e.target.value !== '') {
            if(document.getElementById(Number.parseInt(id) + 1) != null ) {
                document.getElementById(Number.parseInt(id) + 1).focus();
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            // numberChange only accepts an event object
            const dummyStruct = {
                target: {
                    value: 'CALLED_FROM_EVENT_LISTENER'
                }
            }

            if(e.code === 'Backspace') {
                numberChange(dummyStruct);
            }
        });
    }, []);


    return (
        <>
            <div className="wrapper">
                <div className="title">
                    Verify Your Email
                </div>
                <div className="subtitle">
                    Please enter the verification code sent to your email.
                </div>

                <div className="conainer">
                    <input id="1" type="text" className="code" onChange={numberChange} />
                    <input id="2" type="text" className="code" onChange={numberChange} />
                    <input id="3" type="text" className="code" onChange={numberChange} />
                    <input id="4" type="text" className="code" onChange={numberChange} />
                    <input id="5" type="text" className="code" onChange={numberChange} />
                    <input id="6" type="text" className="code" onChange={numberChange} />
                </div>

                <div className="button">
                    Verify
                </div>
            </div>
        </>
    )
}