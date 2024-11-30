import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "orderid", "pnum"], { unique: true })
@Entity("nhn_orderproduct", { schema: "makeshop" })
export class NhnOrderproduct {
  @PrimaryGeneratedColumn({ type: "int", name: "num" })
  num: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "malluid", length: 120 })
  malluid: string;

  @Column("varchar", { name: "orderid", length: 30 })
  orderid: string;

  @Column("varchar", { name: "productname", length: 180 })
  productname: string;

  @Column("varchar", { name: "productid", length: 180 })
  productid: string;

  @Column("mediumtext", { name: "productoption", nullable: true })
  productoption: string | null;

  @Column("int", { name: "quantity", default: () => "'0'" })
  quantity: number;

  @Column("int", { name: "unitprice", default: () => "'0'" })
  unitprice: number;

  @Column("varchar", { name: "returnrequested", length: 40 })
  returnrequested: string;

  @Column("int", { name: "pnum", default: () => "'0'" })
  pnum: number;
}
