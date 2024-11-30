import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adAdvertise", "adType"], { unique: true })
@Index("idx_auto_ad_uid", ["adUid"], {})
@Entity("keyword_advertise", { schema: "makeshop" })
export class KeywordAdvertise {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ad_uid", unsigned: true })
  adUid: number;

  @Column("varchar", { name: "ad_advertise", length: 50 })
  adAdvertise: string;

  @Column("varchar", { name: "ad_url", length: 255 })
  adUrl: string;

  @Column("enum", {
    name: "ad_type",
    nullable: true,
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  adType: "" | "PC" | "MOBILE" | null;
}
