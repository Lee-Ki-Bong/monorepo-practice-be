import { Column, Entity, Index } from "typeorm";

@Index("bank_date", ["bankDate"], {})
@Index("delivery", ["delivery"], {})
@Index("id", ["id"], {})
@Index("ordernum", ["ordernum"], {})
@Index("receiver", ["receiver"], {})
@Index("sender", ["sender"], {})
@Entity("orderinfo2", { schema: "makeshop" })
export class Orderinfo2 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "id", length: 13 })
  id: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("varchar", { name: "place", nullable: true, length: 150 })
  place: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("char", { name: "paymethod", nullable: true, length: 1 })
  paymethod: string | null;

  @Column("varchar", { name: "paydata", nullable: true, length: 60 })
  paydata: string | null;

  @Column("varchar", { name: "bank_date", nullable: true, length: 14 })
  bankDate: string | null;

  @Column("varchar", {
    name: "card_flag",
    nullable: true,
    length: 8,
    default: () => "'N'",
  })
  cardFlag: string | null;

  @Column("varchar", { name: "card_ok_num", nullable: true, length: 15 })
  cardOkNum: string | null;

  @Column("char", {
    name: "admin_card_flag",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminCardFlag: string | null;

  @Column("varchar", { name: "sender", nullable: true, length: 30 })
  sender: string | null;

  @Column("varchar", { name: "receiver", nullable: true, length: 30 })
  receiver: string | null;

  @Column("char", {
    name: "delivery",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  delivery: string | null;

  @Column("char", { name: "deli_com", nullable: true, length: 3 })
  deliCom: string | null;

  @Column("varchar", { name: "deli_num", nullable: true, length: 32 })
  deliNum: string | null;

  @Column("varchar", { name: "deli_date", nullable: true, length: 14 })
  deliDate: string | null;

  @Column("varchar", { name: "emergency", nullable: true, length: 30 })
  emergency: string | null;

  @Column("varchar", { name: "emergency2", nullable: true, length: 30 })
  emergency2: string | null;

  @Column("varchar", { name: "emergency3", nullable: true, length: 30 })
  emergency3: string | null;

  @Column("int", { name: "price", nullable: true })
  price: number | null;

  @Column("int", { name: "deli_price", nullable: true, default: () => "'0'" })
  deliPrice: number | null;

  @Column("varchar", {
    name: "dc_price",
    nullable: true,
    length: 9,
    default: () => "'0'",
  })
  dcPrice: string | null;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 30 })
  email: string | null;

  @Column("varchar", { name: "pojangji", nullable: true, length: 30 })
  pojangji: string | null;

  @Column("varchar", { name: "etctype", nullable: true, length: 255 })
  etctype: string | null;

  @Column("char", {
    name: "del",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  del: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "link_id", nullable: true, length: 12 })
  linkId: string | null;

  @Column("mediumint", { name: "provider", nullable: true, unsigned: true })
  provider: number | null;
}
