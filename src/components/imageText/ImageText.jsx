import React from 'react';

import bebidas from "../../assets/data/bebidas.json"

import './styles.css'

const ImageText = ({text, title, subtitle1, subtitle2}) => {

    console.log(bebidas)

    return(
        <div className="content-imagetext">
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="content-table">
                    <div>
                        <h4>{subtitle1}</h4>
                        {bebidas.map((a) =>
                            <p>{a.nome}</p>
                        )}
                    </div>
                    <div>
                        <h4>{subtitle2}</h4>
                        {bebidas.map((a) =>
                            <p>{a.nome}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageText;