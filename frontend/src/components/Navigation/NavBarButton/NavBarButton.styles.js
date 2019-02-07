import styled, {css} from 'styled-components'
import LightenDarkenColor from '../../../utils/colors'

const rippleEffect = css`
    position: relative;
    overflow: hidden;    

    &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, .5);
        opacity: 0;
        border-radius: 100%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
    }

    @keyframes ripple {
        0% {
            transform: scale(0, 0);
            opacity: 1;
        }
        20% {
            transform: scale(25, 25);
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(40, 40);
        }
    }

    &:focus:not(:active)::after{
        animation: ripple 1s ease-out;
    }
`
const Container = styled.div`             
    box-sizing: border-box;                
    button {
        height: 40px;
        width: 40px;        
        background: none;
        background-image: none;
        background-color: transparent;        
        border: none;        
        border-radius: 50%;
        color: white;                
        outline: none;
        box-shadow: none;                
        -webkit-tap-highlight-color: transparent;
        touch-action: none;
        cursor: pointer;        

        ${() => rippleEffect}
        
        /*
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);           

        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
            background-repeat: no-repeat;
            background-position: 50%;
            transform: scale(10, 10);
            opacity: 0;
            transition: transform .2s, opacity 1s;   
        }                   
        &:active::after{
            transform: scale(0, 0);
            opacity: .3;
            transition: 0s;              
        }*/  

        &:focus, &:active, .active, &:active:focus        
        {
            background-image: none;
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            touch-action: none;
        }
        
        &:hover{
            background-color: ${props => LightenDarkenColor(props.theme.primary, -25)};            
        }  

        svg {
            height: 60%; 
            pointer-events: none;           
        }        
    }      
    

    /*
    @media (min-width: 726px) {
      display: none;
    }*/
`

export default Container;