import { Column, Entity } from "typeorm";

@Entity("quickmenu_click_stats", { schema: "makeshop" })
export class QuickmenuClickStats {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 20 })
  code: string;

  @Column("int", {
    name: "cnt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cnt: number | null;

  @Column("varchar", { primary: true, name: "date", length: 8 })
  date: string;
}
