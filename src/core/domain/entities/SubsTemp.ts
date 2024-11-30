import { Column, Entity, Index } from "typeorm";

@Index("insert_date", ["adminuser", "stInsertDate"], {})
@Entity("subs_temp", { schema: "makeshop" })
export class SubsTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("datetime", {
    name: "st_insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  stInsertDate: Date;

  @Column("datetime", {
    name: "st_temp_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  stTempRegDate: Date;
}
