import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser", "id"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("partner_order", { schema: "makeshop" })
export class PartnerOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "user_name", length: 30 })
  userName: string;

  @Column("varchar", { name: "user_comname", nullable: true, length: 50 })
  userComname: string | null;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
