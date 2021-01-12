import Vehiculo from './Vehiculo';

/**   Clase hija que hereda de Vehiculo  */
export default class Auto extends Vehiculo {
  constructor(marca, modelo, precio, puertas) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }

  toString() {
    return `Marca: ${this.marca}  //  Modelo: ${this.modelo}  //  Puertas: ${
      this.puertas
    }  // Precio: ${Vehiculo.currency(this.precio)}`;
  }
}
