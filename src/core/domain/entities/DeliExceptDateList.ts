import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_deli_except_uid", ["deliExceptUid"], {})
@Index("uniq", ["adminuser", "deliExceptType", "deliExceptDate"], {
  unique: true,
})
@Entity("deli_except_date_list", { schema: "makeshop" })
export class DeliExceptDateList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({
    type: "int",
    name: "deli_except_uid",
    unsigned: true,
  })
  deliExceptUid: number;

  @Column("enum", {
    name: "deli_except_type",
    enum: ["", "DAY", "MONTH"],
    default: () => "'DAY'",
  })
  deliExceptType: "" | "DAY" | "MONTH";

  @Column("date", { name: "deli_except_date", default: () => "'0000-00-00'" })
  deliExceptDate: string;
}
