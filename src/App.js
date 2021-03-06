
import React, { Component } from 'react';

import Modal from './Modal/Modal';
import MemberForm from './Forms/MemberForm';
import ProductsFrom from './Forms/ProductsForm';

import './App.css';

class App extends Component {
  state = {
    showModal: false,
    formType: ''
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="app">
        <button className="modal_opener" onClick={() => {
          this.toggleModal();
          this.setState({formType:'addNew'})
        }}>
          Add New <span role="img" aria-label="emoji">😛</span>
        </button>
        <button className="modal_opener" onClick={() =>{
          this.toggleModal()
          this.setState({formType:'products'})
          }}>
          Products <span role="img" aria-label="emoji">😛</span>
        </button>
        
        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <>
          {
            this.state.formType === 'addNew' ? <MemberForm/> 
            : this.state.formType === 'products' ? <ProductsFrom/> 
            : null
          }
            {/* <h2>Told Ya!</h2>
            <iframe title="giphy" src="https://giphy.com/embed/l52CGyJ4LZPa0" width="480" height="273" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sandler-sentences-sounding-l52CGyJ4LZPa0">via GIPHY</a></p> */}

          </>
        </Modal>
      </div>
    );
  }
}

export default App;