import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("edge_cms", { schema: "makeshop" })
export class EdgeCms {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "userid", length: 12 })
  userid: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("int", { name: "in_price", default: () => "'0'" })
  inPrice: number;

  @Column("int", { name: "cms_price", default: () => "'0'" })
  cmsPrice: number;

  @Column("int", { name: "edge_price", default: () => "'0'" })
  edgePrice: number;

  @Column("int", { name: "tax", default: () => "'0'" })
  tax: number;

  @Column("char", { name: "delivery", nullable: true, length: 2 })
  delivery: string | null;

  @Column("datetime", {
    name: "cms_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cmsDate: Date;
}
