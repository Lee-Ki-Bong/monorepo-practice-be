import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "userId", "brandUid"], {})
@Index("brand_uid", ["adminuser", "brandUid"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("register_date", ["adminuser", "registerDate"], {})
@Entity("soldout_smslist", { schema: "makeshop" })
export class SoldoutSmslist {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("int", { name: "brand_uid", unsigned: true, default: () => "'0'" })
  brandUid: number;

  @Column("mediumtext", { name: "option_value" })
  optionValue: string;

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("varchar", { name: "user_hphone", nullable: true, length: 20 })
  userHphone: string | null;

  @Column("varchar", { name: "user_hname", nullable: true, length: 30 })
  userHname: string | null;

  @Column("varchar", { name: "user_email", nullable: true, length: 35 })
  userEmail: string | null;

  @Column("enum", {
    name: "sendsms",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendsms: "" | "Y" | "N" | null;

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;

  @Column("datetime", {
    name: "send_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  sendDate: Date;
}
