import { Column, Entity } from "typeorm";

@Entity("cart_delivery", { schema: "makeshop" })
export class CartDelivery {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "cart_id",
    unsigned: true,
    default: () => "'0'",
  })
  cartId: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "sender", length: 32 })
  sender: string;

  @Column("varchar", { name: "sender_mobile", length: 30 })
  senderMobile: string;

  @Column("varchar", { name: "receiver", length: 32 })
  receiver: string;

  @Column("varchar", { name: "receiver_mobile", length: 30 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_phone", length: 30 })
  receiverPhone: string;

  @Column("varchar", { name: "receiver_post", nullable: true, length: 10 })
  receiverPost: string | null;

  @Column("varchar", { name: "receiver_address", length: 100 })
  receiverAddress: string;

  @Column("varchar", { name: "receiver_address2", length: 100 })
  receiverAddress2: string;

  @Column("varchar", { name: "deli_msg", length: 200 })
  deliMsg: string;

  @Column("varchar", { name: "etctype", length: 255 })
  etctype: string;
}
