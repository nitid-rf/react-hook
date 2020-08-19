import React from 'react'
import ThemeContext from "./ThemeContext";

// USECONTEXT ผ่าน JSX

// export default function UseContextDemoChild1() {
 
//     return (
//         <div>
//             <ThemeContext.Consumer>
//                 {color => (
//                     <h1 style={{color:color}}>{color}</h1>
//                 )}
//             </ThemeContext.Consumer>
//         </div>
//     )
// }


// USECONTEXT ผ่าน function

export default function UseContextDemoChild1() {
 
    const cc = React.useContext(ThemeContext)

    return (
        <div>
            <ThemeContext.Consumer>
                {color => (
                    <h1 style={{color:color}}>{color}</h1>
                )}
            </ThemeContext.Consumer>

            Load from useContext function : {cc}
        </div>

    )
}
