import React, { Component } from 'react';
import dataJson from './../data/teste_arvore_data.json'
import Tooltip from "react-simple-tooltip"


export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            week: ['Mon', 'Wed', 'Fri'],
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    }

    // verificar a cor do quadradinho
    verif(i){
        if(dataJson[i].count <= 7.2){
            return {backgroundColor: '#EBEDF0'}
        }
        else if(dataJson[i].count > 7.2 && dataJson[i].count <= 20){
            return {backgroundColor: '#C6E48B'}

        }
        else if(dataJson[i].count > 20 && dataJson[i].count <= 30){
            return {backgroundColor: '#7BCA6F'}

        }
        else if(dataJson[i].count > 30 && dataJson[i].count <= 40){
            return {backgroundColor: '#4D9B3C'}

        }
        else{
            return {backgroundColor: '#2E6128'}
        }
    }

    // fazer a matriz para cada quadradinho
    matriz(){
        const component = []
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 52; j++) {
                component.push(
                    <Tooltip content={dataJson[j].count}>
                        <div className="item" style={this.verif(j)}></div>
                    </Tooltip> 
                )

            }
        }
        return component
    }

    render(){
        return (
            <div className="containerMain">
                <div className="msg">
                    Por favor usar o WIDTH da tela em 1360px para não quebrar a aplicação,
                    não foi feito com media querie.
                </div>
                <div className="top">
                    <div>1,752 contribbutions in 2019</div>
                    <div>Contribution settings ▼ </div>
                </div>
                <div className="containerContri">
                    <div className="week">
                    {this.state.week.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })}
                    </div>
                    <div className="float">
                        <div className="month">
                            {
                                this.state.month.map((item) => {
                                return <div className="itemMonth">{item}</div>
                            })}
                        </div>
                        {this.matriz()}
                        <div className="footer">
                            <div className="text">learn how we count contribbutions.</div>
                            <div className="containerBox">
                                <div>Less</div>
                                <div className="boxFooter1"></div>
                                <div className="boxFooter2"></div>
                                <div className="boxFooter3"></div>
                                <div className="boxFooter4"></div>
                                <div className="boxFooter5"></div>
                                <div>More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}