import { Column, Entity, Index } from "typeorm";

@Index("pc_idx", ["adminuser", "accessType"], {})
@Entity("product_control", { schema: "makeshop" })
export class ProductControl {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    name: "use_common_info",
    enum: ["", "YES", "NO", "EACH"],
    default: () => "'YES'",
  })
  useCommonInfo: "" | "YES" | "NO" | "EACH";

  @Column("enum", {
    name: "use_common_info_event",
    enum: ["", "YES", "NO", "EACH"],
    default: () => "'YES'",
  })
  useCommonInfoEvent: "" | "YES" | "NO" | "EACH";

  @Column("enum", {
    name: "access_type",
    enum: ["", "NO", "ALL", "LEVEL", "GROUP", "ADU"],
    default: () => "'NO'",
  })
  accessType: "" | "NO" | "ALL" | "LEVEL" | "GROUP" | "ADU";

  @Column("varchar", { name: "access_group", nullable: true, length: 40 })
  accessGroup: string | null;

  @Column("varchar", { name: "access_msg", nullable: true, length: 255 })
  accessMsg: string | null;
}
