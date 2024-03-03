
export default function About(props) {
    let myStyle = {
        backgroundColor:props.mode ==='dark'?'#0e4776':'white',
        color:props.mode ==='dark'?'white':'black'
    }
  return (
    <>
    <div className="container">
        <div className="accordion" id="accordionExample" style={{color:props.mode ==='dark'?'white':'black'}}>
            <h1>About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    TextUtils give a way to analyze your text quickly and efficiently. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is free character counter tool that provide instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    The word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document ,essays, etc.
                </div>
                </div>
            </div>
            </div>
    </div>
    </>
  )
}
