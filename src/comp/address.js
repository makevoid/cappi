import React from 'React'
import Comp from '../lib/comp'
import { PrivateKey } from 'Bitcore'

class Address extends Comp {
  address() {
    return new PrivateKey().toAddress().toString()
  }
  render() {
    return <div>
      <div>Address: { this.address() }</div>
    </div>
  }
}

export default Address
