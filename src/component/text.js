import React, { Component } from 'react';
// import firebase from 'firebase';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Text extends Component {
  constructor(prop) {
    super(prop)

    this.state = {

      value: '',
      flag: false,
      copied: false

    }

    this.handleChange = this.handleChange.bind(this);

    this.Clear = this.Clear.bind(this);

    this.Save = this.Save.bind(this);

    this.Copy = this.Copy.bind(this);

  }

  handleChange(event) {

    this.setState({

      value: event.target.value

    })

  }


  Clear() {
    this.setState({ value: '', flag: false })
    console.log(this.state.value)
  }

  Save() {
    this.setState({ flag: true })
  }

  Copy() {
    this.setState({ flag: false })
  }
  onCopy = () => {
    this.setState({ copied: true });
    alert('Text has been copied')
  };

  render() {
    return (
      <div>
        <div style={{ marginTop: '5%' }} className='container'>


          <div className='row'>
            <div className='col-md-3'>

            </div>
            <div className='col-md-6'>
              <div>
                <div style={{ marginTop: '5%' }} className='form-group'>

                  <h1 className='font-weight-bold'>
                    <label htmlFor="text">Text</label>
                  </h1>


                  <textarea className='form-control form-control-lg' id='text' rows='5' value={this.state.value} onChange={this.handleChange} placeholder='Type something....'></textarea>
                </div>

                {

                  (this.state.flag) ?
                    <section>
                      <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>

                        <button className='btn btn-success btn-lg float-right'>Copy</button>
                      </CopyToClipboard>
                    </section>

                    :

                    <button className='btn btn-info btn-lg float-right' onClick={this.Save}>Save</button>

                }
                <button className='btn btn-primary btn-lg' onClick={this.Clear}>Clear</button>
              </div>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>

      </div>


    );
  }
}

export default Text;