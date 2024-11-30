import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("delivery_address_book", { schema: "makeshop" })
export class DeliveryAddressBook {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "title", length: 30 })
  title: string;

  @Column("varchar", { name: "name", length: 32 })
  name: string;

  @Column("varchar", { name: "phone", length: 30 })
  phone: string;

  @Column("varchar", { name: "mobile", length: 30 })
  mobile: string;

  @Column("varchar", { name: "post", length: 10 })
  post: string;

  @Column("varchar", { name: "address", length: 100 })
  address: string;

  @Column("varchar", { name: "address2", length: 100 })
  address2: string;

  @Column("varchar", { name: "order_msg", length: 200 })
  orderMsg: string;

  @Column("varchar", { name: "deli_msg", length: 200 })
  deliMsg: string;

  @Column("varchar", { name: "sort_date", length: 14 })
  sortDate: string;

  @Column("enum", {
    name: "is_standard",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isStandard: "" | "Y" | "N";

  @Column("enum", {
    name: "is_address_privacy",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isAddressPrivacy: "" | "Y" | "N";
}
