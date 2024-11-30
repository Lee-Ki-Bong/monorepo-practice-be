import { Column, Entity } from "typeorm";

@Entity("apisystem_order", { schema: "makeshop" })
export class ApisystemOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "startdate", length: 14 })
  startdate: string;

  @Column("varchar", { primary: true, name: "enddate", length: 14 })
  enddate: string;

  @Column("longtext", { name: "ordernum", nullable: true })
  ordernum: string | null;
}
