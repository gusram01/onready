'Use strict';

/**    Datos iniciales   */
const inventarioInicial = [
  { marca: 'Peugeot', modelo: '206', precio: '200000.00', puertas: 4 },
  { marca: 'Honda', modelo: 'Titan', precio: '60000.00', cilindrada: '125cc' },
  { marca: 'Yamaha', modelo: 'YBR', precio: '80500.50', cilindrada: '160cc' },
  { marca: 'Peugeot', modelo: '208', precio: '250000.00', puertas: 5 },
];

/**   Clase principal para manejo de información   */
class Inventario {
  constructor() {
    this.inv = [];
    this.cargaInicial();
  }

  /**   Dependiendo de una propiedad particular se genera una instacia de auto o moto  */
  newItem(args) {
    if (args.puertas) {
      const { marca, modelo, precio, puertas } = args;
      this.inv.push(new Auto(marca, modelo, precio, puertas));
      return;
    }
    if (args.cilindrada) {
      const { marca, modelo, precio, cilindrada } = args;
      const nuevaMoto = new Moto(marca, modelo, precio, cilindrada);
      this.inv.push(nuevaMoto);
      return;
    }
  }

  /**   idealmente seria un método privado   */
  cargaInicial() {
    inventarioInicial.map((item) => this.newItem(item));
  }

  /**   Helper para obtener el inventario ordenado de manera decreciente por precio */
  ordenDesc() {
    return this.inv.sort((a, b) => +b.precio - +a.precio);
  }

  /**     Método para imprimir en consola la lista ordenada */
  listDesc() {
    const str = 'Vehículos ordenados por precio de mayor a menor: \n';
    const list = this.ordenDesc()
      .map((item) => item.marcaModelo())
      .join('\n');
    console.log(str + list);
  }

  /**     Método para imprimir en consola el vehiculo más caro, más económico y recibe un parametro de busqueda (solo hay que acordar dede donde se recibe dicho parametro) */
  compareAndSearch(letra) {
    const sorted = this.ordenDesc();
    const item = this.inv.find((item) => item.modelo.includes(letra));
    const str =
      `Vehículo más caro: ${sorted[0].marcaModelo()} \n` +
      `Vehículo más barato: ${sorted[sorted.length - 1].marcaModelo()} \n` +
      `Vehículo que contiene en el modelo la letra ‘${letra}’: ${item.marcaModelo()} ${Vehiculo.currency(
        item.precio
      )} \n`;
    console.log(str);
  }

  /**     Método para imprimir todo el inventario   */
  all() {
    this.inv.map((item) => {
      console.log(item.toString());
    });
  }

  /**     Método publico para obtener la información requerida   */
  print() {
    this.all();
    console.log('=============================');
    this.listDesc();
    console.log('=============================');
    this.compareAndSearch('Y');
  }
}

/**   Super Clase   */
class Vehiculo {
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
          return item + '.';
        }
        return item;
      })
      .reverse()
      .join('');
    return `$${convert},${decimal}`;
  }
}

/**   Clase hija que hereda de Vehiculo  */
class Auto extends Vehiculo {
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

/**   Clase hija que hereda de Vehiculo  */
class Moto extends Vehiculo {
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

/**   Instanciación de clase Inventario y llamada del método print()  */
const myInv = new Inventario();
myInv.print();
