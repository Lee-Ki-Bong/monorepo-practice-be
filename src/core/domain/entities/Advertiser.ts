import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("uidcate", ["adminuser", "uid"], {})
@Entity("advertiser", { schema: "makeshop" })
export class Advertiser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "click_key", nullable: true, length: 255 })
  clickKey: string | null;

  @Column("enum", {
    name: "send",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  send: "" | "Y" | "N" | null;

  @Column("int", { name: "price", nullable: true, unsigned: true })
  price: number | null;

  @Column("varchar", { name: "sendlog", nullable: true, length: 255 })
  sendlog: string | null;

  @Column("datetime", {
    name: "order_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderDate: Date;
}
