import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user", ["adminuser", "id"], {})
@Entity("temporder_supply", { schema: "makeshop" })
export class TemporderSupply {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "supplycode", length: 15 })
  supplycode: string;

  @Column("char", { name: "supplycomgroup", length: 1 })
  supplycomgroup: string;

  @Column("varchar", { name: "supplyname", length: 150 })
  supplyname: string;

  @Column("varchar", { name: "supplyuser", length: 80 })
  supplyuser: string;

  @Column("varchar", { name: "supplytel", length: 20 })
  supplytel: string;

  @Column("varchar", { name: "supplyaddr", length: 150 })
  supplyaddr: string;

  @Column("varchar", { name: "addcode", length: 150 })
  addcode: string;

  @Column("varchar", { name: "product", length: 255 })
  product: string;

  @Column("int", { name: "productcnt", unsigned: true, default: () => "'0'" })
  productcnt: number;

  @Column("varchar", { name: "option1", length: 150 })
  option1: string;

  @Column("varchar", { name: "option2", length: 150 })
  option2: string;

  @Column("int", { name: "optioncnt", unsigned: true, default: () => "'0'" })
  optioncnt: number;

  @Column("varchar", { name: "supply", length: 30 })
  supply: string;

  @Column("varchar", { name: "production", length: 150 })
  production: string;

  @Column("varchar", { name: "model", length: 150 })
  model: string;

  @Column("int", { name: "buyprice", unsigned: true, default: () => "'0'" })
  buyprice: number;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "add_uid", length: 12 })
  addUid: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
