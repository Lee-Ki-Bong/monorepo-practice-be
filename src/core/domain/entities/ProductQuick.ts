import { Column, Entity, Index } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("product_quick", { schema: "makeshop" })
export class ProductQuick {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
