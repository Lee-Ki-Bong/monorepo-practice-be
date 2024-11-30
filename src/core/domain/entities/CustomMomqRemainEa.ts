import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("index_year_eol", ["adminuser", "yearMonth", "eolYn"], {})
@Index("index_year_month", ["adminuser", "yearMonth"], {})
@Entity("custom_momq_remain_ea", { schema: "makeshop" })
export class CustomMomqRemainEa {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("int", { name: "item_cd", unsigned: true, default: () => "'0'" })
  itemCd: number;

  @Column("varchar", { name: "year_month", length: 7 })
  yearMonth: string;

  @Column("varchar", { name: "item_name", length: 255 })
  itemName: string;

  @Column("int", { name: "vat", default: () => "'0'" })
  vat: number;

  @Column("varchar", { name: "channel_cd", length: 20 })
  channelCd: string;

  @Column("int", { name: "remain_cnt", unsigned: true, default: () => "'1'" })
  remainCnt: number;

  @Column("datetime", { name: "datetime", nullable: true })
  datetime: Date | null;

  @Column("varchar", { name: "channel", length: 50 })
  channel: string;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("int", { name: "sales_price", default: () => "'0'" })
  salesPrice: number;

  @Column("int", { name: "lp", default: () => "'0'" })
  lp: number;

  @Column("varchar", { name: "eol_yn", nullable: true, length: 10 })
  eolYn: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
