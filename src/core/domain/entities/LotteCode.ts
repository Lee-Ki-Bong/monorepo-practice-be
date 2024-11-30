import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "lStatus"], {})
@Entity("lotte_code", { schema: "makeshop" })
export class LotteCode {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "l_code", length: 255 })
  lCode: string;

  @Column("varchar", { name: "l_name", length: 100 })
  lName: string;

  @Column("varchar", { name: "l_team", length: 100 })
  lTeam: string;

  @Column("varchar", { name: "l_status", length: 10 })
  lStatus: string;

  @Column("int", { name: "l_price", unsigned: true, default: () => "'0'" })
  lPrice: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
