import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import './Home.scss';
import mainActions from 'main/main.actions';

/*type HomeProps = PropsFromRedux & {
    
}*/

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Home = (props) => {

    useEffect(() => {
        props.backto(1);
    }, [])

    return (
        <div className='Home empty-home' >
            <h2>¡Hola!</h2>
            <h4>Aca veras el listado de tus cotizaciones</h4>
            <h5>Podes Empezar por:</h5>
            <div className="controls">
            <Button  className="button" href="/cotizar" 
                onClick={ ()=>{ props.goto( { name:"Cotizar", url:"/cotizar" } ) } } 
            >Cotizar</Button>

            <Button  className="button" /*href="/emitir" 
                onClick={ ()=>{ props.goto( { name:"Emitir", url:"/emitir" } ) } } */ 
            >Emitir</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps= (dispatch)=>{
    
  return{
    goto: (e)=>{dispatch(mainActions.goto(e))},
    backto: (e)=>{dispatch(mainActions.backto(e))},
  }
}

Home.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

