import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





export default props => {



    const lista = () => {
        // console.log(this.props.change);
        const lista = props.lista || [];
        console.log(lista);
        

        return lista.map(todo => <h1> {todo.nome} </h1>)
    }


    return (
        <div>
            <div>
                {lista()}
            </div>

            <TextField onChange={props.change} value={props.valor} id="full-width" />
            <Button color="primary" onClick={props.btn} className="teste">
                Primary
            </Button>
        </div>

    )




}




