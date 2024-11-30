import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_action_date", ["adminuser", "actionDate"], {})
@Index("idx_auto_pdr_uid", ["pdrUid"], {})
@Index("idx_sell_accept", ["adminuser", "sellAccept"], {})
@Entity("product_sell_accept_reservation", { schema: "makeshop" })
export class ProductSellAcceptReservation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pdr_uid" })
  pdrUid: number;

  @Column("enum", {
    name: "sell_accept",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  sellAccept: "" | "Y" | "N";

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("datetime", {
    name: "action_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  actionDate: Date;
}
