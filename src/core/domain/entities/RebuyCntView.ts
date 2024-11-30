import { Column, Entity } from "typeorm";

@Entity("rebuy_cnt_view", { schema: "makeshop" })
export class RebuyCntView {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "date", length: 10 })
  date: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("int", { name: "PC", unsigned: true, default: () => "'0'" })
  pc: number;

  @Column("int", { name: "MOBILE", unsigned: true, default: () => "'0'" })
  mobile: number;
}
