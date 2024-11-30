import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("complete_date", ["adminuser", "completeDate"], {})
@Index("product_uid", ["productUid"], {})
@Index("uid", ["uid"], {})
@Entity("ocb_order_complete", { schema: "makeshop" })
export class OcbOrderComplete {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("varchar", { name: "provider_id", length: 12 })
  providerId: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("char", { name: "paymethod", length: 1 })
  paymethod: string;

  @Column("varchar", { name: "option_data", length: 255 })
  optionData: string;

  @Column("datetime", {
    name: "complete_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  completeDate: Date;

  @Column("varchar", {
    name: "prd_commission",
    length: 6,
    default: () => "'0'",
  })
  prdCommission: string;

  @Column("int", { name: "card_price", unsigned: true, default: () => "'0'" })
  cardPrice: number;

  @Column("int", { name: "ocb_point", unsigned: true, default: () => "'0'" })
  ocbPoint: number;

  @Column("int", {
    name: "commission_price",
    unsigned: true,
    default: () => "'0'",
  })
  commissionPrice: number;

  @Column("int", { name: "give_price", unsigned: true, default: () => "'0'" })
  givePrice: number;
}
