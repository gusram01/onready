/**   Super Clase   */
export default class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  marcaModelo() {
    return `${this.marca} ${this.modelo}`;
  }

  static currency(precio) {
    const integer = precio.split('.')[0];
    const decimal = precio.split('.')[1].slice(0, 2);
    const convert = integer
      .split('')
      .reverse()
      .map((item, i) => {
        if (i > 0 && i % 3 === 0) {
          return `${item}.`;
        }
        return item;
      })
      .reverse()
      .join('');
    return `$${convert},${decimal}`;
  }
}
