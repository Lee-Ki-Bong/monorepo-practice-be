import { Column, Entity, Index } from "typeorm";

@Index("link_id", ["adminuser", "linkId"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("inflow_order_enuri", { schema: "makeshop" })
export class InflowOrderEnuri {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "link_id", length: 20 })
  linkId: string;

  @Column("varchar", { name: "code", nullable: true, length: 50 })
  code: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
