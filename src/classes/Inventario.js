import { inventarioInicial } from '../store/data';
import Vehiculo from './Vehiculo';
import Auto from './Auto';
import Moto from './Moto';

/**   Clase principal para manejo de información   */
export default class Inventario {
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

  /**     Método para imprimir en consola el vehiculo más caro,
   *  más económico y recibe un parametro de busqueda (solo hay
   *  que acordar dede donde se recibe dicho parametro) */
  compareAndSearch(letra) {
    const sorted = this.ordenDesc();
    const item = this.inv.find((model) => model.modelo.includes(letra));
    const str =
      `Vehículo más caro: ${sorted[0].marcaModelo()} \n` +
      `Vehículo más barato: ${sorted[sorted.length - 1].marcaModelo()} \n` +
      `Vehículo que contiene en el modelo la letra ‘${letra}’: ${item.marcaModelo()} ${Vehiculo.currency(
        item.precio,
      )} \n`;
    console.log(str);
  }

  /**     Método para imprimir todo el inventario   */
  all() {
    this.inv.forEach((item) => {
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
