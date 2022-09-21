import React from 'react';


import './styles.css'

const ImageText = ({text, title, subtitle1, subtitle2, firstOption, secondOption}) => {

    return(
        <div className="content-imagetext">
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="content-table">
                    <div className="content-row">
                        <h4>{subtitle1}</h4>
                        {firstOption.map((a) =>
                            <div className="values">
                                <p>{a.nome}</p>
                                <p className="real">.  R$:{a.valor}</p>
                            </div>         
                        )}
                    </div>
                    <div>
                        <h4>{subtitle2}</h4>
                        {secondOption.map((a) =>
                            <div className="values">
                            <p>{a.nome}</p>
                            <p className="real">.  R$:{a.valor}</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageText;