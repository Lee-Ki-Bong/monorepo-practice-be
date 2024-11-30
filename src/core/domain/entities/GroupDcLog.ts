import { Column, Entity } from "typeorm";

@Entity("group_dc_log", { schema: "makeshop" })
export class GroupDcLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "group_code", length: 4 })
  groupCode: string;

  @Column("int", { name: "add_dc_price", default: () => "'0'" })
  addDcPrice: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
