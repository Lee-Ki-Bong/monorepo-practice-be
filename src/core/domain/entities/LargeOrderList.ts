import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "largeNum", "lolIdx"], { unique: true })
@Index("idx_auto_lol_idx", ["lolIdx"], {})
@Entity("large_order_list", { schema: "makeshop" })
export class LargeOrderList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "large_num", unsigned: true, default: () => "'0'" })
  largeNum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "lol_idx", unsigned: true })
  lolIdx: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "post", nullable: true, length: 10 })
  post: string | null;

  @Column("varchar", { name: "address", length: 100 })
  address: string;

  @Column("varchar", { name: "address2", length: 100 })
  address2: string;

  @Column("varchar", { name: "receiver", length: 32 })
  receiver: string;

  @Column("varchar", { name: "receiver_mobile", length: 30 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_phone", length: 30 })
  receiverPhone: string;

  @Column("int", { name: "sell_price", default: () => "'0'" })
  sellPrice: number;

  @Column("int", { name: "sale_price", default: () => "'0'" })
  salePrice: number;

  @Column("datetime", {
    name: "hope_deli_s_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  hopeDeliSDate: Date;

  @Column("datetime", {
    name: "hope_deli_e_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  hopeDeliEDate: Date;

  @Column("mediumtext", { name: "add_data" })
  addData: string;
}
