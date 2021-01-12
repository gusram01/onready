import Vehiculo from './Vehiculo';

/**   Clase hija que hereda de Vehiculo  */
export default class Moto extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }

  toString() {
    return `Marca: ${this.marca}  //  Modelo: ${this.modelo}  //  Cilindrada: ${
      this.cilindrada
    }  // Precio: ${Vehiculo.currency(this.precio)}`;
  }
}
