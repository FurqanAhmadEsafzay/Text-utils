import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
       { props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <span><strong>{capitalize(props.alert.typ)}!</strong> { props.alert.msg}</span>
        </div>}
        </div>
    )
}
