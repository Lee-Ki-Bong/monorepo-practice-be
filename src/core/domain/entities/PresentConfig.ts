import { Column, Entity } from "typeorm";

@Entity("present_config", { schema: "makeshop" })
export class PresentConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumtext", { name: "present_card_pc", nullable: true })
  presentCardPc: string | null;

  @Column("mediumtext", { name: "present_card_mo", nullable: true })
  presentCardMo: string | null;

  @Column("char", { name: "present_use", length: 1, default: () => "'N'" })
  presentUse: string;

  @Column("tinyint", {
    name: "present_approval_enddate",
    width: 1,
    default: () => "'5'",
  })
  presentApprovalEnddate: boolean;

  @Column("char", {
    name: "present_guest_use",
    length: 1,
    default: () => "'N'",
  })
  presentGuestUse: string;

  @Column("varchar", { name: "present_icon", length: 255 })
  presentIcon: string;

  @Column("varchar", { name: "present_icon_mo", length: 100 })
  presentIconMo: string;

  @Column("set", {
    name: "present_range",
    nullable: true,
    enum: ["SHOPDETAIL", "BASKET"],
    default: () => ["SHOPDETAIL"],
  })
  presentRange: ("SHOPDETAIL" | "BASKET")[] | null;

  @Column("char", { name: "present_review", length: 1, default: () => "'N'" })
  presentReview: string;
}
