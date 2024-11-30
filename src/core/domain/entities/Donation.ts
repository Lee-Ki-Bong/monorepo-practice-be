import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("regdate", ["adminuser", "uid", "regdate"], {})
@Entity("donation", { schema: "makeshop" })
export class Donation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("enum", {
    name: "type",
    nullable: true,
    enum: ["", "BUY", "RESERVE"],
    default: () => "'BUY'",
  })
  type: "" | "BUY" | "RESERVE" | null;

  @Column("int", { name: "donation", default: () => "'0'" })
  donation: number;

  @Column("varchar", { name: "content", nullable: true, length: 255 })
  content: string | null;

  @Column("enum", {
    name: "receipt",
    nullable: true,
    enum: ["", "NO", "YES", "WAIT"],
    default: () => "'NO'",
  })
  receipt: "" | "NO" | "YES" | "WAIT" | null;

  @Column("int", { name: "group_code", unsigned: true, default: () => "'0'" })
  groupCode: number;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("enum", {
    name: "donation_form",
    enum: ["", "RESERVE", "PRD"],
    default: () => "'RESERVE'",
  })
  donationForm: "" | "RESERVE" | "PRD";

  @Column("datetime", {
    name: "receipt_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  receiptDate: Date;

  @Column("datetime", {
    name: "receipt_print_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  receiptPrintDate: Date;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;
}
