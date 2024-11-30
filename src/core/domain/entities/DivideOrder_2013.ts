import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser", "id"], {})
@Index("id_idx", ["adminuser", "ordernum", "id"], {})
@Entity("divide_order_2013", { schema: "makeshop" })
export class DivideOrder_2013 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("enum", {
    name: "temp_type",
    enum: ["", "ORDER", "TEMP"],
    default: () => "'ORDER'",
  })
  tempType: "" | "ORDER" | "TEMP";

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "sender", length: 255 })
  sender: string;

  @Column("varchar", { name: "banker", length: 255 })
  banker: string;

  @Column("varchar", { name: "receiver", nullable: true, length: 255 })
  receiver: string | null;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("varchar", { name: "mobile", length: 255 })
  mobile: string;

  @Column("varchar", { name: "emergency", length: 255 })
  emergency: string;

  @Column("varchar", { name: "emergency2", length: 255 })
  emergency2: string;

  @Column("varchar", { name: "emergency3", length: 255 })
  emergency3: string;

  @Column("mediumtext", { name: "email", nullable: true })
  email: string | null;

  @Column("mediumtext", { name: "place", nullable: true })
  place: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;
}
