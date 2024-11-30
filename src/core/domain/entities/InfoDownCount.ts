import { Column, Entity } from "typeorm";

@Entity("info_down_count", { schema: "makeshop" })
export class InfoDownCount {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "subid", length: 20 })
  subid: string;

  @Column("enum", {
    primary: true,
    name: "dl_target",
    enum: ["", "USER", "ORDER"],
    default: () => "'USER'",
  })
  dlTarget: "" | "USER" | "ORDER";

  @Column("date", {
    primary: true,
    name: "dl_date",
    default: () => "'0000-00-00'",
  })
  dlDate: string;

  @Column("int", { name: "dl_count", unsigned: true, default: () => "'0'" })
  dlCount: number;
}
