import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {

  public productos: Producto[] = [
    { id: "1", nombre: "camara", precioVenta: 20000, comentario: "color blanco" },
    { id: "2", nombre: "Video valum", precioVenta: 30000, comentario: "color blanco" },
    { id: "3", nombre: "fuente", precioVenta: 50000, comentario: "color blanco" },
    { id: "4", nombre: "otro", precioVenta: 10000, comentario: "color blanco" },
    { id: "5", nombre: "otro otro", precioVenta: 25000, comentario: "color blanco" }
  ];

  public productList: Producto[] = [];
  public producto: Producto = null;

  displayedColumns: string[] = ['name', 'precioVenta', 'comentario', 'remove'];
  dataSource = new MatTableDataSource(this.productList);

  constructor() { }

  ngOnInit(): void {
  }

  public agregarProductos(id: string){
    var idAux = "";
    this.producto = this.productos.find(el => el.id === id);
    this.productList.push({
      id: this.producto.id,
      nombre: this.producto.nombre,
      precioVenta: this.producto.precioVenta,
      comentario: this.producto.comentario
    });
    this.dataSource = new MatTableDataSource(this.productList);

    var el = this.productos.findIndex(_el => _el.id === this.producto.id);
    if (el > -1) {
      this.productos.splice(el, 1);
    }
  }

  public removerProducto(id: string){
    var producto = this.productList.find(el => el.id === id);
    this.productos.push({
      id: producto.id,
      nombre: producto.nombre,
      precioVenta: producto.precioVenta,
      comentario: producto.comentario
    });

    var el = this.productList.findIndex(_el => _el.id === producto.id);
    if (el > -1) {
      this.productList.splice(el, 1);
    }
    this.dataSource = new MatTableDataSource(this.productList);
  }

}
