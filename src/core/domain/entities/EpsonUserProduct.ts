import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_up_idx", ["upIdx"], {})
@Index("ms_uid", ["userId", "msUid", "serialNum"], {})
@Index("reg_date", ["regDate"], {})
@Index("serial_num", ["msUid", "serialNum"], { unique: true })
@Entity("epson_user_product", { schema: "makeshop" })
export class EpsonUserProduct {
  @Column("varchar", { primary: true, name: "user_id", length: 50 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "up_idx", unsigned: true })
  upIdx: number;

  @Column("int", { name: "ms_uid", unsigned: true, default: () => "'0'" })
  msUid: number;

  @Column("varchar", { name: "serial_num", length: 20 })
  serialNum: string;

  @Column("enum", {
    name: "display_type",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  displayType: "" | "Y" | "N";

  @Column("varchar", { name: "post", length: 7 })
  post: string;

  @Column("varchar", { name: "address1", length: 100 })
  address1: string;

  @Column("varchar", { name: "address2", length: 100 })
  address2: string;

  @Column("varchar", { name: "serial_image", length: 50 })
  serialImage: string;

  @Column("varchar", { name: "receipt_image", length: 50 })
  receiptImage: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'0'" })
  basketNum: number;

  @Column("date", { name: "buy_date", default: () => "'0000-00-00'" })
  buyDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
