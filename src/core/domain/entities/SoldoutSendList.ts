import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("brand_uid", ["adminuser", "brandUid"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("soldout_send_list", { schema: "makeshop" })
export class SoldoutSendList {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "brand_uid", unsigned: true, default: () => "'0'" })
  brandUid: number;

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;

  @Column("enum", {
    name: "send_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendType: "" | "Y" | "N" | null;

  @Column("datetime", {
    name: "send_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  sendDate: Date;
}
