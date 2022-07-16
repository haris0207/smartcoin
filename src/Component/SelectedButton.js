import React from 'react'



const SelectedButton = ({children, selected, onClick}) => {
    const button={
        border:'1px solid rgb(0,122,205)',
        borderRadius:5,
        padding:10,
        paddinngLeft:20,
        paddingRight:20,
        fontFamily:'Montserrat',
        cursor:'pointer',
        backgroundColor:selected?"rgb(0,122,205)":"",
        color:selected?"white":"",
        fontWeight:selected?700:500,
       
        width:"15%",
    }
  return (
    <span
    onClick={onClick}
    style={button}
    className="sbtn"
    >{children}</span>
  )
}

export default SelectedButton