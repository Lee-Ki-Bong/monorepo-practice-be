import { Column, Entity, Index } from "typeorm";

@Index("delivery_num", ["adminuser", "deliveryNum"], {})
@Entity("divide_oo_delivery_2019", { schema: "makeshop" })
export class DivideOoDelivery_2019 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "delivery_num", length: 23 })
  deliveryNum: string;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "post", length: 255 })
  post: string;

  @Column("mediumtext", { name: "address", nullable: true })
  address: string | null;

  @Column("mediumtext", { name: "address2", nullable: true })
  address2: string | null;

  @Column("varchar", { name: "receiver", length: 255 })
  receiver: string;

  @Column("varchar", { name: "receiver_mobile", length: 255 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_phone", length: 255 })
  receiverPhone: string;
}
