import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.5);
   position: fixed;
   z-index: 1;
`;

const ModalBody = styled.div`
   background-color: white;
   margin: 10% auto;
   padding: 2rem;
   width: 50%;
`;

const Modal = ({children}) => {
  const [ shouldShow, setShouldShow ] = useState(false);  
  return (
        <>
           <button onClick={() => setShouldShow(!shouldShow)}>Show Modal</button>
           { shouldShow && <ModalBackground onClick={() => setShouldShow(false)}>
               <ModalBody onClick={ e => e.stopPropagation()}>
                 <button onClick={() => setShouldShow(false)}>close</button>
                 <br/>
                 {children}
               </ModalBody>
               </ModalBackground>
            }
            {/*
            onClick={ e => e.stopPropagation()
            we use it because if sth inside children clicks, the model doen't close
            */}
        </>
    )}

export default Modal
