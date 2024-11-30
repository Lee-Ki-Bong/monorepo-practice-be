import { Column, Entity } from "typeorm";

@Entity("evaluation_product", { schema: "makeshop" })
export class EvaluationProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_code",
    length: 20,
    default: () => "'BASIC'",
  })
  evCode: string;

  @Column("int", {
    primary: true,
    name: "ev_uid",
    unsigned: true,
    default: () => "'0'",
  })
  evUid: number;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;
}
