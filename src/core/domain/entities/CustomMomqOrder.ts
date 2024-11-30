import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("index_ord_type", ["adminuser", "ordType"], {})
@Index("index_search_date", ["adminuser", "searchDate"], {})
@Entity("custom_momq_order", { schema: "makeshop" })
export class CustomMomqOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("int", { name: "item_cd", unsigned: true, default: () => "'0'" })
  itemCd: number;

  @Column("varchar", { name: "item_local", length: 10 })
  itemLocal: string;

  @Column("int", { name: "plant_no", unsigned: true, default: () => "'0'" })
  plantNo: number;

  @Column("varchar", { name: "item_name", length: 255 })
  itemName: string;

  @Column("int", { name: "ord_cnt", unsigned: true, default: () => "'1'" })
  ordCnt: number;

  @Column("varchar", { name: "ord_type_str", length: 20 })
  ordTypeStr: string;

  @Column("varchar", { name: "channel_cd", length: 20 })
  channelCd: string;

  @Column("varchar", { name: "channel", length: 50 })
  channel: string;

  @Column("int", { name: "sales_price", default: () => "'0'" })
  salesPrice: number;

  @Column("int", {
    name: "item_local_num",
    unsigned: true,
    default: () => "'0'",
  })
  itemLocalNum: number;

  @Column("char", { name: "ord_type", length: 1 })
  ordType: string;

  @Column("date", { name: "ord_date", default: () => "'0000-00-00'" })
  ordDate: string;

  @Column("date", { name: "search_date", nullable: true })
  searchDate: string | null;

  @Column("date", { name: "in_search_date", nullable: true })
  inSearchDate: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
