import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_termturn", ["termturn"], {})
@Index("idx_ordernum", ["adminuser", "ordernum"], {})
@Entity("oo_termdelivery", { schema: "makeshop" })
export class OoTermdelivery {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "termturn" })
  termturn: number;

  @Column("varchar", { name: "termdate", length: 8 })
  termdate: string;

  @Column("char", { name: "termstatus", length: 1, default: () => "'N'" })
  termstatus: string;

  @Column("varchar", { name: "newordernum", length: 26 })
  newordernum: string;

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
}
