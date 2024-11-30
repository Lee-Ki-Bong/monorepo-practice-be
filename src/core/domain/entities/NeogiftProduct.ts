import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("gift_pid", ["giftPid"], {})
@Index("Index_uid", ["adminuser", "giftCode", "giftGid", "uid"], {})
@Entity("neogift_product", { schema: "makeshop" })
export class NeogiftProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "gift_code",
    unsigned: true,
    default: () => "'0'",
  })
  giftCode: number;

  @Column("int", {
    primary: true,
    name: "gift_gid",
    unsigned: true,
    default: () => "'0'",
  })
  giftGid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "gift_pid", unsigned: true })
  giftPid: number;

  @Column("int", { name: "uid", default: () => "'0'" })
  uid: number;

  @Column("mediumtext", { name: "gift_option" })
  giftOption: string;

  @Column("enum", {
    name: "gift_auto",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  giftAuto: "" | "Y" | "N";

  @Column("int", { name: "gift_point", nullable: true, unsigned: true })
  giftPoint: number | null;

  @Column("smallint", {
    name: "gift_multi",
    unsigned: true,
    default: () => "'0'",
  })
  giftMulti: number;

  @Column("smallint", {
    name: "gift_amount",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  giftAmount: number | null;
}
