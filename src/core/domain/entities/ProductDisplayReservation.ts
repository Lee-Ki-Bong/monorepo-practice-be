import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_action_date", ["adminuser", "actionDate"], {})
@Index("idx_auto_pdr_uid", ["pdrUid"], {})
@Index("idx_display", ["adminuser", "display"], {})
@Entity("product_display_reservation", { schema: "makeshop" })
export class ProductDisplayReservation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pdr_uid" })
  pdrUid: number;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("datetime", {
    name: "action_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  actionDate: Date;
}
