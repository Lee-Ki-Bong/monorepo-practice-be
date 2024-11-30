import { Column, Entity } from "typeorm";

@Entity("cart_target", { schema: "makeshop" })
export class CartTarget {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "total_cart_target_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  totalCartTargetUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "cart_target_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cartTargetUse: "" | "Y" | "N";

  @Column("enum", {
    name: "cart_target_mail_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cartTargetMailUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "cart_target_recommend_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cartTargetRecommendUse: "" | "Y" | "N" | null;

  @Column("varchar", { name: "send_date", length: 12 })
  sendDate: string;

  @Column("enum", {
    name: "cart_type",
    enum: ["", "default", "new"],
    default: () => "'new'",
  })
  cartType: "" | "default" | "new";

  @Column("enum", {
    name: "send_type",
    enum: ["", "LMS", "LMS_PUSH", "PUSH"],
    default: () => "'LMS'",
  })
  sendType: "" | "LMS" | "LMS_PUSH" | "PUSH";

  @Column("enum", {
    name: "url_type",
    enum: ["", "default", "short"],
    default: () => "'default'",
  })
  urlType: "" | "default" | "short";

  @Column("enum", {
    name: "receive",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  receive: "" | "Y" | "N";

  @Column("enum", {
    name: "nospam",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nospam: "" | "Y" | "N";

  @Column("mediumtext", { name: "message" })
  message: string;

  @Column("enum", {
    name: "add_ad",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  addAd: "" | "Y" | "N";

  @Column("enum", {
    name: "send_target",
    nullable: true,
    enum: ["", "ALL", "GROUP"],
    default: () => "'ALL'",
  })
  sendTarget: "" | "ALL" | "GROUP" | null;

  @Column("varchar", { name: "group_list", nullable: true, length: 255 })
  groupList: string | null;
}
