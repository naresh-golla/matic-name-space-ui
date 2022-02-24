import React,{useEffect,useState} from 'react';
import Modal, {closeStyle} from 'simple-react-modal'
 
export default class ModalComponent extends React.Component{
 
  constructor(props){
    super(props)
    this.state = {
      show: true
    }
  }
 
  show(){
    this.setState({show: true})
  }
 
  close(){
    this.setState({show: false})
  }
 
 
  render(){
    const CONTRACT_ADDRESS = "0x5e83bC571CEFeE4808466ECFb4Ac5F9F6B8e776a"
    const OPENSEA_CONTRACT = "https://testnets.opensea.io/assets/mumbai/" + CONTRACT_ADDRESS;

    return (
      <div>
      <Modal
        class="modal-class"
        containerClassName="test"
        closeOnOuterClick={true}
        show={this.props.isModal}
        onClose={()=>this.props.isModalFn(!this.props.isModal)}
        >
          <a style={closeStyle} onClick={()=>this.props.isModalFn(!this.props.isModal)}>X</a>
          <div>{this.props.data} <a href={OPENSEA_CONTRACT}  target="_blank" rel="noopener noreferrer">Opensea</a></div>

      </Modal>
      </div>
    )
  }
}