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

const UncontrolledModal = ({shouldShow, onRequestClose, children}) => {
  return  shouldShow ? (  
                        <ModalBackground onClick={onRequestClose}>
                           <ModalBody onClick={ e => e.stopPropagation()}>
                              <button onClick={onRequestClose}>close</button>
                              <br/>
                              {children}
                            </ModalBody>
                        </ModalBackground>
                      ) : null
  }
      
export default UncontrolledModal
