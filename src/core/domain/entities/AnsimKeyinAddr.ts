import { Column, Entity } from "typeorm";

@Entity("ansim_keyin_addr", { schema: "makeshop" })
export class AnsimKeyinAddr {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "sender_name", length: 30 })
  senderName: string;

  @Column("varchar", { name: "sender_mobile", length: 30 })
  senderMobile: string;

  @Column("varchar", { name: "sender_email", length: 50 })
  senderEmail: string;

  @Column("varchar", { name: "receiver_name", length: 32 })
  receiverName: string;

  @Column("varchar", { name: "receiver_mobile", length: 30 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_post", nullable: true, length: 10 })
  receiverPost: string | null;

  @Column("varchar", { name: "receiver_address", length: 100 })
  receiverAddress: string;

  @Column("varchar", { name: "receiver_address2", length: 100 })
  receiverAddress2: string;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("enum", {
    name: "event_sms",
    enum: ["", "C", "Y", "N"],
    default: () => "'C'",
  })
  eventSms: "" | "C" | "Y" | "N";
}
