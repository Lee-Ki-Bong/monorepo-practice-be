import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ht_date", ["adminuser", "htClickDate"], {})
@Index("idx_auto_ht_uid", ["htUid"], {})
@Entity("hashtag", { schema: "makeshop" })
export class Hashtag {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ht_uid", unsigned: true })
  htUid: number;

  @Column("varchar", { name: "ht_tag", length: 255 })
  htTag: string;

  @Column("enum", {
    name: "ht_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  htPath: "" | "WEB" | "MOBILE";

  @Column("enum", {
    name: "ht_mem",
    enum: ["", "MEM", "GUEST"],
    default: () => "'MEM'",
  })
  htMem: "" | "MEM" | "GUEST";

  @Column("datetime", {
    name: "ht_click_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  htClickDate: Date;
}
